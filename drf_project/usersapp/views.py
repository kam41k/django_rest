from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet
from .models import User
from .serializers import UserModelSerializer


# Create your views here.
class UserViewSet(mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
