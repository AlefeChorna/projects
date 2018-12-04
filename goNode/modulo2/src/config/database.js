module.exports = {
  dialect: 'postgres',
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
