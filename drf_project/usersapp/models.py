from django.db import models
from uuid import uuid4

# Create your models here.
class User(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    user_name = models.CharField(max_length=64, unique=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(max_length=64, unique=True)
