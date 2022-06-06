from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Project, ToDo
from .serializers import ProjectModelSerializer, ToDoModelSerializer
from .filters import ProjectFilter


# Create your views here.
class ProjectOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter
    pagination_class = ProjectOffsetPagination


class ToDoOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    pagination_class = ToDoOffsetPagination

    def destroy(self, request, pk=None):
        to_do = get_object_or_404(ToDo, pk=pk)
        serializer = ToDoModelSerializer(to_do)
        to_do.is_active = False
        to_do.save()
        return Response(serializer.data)
