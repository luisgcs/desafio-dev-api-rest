# Desafio Backend Dock

## Instalação

Para iniciar o projeto primeiro faça o clone e entre na pasta

```bash
git clone https://github.com/luisgcs/desafio-dev-api-rest
cd desafio-dev-api-rest/node-backend-challenge
```

Após isso é necessário instalar os arquivos do AdonisJS, para isso é necessário ter NPM ou Yarn instalados

```bash
npm install
```

ou 

```bash
yarn install
```

## Configurando banco de dados

Finalizado isto, é preciso que você configure as variáveis de ambiente que estão no arquivo ".env"

```.env
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis
```

Também é necessário que configure o arquivo <b>config/database.js</b> preenchendo com as informações do banco

Configurado os arquivos agora é hora de criar o banco

MySQL e PostgreSQL:
```sql
create database nome_do_banco character set utf8;
```

Criado o banco, iremos criar as tabelas com suas respectivas relações

```bash
adonis migration:run
```

Agora iremos popular as tabelas com "dummy data"

```bash
adonis seed
```


## Inicialização

Feito todos passos anteriores, agora é apenas inicializar o servidor

```bash
adonis serve
```


## TODO

- :heavy_check_mark: Implementar path que realiza a criação de uma conta
- :heavy_check_mark: Implementar path que realiza operação de depósito emuma conta
- :heavy_check_mark: Implementar path que realiza operação de consulta de saldo em determinada conta
- :heavy_check_mark: Implementar path que realiza operação de saque em uma conta
- :heavy_check_mark: Implementar path que realiza o bloqueio de uma conta
- :heavy_check_mark: Implementar path que recupera o extrato de transações de uma conta