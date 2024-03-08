from rest_framework import serializers
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from .models import CustomUser,Task, Subtask,TodoList,Invitation, Notification
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Task, Subtask, TodoList, Invitation, Notification
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

CustomUser = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('username', 'password', 'email', 'first_name', 'last_name','user_img')

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            user_img=validated_data.get('user_img', ''),
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        return user
    

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255, min_length=3)
    password = serializers.CharField(min_length=6,write_only=True)
    tokens = serializers.SerializerMethodField()
    class Meta:
        model = CustomUser
        fields = ['password', 'username', 'tokens']
    
    def get_tokens(self, obj):
        user = CustomUser.objects.get(username=obj['username'])
        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }
    def validate(self, attrs):
        username = attrs.get('username','')
        password = attrs.get('password','')
        user = auth.authenticate(username=username,password=password)
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        return {
            'username': user.username,
            'tokens': user.tokens
        }

class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs
    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad_token')    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username','first_name','last_name','user_img']
    
class TodoListSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())
    collaborators = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all(), many=True)

    class Meta:
        model = TodoList
        fields = ['id', 'title', 'description', 'owner', 'collaborators', 'creation_date']

class TaskSerializer(serializers.ModelSerializer):
    assigned_users = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all(), many=True)

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'deadline', 'priority', 'status', 'list', 'assigned_users']


class SubtaskSerializer(serializers.ModelSerializer):
    task = serializers.PrimaryKeyRelatedField(queryset=Task.objects.all())
    assigned_users = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all(), many=True)

    class Meta:
        model = Subtask
        fields = ['id', 'title', 'description', 'status', 'task', 'assigned_users']


class InvitationSerializer(serializers.ModelSerializer):
    sender = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())
    receiver = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Invitation
        fields = ['id', 'sender', 'receiver', 'list', 'status', 'created_at']

class NotificationSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'created_at', 'read']
