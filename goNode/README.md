Projects Node js.

*********** Configuração Editor Config ***********

Passo 1: Na tab de extenssões instale o plugin do editor config com
o seguinte texto: "EditorConfig for VS Code".
Passo 2: Cria na raiz do projeto um arquivo com o nome ".editorconfig".
Passo 3: coloque no arquivo o código abaixo:

    root = true;

    [*] # o sinal de * indica que as configurações abaixo
    # serão para todos os tipos de arquivo
    indent_style = space
    indent_size = 2
    charset = utf-8
    trim_trailing_whitespace = true # Remove os espaços em branco que estão depois do
    # da linha
    insert_final_newline = true

*************************************************