from django.urls import path
from .views import RegisterAPIView, LoginAPIView,LogoutAPIView, UserListAPIView, UserDetailAPIView
from .views import TodoListAPIView, TodoListDetailAPIView
from .views import TaskAPIView, TaskDetailAPIView
from .views import SubtaskAPIView, SubtaskDetailAPIView
from .views import InvitationAPIView, InvitationDetailAPIView
from .views import NotificationAPIView, NotificationDetailAPIView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    # Register and login URLs
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),

    # User URLs
    path('users/', UserListAPIView.as_view(), name='user_list'),
    path('users/<int:pk>/', UserDetailAPIView.as_view(), name='user_detail'),

    # TodoList URLs
    path('lists/', TodoListAPIView.as_view(), name='todo_list_list'),
    path('lists/<int:pk>/', TodoListDetailAPIView.as_view(), name='todo_list_detail'),

    # Task URLs
    path('tasks/', TaskAPIView.as_view(), name='task_list_create'),
    path('tasks/<int:pk>/', TaskDetailAPIView.as_view(), name='task_detail'),

    # Subtask URLs
    path('subtasks/', SubtaskAPIView.as_view(), name='subtask_list_create'),
    path('subtasks/<int:pk>/', SubtaskDetailAPIView.as_view(), name='subtask_detail'),

    # Invitation URLs
    path('invitations/', InvitationAPIView.as_view(), name='invitation_list_create'),
    path('invitations/<int:pk>/', InvitationDetailAPIView.as_view(), name='invitation_detail'),

    # Notification URLs
    path('notifications/', NotificationAPIView.as_view(), name='notification_list_create'),
    path('notifications/<int:pk>/', NotificationDetailAPIView.as_view(), name='notification_detail'),
]
