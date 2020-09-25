from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect, get_object_or_404
from .models import Person, Account, Transactions
from .serializers import PersonSerializer, AccountSerializer, TransactionsSerializer
# Create your views here.
def index(request):
    return HttpResponse("Hello World!")

#This method encompasses the 4 main CRUD operations for the person table.
@csrf_exempt
def personCRUD(request):
    if request.method == 'GET':
        if(request.GET.get('id', None) is not None):
            try:
                client = Person.objects.get(id=request.GET.get('id', None))
                serializer = PersonSerializer(client, many=False)
                return JsonResponse(serializer.data, safe=False)
            except Person.DoesNotExist:
                raise Http404("Não existe nenhum usuário com este ID")
        else:
            clients = Person.objects.all()
            serializer = PersonSerializer(clients, many=True)
            return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PUT':
        if(request.GET.get('id', None) is not None):
            try:
                client = Person.objects.get(id=request.GET.get('id', None))
                data = JSONParser().parse(request)
                serializer = PersonSerializer(client, data=data)
                if(serializer.is_valid()):
                    serializer.save()
                    return JsonResponse(serializer.data)
                return JsonResponse(serializer.errors, status=400)
            except Person.DoesNotExist:
                raise Http404("Não existe nenhum usuário com este ID")
        return HttpResponse(status=422)
    elif request.method == 'DELETE':
        if(request.GET.get('id', None) is not None):
            try:
                Person.objects.get(id=request.GET.get('id', None)).delete()
                return HttpResponse(status=204)
            except Person.DoesNotExist:
                raise Http404("Não existe nenhum usuário com este ID")
        return HttpResponse(status=422)
    else:
        return HttpResponse(status=405)

#This method encompasses the 4 main CRUD operations for the account table.
@csrf_exempt
def accountCRUD(request):
    if request.method == 'GET':
        if(request.GET.get('id', None) is not None):
            try:
                account = Account.objects.get(id=request.GET.get('id', None))
                serializer = AccountSerializer(account, many=False)
                return JsonResponse(serializer.data, safe=False)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        else:
            accounts = Account.objects.all()
            serializer = AccountSerializer(accounts, many=True)
            return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AccountSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PUT':
        if(request.GET.get('id', None) is not None):
            try:
                account = Account.objects.get(id=request.GET.get('id', None))
                data = JSONParser().parse(request)
                serializer = AccountSerializer(account, data=data)
                if(serializer.is_valid()):
                    serializer.save()
                    return JsonResponse(serializer.data)
                return JsonResponse(serializer.errors, status=400)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        return HttpResponse(status=422)
    elif request.method == 'DELETE':
        if(request.GET.get('id', None) is not None):
            try:
                Account.objects.get(id=request.GET.get('id', None)).delete()
                return HttpResponse(status=204)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        return HttpResponse(status=422)
    else:
        return HttpResponse(status=405)

#This method encompasses the 4 main CRUD operations for the transaction table.
@csrf_exempt
def transactionCRUD(request):
    if request.method == 'GET':
        if(request.GET.get('id', None) is not None):
            try:
                transaction = Account.objects.get(id=request.GET.get('id', None))
                serializer = TransactionsSerializer(transaction, many=False)
                return JsonResponse(serializer.data, safe=False)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        else:
            transactions = Account.objects.all()
            serializer = TransactionsSerializer(transactions, many=True)
            return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TransactionsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PUT':
        if(request.GET.get('id', None) is not None):
            try:
                transaction = Account.objects.get(id=request.GET.get('id', None))
                data = JSONParser().parse(request)
                serializer = TransactionsSerializer(transaction, data=data)
                if(serializer.is_valid()):
                    serializer.save()
                    return JsonResponse(serializer.data)
                return JsonResponse(serializer.errors, status=400)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        return HttpResponse(status=422)
    elif request.method == 'DELETE':
        if(request.GET.get('id', None) is not None):
            try:
                Account.objects.get(id=request.GET.get('id', None)).delete()
                return HttpResponse(status=204)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        return HttpResponse(status=422)
    else:
        return HttpResponse(status=405)


@csrf_exempt
def balance(request, id):
    if request.method == 'GET':
        if(id is not None):
            try:
                account = Account.objects.get(id=id)
                return JsonResponse({"saldo": account.saldo}, safe=False)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        return HttpResponse(status=422)
    else:
        return HttpResponse(status=405)

@csrf_exempt
def deposit(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializerTransaction = TransactionsSerializer(data=data)
        account = Account.objects.get(id=data['idConta'])
        Account.objects.filter(pk=account.id).update(saldo=account.saldo + data['valor'])
        if serializerTransaction.is_valid():
            serializerTransaction.save()
            return JsonResponse(serializerTransaction.data, status=201)
        return JsonResponse(serializerTransaction.errors, status=400)
        # return HttpResponse(status=422)
    else:
        return HttpResponse(status=405)

@csrf_exempt
def withdraw(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializerTransaction = TransactionsSerializer(data=data)
        account = Account.objects.get(id=data['idConta'])
        Account.objects.filter(pk=account.id).update(saldo=account.saldo - data['valor'])
        if serializerTransaction.is_valid():
            serializerTransaction.save()
            return JsonResponse(serializerTransaction.data, status=201)
        return JsonResponse(serializerTransaction.errors, status=400)
        # return HttpResponse(status=422)
    else:
        return HttpResponse(status=405)

@csrf_exempt
def suspend(request, id):
    if request.method == 'GET':
        if(id is not None):
            try:
                Account.objects.filter(pk=id).update(flagAtivo=False)
                account = Account.objects.get(id=id)
                serializer = AccountSerializer(account, many=False)
                return JsonResponse(serializer.data, safe=False)
            except Account.DoesNotExist:
                raise Http404("Não existe nenhuma conta com este ID")
        return HttpResponse(status=422)
    else:
        return HttpResponse(status=405)