from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save,post_delete
from django.dispatch import receiver
from rest_framework_simplejwt.tokens import RefreshToken

# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    user_img = models.ImageField(upload_to="user_img",blank=True)
    REQUIRED_FIELDS=['email','first_name']

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return{
            'refresh':str(refresh),
            'access':str(refresh.access_token)
        }
class TodoList(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='owned_lists')
    collaborators = models.ManyToManyField(CustomUser, related_name='shared_lists')
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Task(models.Model):
    PRIORITY_CHOICES = [
        ('high', 'High'),
        ('medium', 'Medium'),
        ('low', 'Low'),
    ]
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    deadline = models.DateTimeField(null=True, blank=True)
    priority = models.CharField(max_length=50, choices=PRIORITY_CHOICES, blank=True)
    status = models.BooleanField(default=False)  # Complete or Incomplete
    list = models.ForeignKey(TodoList, on_delete=models.CASCADE, related_name='tasks')
    assigned_users = models.ManyToManyField(CustomUser, related_name='assigned_tasks')

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        # Check if the status of the task is being updated
        if self.pk:
            original_task = Task.objects.get(pk=self.pk)
            if original_task.status != self.status and self.status:
                # If the status is updated to completed, update all subtasks status to completed
                self.subtasks.all().update(status=True)

        # Call the original save method to save the task
        super().save(*args, **kwargs)

class Subtask(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    status = models.BooleanField(default=False)  # Complete or Incomplete
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='subtasks')
    assigned_users = models.ManyToManyField(CustomUser, related_name='assigned_subtasks')


class Invitation(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
    ]
    sender = models.ForeignKey(CustomUser, related_name='sent_invitations', on_delete=models.CASCADE)
    receiver = models.ForeignKey(CustomUser, related_name='received_invitations', on_delete=models.CASCADE)
    list = models.ForeignKey(TodoList, on_delete=models.CASCADE, related_name='invitations')
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)


@receiver(post_save, sender=Invitation)
def create_invitation_notification(sender, instance, created, **kwargs):
    if created:
        Notification.objects.create(
            user=instance.receiver,
            message=f"You have received an invitation from {instance.sender} to collaborate on the list '{instance.list.title}'.",
        )

class Notification(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField()
    invitation = models.ForeignKey(Invitation, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

@receiver(post_delete, sender=Invitation)
def delete_related_notifications(sender, instance, **kwargs):
    Notification.objects.filter(invitation=instance).delete()

@receiver(post_delete, sender=TodoList)
def delete_related_notifications(sender, instance, **kwargs):
    Notification.objects.filter(invitation__list=instance).delete()
