from django.contrib import admin
from .models import Person, Account, Transactions

admin.autodiscover()
admin.site.register(Person)
admin.site.register(Account)
admin.site.register(Transactions)