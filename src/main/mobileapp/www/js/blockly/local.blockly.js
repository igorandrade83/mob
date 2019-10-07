window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Local = window.blockly.js.blockly.Local || {};

/**
 * local
 */
window.blockly.js.blockly.Local.locais = function() {
 var qs;
  qs = this.cronapi.screen.getParam('id');
  if (qs == '1') {
    this.cronapi.screen.changeContent("titulo", 'Pelourinho', 'false');
    this.cronapi.screen.changeAttrValue("icon1", 'class', 'fa fa-camera-retro component-holder');
    this.cronapi.screen.changeAttrValue("icon1", 'class', 'fa fa-music component-holder');
    this.cronapi.screen.changeContent("resumo", 'O Pelourinho, popularmente chamado de Pelô, é o nome de um bairro da cidade de Salvador, no Brasil. Localiza-se no Centro Histórico da cidade, na área que abrange apenas as ruas que vão do Terreiro de' +
     ' Jesus até o Largo do Pelourinho, o qual possui um conjunto arquitetônico colonial barroco brasileiro preservado e integrante do Patrimônio Histórico da Organização das Nações Unidas para a Educação, ' +
     'a Ciência e a Cultura.\n', 'false');
    this.cronapi.screen.changeAttrValue("foto1", 'src', 'img/pelo2.jpg');
    this.cronapi.screen.changeAttrValue("foto2", 'src', 'img/pelo1.jpg');
  } else {
    this.cronapi.screen.changeContent("titulo", 'Ponta de Humaitá', 'false');
    this.cronapi.screen.changeAttrValue("icon1", 'class', 'fa fa-sun-o component-holder');
    this.cronapi.screen.changeAttrValue("icon2", 'class', 'ion ion-android-boat component-holder');
    this.cronapi.screen.changeContent("resumo", 'Ponta de Humaitá é muito visitada na cidade de Salvador e localiza-se na Cidade Baixa, é conhecido também como Ponta de Monte Serrat, o seu nome turístico é Ponta de Humaitá e reúne diversas atrações,' +
     ' ficando no Extremo Sul da Península de Itapagipe. Conhecer mais sobre a história de Salvador e ter uma vista da Baía de Todos os Santos. Além disso, a Ponta de Humaitá possui o Clube Nautico da Bahia' +
     ', o Farol de Humaitá e a Igreja e o Mosteiro de Nossa Senhora de Monte Serrat.\n', 'false');
    this.cronapi.screen.changeAttrValue("foto1", 'src', 'img/pontHumaita.jpg');
    this.cronapi.screen.changeAttrValue("foto2", 'src', 'img/pontHumaita2.jpg');
  }
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Local.mudaPelo = function() {
 var qs;
  this.cronapi.screen.changeView("#/app/public/local",[ { id : 1 } ]);
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Local.mudaHuma = function() {
 var qs;
  this.cronapi.screen.changeView("#/app/public/local",[ { id : 0 } ]);
}
