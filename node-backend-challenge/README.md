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


## Inicialização

Feito todos passos anteriores, agora é apenas inicializar o servidor

```bash
adonis serve
```