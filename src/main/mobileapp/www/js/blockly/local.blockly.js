window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Local = window.blockly.js.blockly.Local || {};

/**
 * local
 */
window.blockly.js.blockly.Local.locais = function() {
 var qs;
  qs = this.cronapi.screen.getParam('qs');
  console.log(this.cronapi.screen.getParam('qs'));
  if (qs == '2') {
    this.cronapi.screen.changeContent("titulo", 'Pelourinho', 'false');
    this.cronapi.screen.changeAttrValue("a_loc", 'href', '#/app/public/localizacao?qs=2');
    this.cronapi.screen.changeAttrValue("a_trans", 'href', '#/app/public/localizacao?qs=2');
    this.cronapi.screen.changeContent("resumo", 'O Pelourinho, popularmente chamado de Pelô, é o nome de um bairro da cidade de Salvador, no Brasil. Localiza-se no Centro Histórico da cidade, na área que abrange apenas as ruas que vão do Terreiro de' +
     ' Jesus até o Largo do Pelourinho, o qual possui um conjunto arquitetônico colonial barroco brasileiro preservado e integrante do Patrimônio Histórico da Organização das Nações Unidas para a Educação, ' +
     'a Ciência e a Cultura.\n', 'false');
    this.cronapi.screen.changeAttrValue("imgCentral", 'src', 'img/pelo1.jpg');
  } else if (qs == '1') {
    this.cronapi.screen.changeContent("titulo", 'Elevador Lacerda', 'false');
    this.cronapi.screen.changeAttrValue("a_loc", 'href', '#/app/public/localizacao?qs=1');
    this.cronapi.screen.changeAttrValue("a_trans", 'href', '#/app/public/localizacao?qs=1');
    this.cronapi.screen.changeContent("resumo", 'O elevador berere.....', 'false');
    this.cronapi.screen.changeAttrValue("imgCentral", 'src', 'img/pelo2.jpg');
  } else if (qs == '3') {
    this.cronapi.screen.changeContent("titulo", 'Farol da Barra', 'false');
    this.cronapi.screen.changeAttrValue("a_loc", 'href', '#/app/public/localizacao?qs=3');
    this.cronapi.screen.changeAttrValue("a_trans", 'href', '#/app/public/localizacao?qs=3');
    this.cronapi.screen.changeContent("resumo", 'O farol da Bara.... ', 'false');
    this.cronapi.screen.changeAttrValue("imgCentral", 'src', 'img/pontHumaita2.jpg');
  }
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Local.alternaCubo = function() {
 var qs;
  console.log(!this.cronapi.util.executeJavascriptReturn('document.getElementById(\"crn-image-276040\").getAttribute(\"ng-show\")'));
  if (this.cronapi.util.executeJavascriptReturn('document.getElementById(\"crn-image-276040\").getAttribute(\"ng-show\")')) {
    this.cronapi.screen.changeAttrValue("crn-image-276040", 'ng-show', 'false');
    this.cronapi.screen.changeAttrValue("crn-image-334073", 'ng-show', 'true');
  } else {
    this.cronapi.screen.changeAttrValue("crn-image-276040", 'ng-show', 'true');
    this.cronapi.screen.changeAttrValue("crn-image-334073", 'ng-show', 'false');
  }
  this.cronapi.util.executeJavascriptNoReturn('location.reload(false)');
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
