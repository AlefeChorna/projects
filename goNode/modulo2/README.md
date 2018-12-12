Configurando o ORM Sequelize

- Passo 1: Instalar o sequelize com os seguintes comadandos:

* yarn add sequelize
* yarn add sequelize-cli -D // O sequelize-cli disponibiliza uma interface de
  comandos no teminal para facilitar a criação de models, tabelas, etc... .

- Passo 2: Criar os arquivos de configuração do sequelize com o seguinte comando:

* npx sequelize init

Obs: Cada projeto segue um padrão de pastas, assim, se mover as mesmas de lugar
deve configurar o arquivo de config da pasta "config" criado pelo sequelize
informando a nova rota desta pasta.

Caso tenha mudado (creio que tenha, pois, não deixara pastas distintas no escopo
do projeto) siga o passo 3.

- Passo 3: Criar no escopo do projeto o arquivo ".sequelizerc".

- Passo 4: Configurar este arquivo informando a nova rota das pastas "config",
  "migrations", "models" e seeders. Abaixo segue um exemplo de código. Lembrando
  que as rotas do path.resolve varia de acordo com o seu projeto, ou seja, deve
  informar o camonho atual de cada pasta. A pasta config vem por padrão com o
  arquivo config.json, então, vamos renomea-lo para "database.js", pois, vamos
  configurar nosso banco de dados nele usando a linguagem javascript.

const path = require('path')

module.exports = {
config: path.resolve('src', 'config', 'database.js'),
'models-path': path.resolve('src', 'app', 'models'),
'seeders-path': path.resolve('src', 'database', 'seeders'),
'migrations-path': path.resolve('src', 'database', 'migrations')
}

Para configurar as conexões de banco de dados usamos o arquivo "database.js"
que esta na pasta "config".

Logo após configurar devemos ir no arquivo "index.js" da pasta "models" e
alterar o model de load dos arquivos que esta como "config.json" para
"database.js". Lembrando, se alterou a rota, deve atualizar todo o caminho
também. Alterações:

- Remover a linha que cria a variável "env" (remova ela se vc não estiver usando
  as configurações padrões da pasta "config" que vem com o "config.json", que,
  no caso foi renomeado para database.js).
- Altera a rota do require da variavel "config", pois, a mesma esta referenciando
  o arquivo "config.json" e, lembrando novamente, renomeamos o mesmo para
  "database.js". No momento ela está assim:

  const config = require(\_\_dirname + '/../config/config.json')[env]

  porém, com a nomenclatura de pastas deste projeto ficara assim:

  const config = require('../../config/database')

- Logo abaixo terá uma variavel chamada "sequelize", delete a criação dela e o
  seu if, else abaixo (lugar que a variável é alimentada). Após deletar este
  trecho de fonte cole o seguinte código abaixo:

* const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
  )

Passo 5: Configura o arquivo 'database.js' da pasta 'config' com o
seguinte código:

module.exports = {
dialect: 'postgres', // Database que será utilizado
host: '127.0.0.1',
username: 'docker',
password: 'docker',
database: 'gonodemodulo2',
operatorAliases: false,
define: {
// Cria duas colunas padrões em uma tabela (createat, updateat)
timestamps: true,
// Altera a nomenclatura dos campos de camel case para snake case
underscored: true,
// Aplica a mesma configuração do underscored, porém, para o nome
// das tabelas
underscoredAll: true
}
}

Passo 5: Instalar o database. No exemplo acima vai ser usado o postgres,
desta forma, basta instala-lo com o seguinte comando:

- yarn add pg | npm install pg
