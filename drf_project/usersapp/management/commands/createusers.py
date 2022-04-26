from usersapp.models import User
from django.core.management.base import BaseCommand


class Command(BaseCommand):

    def handle(self, *args, **options):
        users = [{'username': 'admin', 'password': '123', 'superuser': True},
                 {'username': 'VVasiliy', 'password': 'Tgwryb#u', 'first_name': 'Василий', 'last_name': 'Васечкин', 'email': 'VVas@yandex.ru', 'superuser': False},
                 {'username': 'PPetrov', 'password': 'S2ggOD7N', 'first_name': 'Петр', 'last_name': 'Петров', 'email': 'PPetr@yandex.ru', 'superuser': False},
                 {'username': 'IIvan', 'password': '9t%IUB83', 'first_name': 'Иван', 'last_name': 'Иванов', 'email': 'IvanI@yandex.ru', 'superuser': False},
                 {'username': 'KKostenko', 'password': '22xz#DV6', 'first_name': 'Константин', 'last_name': 'Костенко', 'email': 'KKostenko@yandex.ru', 'superuser': False}]
        for user in users:
            create_user = User(
                username=user['username'],
            )
            create_user.set_password(user['password'])
            if user['superuser']:
                create_user.is_superuser = True
                create_user.is_staff = True
            else:
                create_user.email = user['email']
                create_user.first_name = user['first_name']
                create_user.last_name = user['last_name']
            create_user.save()
