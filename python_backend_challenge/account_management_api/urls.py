from django.urls import path
from . import views

# Client, Address, CompanyMetaData, Company, User, Expense, Provider, ProviderContact, Sale, Product, SaleProduct
urlpatterns = [
    path('', views.index, name="root"),
    # path('users/', views.UserList.as_view(), name="users"),
    path('person/', views.personCRUD, name="client"),
    path('person/<int:id>', views.personCRUD),
    
    path('account/', views.clientCRUD, name="client"),
    path('account/<int:id>', views.clientCRUD),
    
    path('transaction/', views.clientCRUD, name="client"),
    path('transaction/<int:id>', views.clientCRUD),

    path('balance/<int:id>'),
    path('transactions/<int:id>'),
    path('suspend/<int:id>'),
    path('deposit/'),
    path('withdraw/')
]