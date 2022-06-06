from django_filters import rest_framework
from .models import Project, ToDo


class ProjectFilter(rest_framework.FilterSet):
    name = rest_framework.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class ToDoFilter(rest_framework.FilterSet):
    creation_date = rest_framework.DateFromToRangeFilter()

    class Meta:
        model = ToDo
        fields = ['creation_date', 'project']
