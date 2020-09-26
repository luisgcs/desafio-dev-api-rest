import json
from json.encoder import JSONEncoder
from django.test import TestCase
from django.template.defaultfilters import slugify
from rest_framework.parsers import JSONParser
import json
from .models import Person, Account, Transactions
from .serializers import (AccountSerializer, PersonSerializer, TransactionsSerializer)

class PersonTestCase(TestCase):
    def test_create_person(self):
        """Posts are given slugs correctly when saving"""
        data = {
            "nome": "Luís Guilherme",
            "cpf": "00000000002",
            "dataNascimento": "2020-09-25"
        }
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            print(serializer)
            serializer.save()
        self.assertEqual(serializer.is_valid(), True)

class AccountTestCase(TestCase):
    def test_create_account(self):
        """Posts are given slugs correctly when saving"""
        data = {
            "nome": "Luís Guilherme",
            "cpf": "00000000002",
            "dataNascimento": "2020-09-25"
        }
        serializerPeson = PersonSerializer(data=data)
        if serializerPeson.is_valid():
            serializerPeson.save()
        data = {
            "idPessoa": 1,
            "saldo": 500.00,
            "limiteSaqueDiario": 100.00,
            "flagAtivo": True,
            "tipoConta": 1,
            "dataCriacao": "2020-09-25"
        }
        serializer = AccountSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        self.assertEqual(serializer.is_valid(), True)

class TransactionTestCase(TestCase):
    def test_create_transaction(self):
        """Posts are given slugs correctly when saving"""
        personData = {
            "nome": "Luís Guilherme",
            "cpf": "00000000002",
            "dataNascimento": "2020-09-25"
        }
        serializerPeson = PersonSerializer(data=personData)
        if serializerPeson.is_valid():
            serializerPeson.save()
        accountData = {
            "idPessoa": 1,
            "saldo": 500.00,
            "limiteSaqueDiario": 100.00,
            "flagAtivo": True,
            "tipoConta": 1,
            "dataCriacao": "2020-09-25"
        }
        serializerAccount = AccountSerializer(data=accountData)
        if serializerAccount.is_valid():
            serializerAccount.save()
        transactionData = {
            "idConta": 1,
            "valor": 100.0,
            "dataTransacao": "2020-09-25",
        }
        transactionSerializer = TransactionsSerializer(data=transactionData)
        if transactionSerializer.is_valid():
            transactionSerializer.save()
        self.assertEqual(transactionSerializer.is_valid(), True)