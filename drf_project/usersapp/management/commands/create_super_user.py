from usersapp.models import User
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument(nargs='+',dest = 'args')

    def handle(self, *args, **options):
        user = User(
            username = args[0],
        )
        user.set_password(args[1])
        user.is_superuser = True
        user.is_staff = True
        user.save()
