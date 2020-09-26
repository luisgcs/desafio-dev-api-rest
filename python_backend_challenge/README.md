# Desafio Backend Dock

## Instalação

Para iniciar o projeto primeiro faça o clone e entre na pasta

```bash
git clone https://github.com/luisgcs/desafio-dev-api-rest
cd desafio-dev-api-rest/python-backend-challenge
```

Após isso é necessário instalar os pacotes do Django e outras dependências, para isso é necessário ter o Python instalado

```bash
pip install Django mysqlclient djangorestframework django-seed
```

## Configurando banco de dados

Finalizado isto, é preciso que você configure as variáveis de ambiente que estão no arquivo "python_backend_challenge/settings.py"

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'python_backend_challenge',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

Configurado o arquivo agora é hora de criar o banco

MySQL e PostgreSQL:
```sql
create database python_backend_challenge character set utf8;
```

Criado o banco, iremos criar as tabelas com suas respectivas relações

```bash
python manage.py migrate
```

Agora iremos popular as tabelas com "dummy data"

```bash
python manage.py seed account_management_api --number=5
```

## Inicialização

Feito todos passos anteriores, agora é apenas inicializar o servidor

```bash
python manage.py runserver
```

## TODO

- :heavy_check_mark: Implementar path que realiza a criação de uma conta
- :heavy_check_mark: Implementar path que realiza operação de depósito emuma conta
- :heavy_check_mark: Implementar path que realiza operação de consulta de saldo em determinada conta
- :heavy_check_mark: Implementar path que realiza operação de saque em uma conta
- :heavy_check_mark: Implementar path que realiza o bloqueio de uma conta
- :heavy_check_mark: Implementar path que recupera o extrato de transações de uma conta

## Rotas

<b>Pessoa</b>
```
GET person/
POST person/
PUT person/<int:id>
DELETE person/<int:id>
```
<b>Conta</b>
```
GET account/
POST account/
PUT account/<int:id>
DELETE account/<int:id>
```
<b>Transação</b>
```
GET transaction/
POST transaction/
PUT transaction/<int:id>
DELETE transaction/<int:id>
```

<b>Outros</b>
```
GET balance/
POST deposit/
POST withdraw/
GET suspend/<int:id>
GET rangeTransactions/<int:id>/<int:dataInicial>
GET rangeTransactions/<int:id>/<int:dataInicial>/<int:dataFinal>
```