from django.db import models

# Create your models here.
class Person(models.Model):
    nome = models.CharField(max_length=255, null=False)
    cpf = models.CharField(max_length=11, null=False)
    dataNascimento = models.DateField(null=False)
    
    class Meta:
        db_table: "person"

class Account(models.Model):
    idPessoa = models.ForeignKey(Person, on_delete=models.CASCADE)
    saldo = models.FloatField(null=False)
    limiteSaqueDiario = models.FloatField(null=False)
    flagAtivo = models.BooleanField(default=True, null=False)
    tipoConta = models.IntegerField(null=False)
    dataCriacao = models.DateField(null=False)

    class Meta:
        db_table: "account"

class Transactions(models.Model):
    idConta = models.ForeignKey(Account, on_delete=models.CASCADE)
    valor = models.FloatField(null=False)
    dataTransacao = models.DateField(null=False)

    class Meta:
        db_table: "transaction"