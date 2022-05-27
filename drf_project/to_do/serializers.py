from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField
from .models import Project, ToDo


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = StringRelatedField(many=True)
    
    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    user = StringRelatedField()
    project = StringRelatedField()

    class Meta:
        model = ToDo
        fields = '__all__'
