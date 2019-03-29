const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
  salvaDados(curso, tempoEstudado) {
    let arquivoCurso = __dirname + '/data/' + curso + '.json';
      if (fs.existsSync(arquivoCurso)) {
          // Salvar os dados
          this.adicionaTempoCurso(arquivoCurso, tempoEstudado);
      } else {
          // Criar e Salvar os dados
          this.criaArquivoCurso(arquivoCurso, {})
              .then(() => {
                  this.adicionaTempoCurso(arquivoCurso, tempoEstudado);
              });
      }
  },
  adicionaTempoCurso(arquivoCurso, tempoEstudado) {
      let dados = {
        ultimoEstudo: new Date().toString(),
        tempo: tempoEstudado
      };
      jsonfile.writeFile(arquivoCurso, dados, {spaces: 2})
          .then( () => {

          }).catch((err) => {

          });
  },
  criaArquivoCurso(nomeArquivo, conteudoArquivo) {
      jsonfile.writeFile(nomeArquivo, conteudoArquivo)
          .then( () => {

          }).catch((err) => {

          });
  }, pegaDados(nomeCurso) {
        let arquivoCurso =  __dirname + '/data/' + nomeCurso + '.json';
        return jsonfile.readFile(arquivoCurso);
  }, pegaNomeCursos () {
      let arquivos = fs.readdirSync(__dirname + '/data');
      let cursos = arquivos.map((arquivo) => {
        return arquivo.substr(0, arquivo.lastIndexOf('.'));
      });
      return cursos;
  }
};