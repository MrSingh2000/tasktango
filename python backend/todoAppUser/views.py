from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.contrib.auth import authenticate, login  # Add import statement
from .models import TodoList, Task, Subtask, Invitation, Notification
from rest_framework import generics, status,permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwnerOrCollaborator
from rest_framework.response import Response
from .serializers import RegisterSerializer, LoginSerializer,LogoutSerializer, UserSerializer, TodoListSerializer, TaskSerializer, SubtaskSerializer, InvitationSerializer, NotificationSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

CustomUser = get_user_model()  # Use the custom user model

class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView (generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [permissions.AllowAny]
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    # class LoginAPIView (generics.GenericAPIView):
    # serializer_class=LoginSerializer
    # def post (self, request):
    #     try:
    #         data = request.data
    #         serializer = LoginSerializer (data = data)
    #         if serializer.is_valid ():
    #             username = serializer.data['username']
    #             password = serializer.data['password']
    #             user=authenticate(username=username, password=password)
    #             if user is None:
    #                 return Response({
    #                 'status': 400,
    #                 'message': 'Invalid credentials',
    #                 'data': {}
    #             })

    #             refresh = RefreshToken.for_user(user)

    #             return ({
    #                  'refresh': str(refresh),
    #                  'access': str(refresh.access_token),
    #              })
            
    #         return Response({
    #                 'status': 400,
    #                 'message': 'something went wrong',
    #                 'data': serializer.errors               
    #                 })

    #     except Exception as e:
    #         print(e)
        
    
class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
class UserListAPIView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated] 
    queryset = CustomUser.objects.all()  
    serializer_class = UserSerializer

class UserDetailAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = CustomUser.objects.all()  
    serializer_class = UserSerializer

from rest_framework import mixins

class TodoListAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = TodoList.objects.all()
    serializer_class = TodoListSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class TodoListDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = TodoList.objects.all()
    serializer_class = TodoListSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class TaskListAPIView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        list_id = self.kwargs['list_id']
        return Task.objects.filter(list_id=list_id)

class TaskAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['registered_users'] = CustomUser.objects.all()
        return context

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class TaskDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class SubtaskAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Subtask.objects.all()
    serializer_class = SubtaskSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['tasks'] = Task.objects.all()
        context['registered_users'] = CustomUser.objects.all()
        return context

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class SubtaskDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Subtask.objects.all()
    serializer_class = SubtaskSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['tasks'] = Task.objects.all()
        context['registered_users'] = CustomUser.objects.all()
        return context

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class InvitationAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Invitation.objects.all()
    serializer_class = InvitationSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class InvitationDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Invitation.objects.all()
    serializer_class = InvitationSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class NotificationAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class NotificationDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)