from django.db import models
from usersapp.models import User


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=32)
    link = models.CharField(max_length=128, blank=True)
    users = models.ManyToManyField(User)
    def __str__(self):
        return self.name


class ToDo(models.Model):
    text = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    creation_date = models.DateField(auto_now_add=True)
    changed_date = models.DateField(auto_now=True)
