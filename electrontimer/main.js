// Controla o ciclo de vida da aplicação
// ipcMain escuta o evento ipcRenderer de outras telas (geralmente solicitando para criar uma nova janela)
const { app, ipcMain, Tray, Menu, globalShortcut } = require('electron');
// Objeto para criar uma nova janela
const { BrowserWindow } = require('electron');
const data = require('./data');
const templateGenerator = require('./template');

let tray = null;
let mainWindow = null;
app.on('ready', () => {
    // Classe que cria a janela, recebe um objeto configurador que defina
    // as caracteristicas da tela, tais como, tamanho largura, etc...
    mainWindow = new BrowserWindow( {
        width: 600,
        height: 400,
    });

    tray = new Tray(__dirname + '/app/img/icon-tray.png');
    let template = templateGenerator.geraTrayTemplate(mainWindow);
    let trayMenu = Menu.buildFromTemplate(template);
    tray.setContextMenu(trayMenu);

    let templateMenu = templateGenerator.geraMenuPrincipalTemplate(app);
    let menuPrincipal = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(menuPrincipal);

    globalShortcut.register('Ctrl+Shift+S', () => {
        mainWindow.send('atalho-iniciar-parar');
    });

    // Atica modo developer
    // mainWindow.openDevTools();
    // Caso seja necessário carregar uma URL na página da web ou um arquivo da aplicação
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});
// Quando clicar no botão de fechar a janela este comando encerra a aplicação no
// sistema operacional (método de boas praticas)
app.on('windown-all-closed', () => {
   app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    if (sobreWindow === null) {
        sobreWindow = new BrowserWindow( {
            width: 300,
            height: 220,
            alwaysOnTop: true,
            frame: false
        });
        sobreWindow.on('closed', () => {
            sobreWindow = null;
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
   sobreWindow.close();
});

ipcMain.on('curso-parado', (event, curso, tempoEstudado) => {
    data.salvaDados(curso, tempoEstudado);
});

ipcMain.on('curso-adicionado', (event, novoCurso) => {
    let novoTemplate = templateGenerator.adicionaCursoNoTray(novoCurso, mainWindow);
    let novoTrayMenu = Menu.buildFromTemplate(novoTemplate);
    tray.setContextMenu(novoTrayMenu);
});









