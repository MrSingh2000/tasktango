from rest_framework import permissions

class IsOwnerOrCollaborator(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Check if the user is the owner
        if obj.owner == request.user:
            return True
        # Check if the user is a collaborator
        return obj.collaborators.filter(id=request.user.id).exists()