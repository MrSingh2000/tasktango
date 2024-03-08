from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model
from .models import TodoList, Task, Subtask, Invitation, Notification

CustomUser = get_user_model()

class CustomUserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email','user_img')}),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'email','user_img', 'first_name', 'last_name'),
        }),
    )
    list_display = ('username', 'email','user_img', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'email','user_img', 'first_name', 'last_name')
    ordering = ('username',)

# Re-register CustomUserAdmin
admin.site.register(CustomUser, CustomUserAdmin)

admin.site.register(TodoList)
admin.site.register(Task)
admin.site.register(Subtask)
admin.site.register(Invitation)
admin.site.register(Notification)
