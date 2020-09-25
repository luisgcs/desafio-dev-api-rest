from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name="root"),
    # path('users/', views.UserList.as_view(), name="users"),
    path('person/', views.personCRUD, name="client"),
    path('person/<int:id>', views.personCRUD),
    
    path('account/', views.accountCRUD, name="client"),
    path('account/<int:id>', views.accountCRUD),
    
    path('transaction/', views.transactionCRUD, name="client"),
    path('transaction/<int:id>', views.transactionCRUD),

    path('balance/<int:id>', views.balance),
    path('deposit/', views.deposit),
    path('withdraw/', views.withdraw),
    path('suspend/<int:id>', views.suspend),
    path('transactions/<int:id>/<str:initial>', views.rangeTransactions),
    path('transactions/<int:id>/<str:initial>/<str:final>', views.rangeTransactions),
]