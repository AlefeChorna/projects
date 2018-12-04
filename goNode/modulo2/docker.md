Preparar ambiente de banco de dados com o Docker.

Para baixar a imagem do bando de dados postgres pelo docker
basta digitar o seguinte comando no terminal:

- docker run --name database -p 5432:5432 -d -t kartoza/postgis

- Para iniciar a plicação caso ela não esteje rodando digite o seguinte comando:
- docker start nome_container. Ex: docker start database.

Obs: O usuário e senha padrão desta imagem do postgres é "docker". Para
poder acessar esta imagem basta baixar o pgadmin e configurar a conexão
com o servidor. Se estiver usando o pgadmin 4 que agora é no navegador,
basta, clicar com o botão direito do mouse na tab "PostgreSQL 10" que está
a esquerda do navegador e selecioanr a opção "Properties...". Ao clicar, uma
abrir uma janela. Clique na aba de "Connection". Nesta aba configure ela
conforme esta configurado seu postgres no docker.

Esta imagem do postgres já vem com algumas particularidades a mais, tais,
como geolocalização, geração de UUIDs, etc.

Para ver os servidores dockers rodando basta digitar o comando:

- docker ps
