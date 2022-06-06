
from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import User


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('uid', 'username', 'first_name', 'last_name', 'email')
