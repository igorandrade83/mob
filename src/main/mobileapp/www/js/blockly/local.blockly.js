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
    this.cronapi.screen.changeAttrValue("a_fav", 'href', '#/app/public/favoritar?qs=2');
    this.cronapi.screen.changeAttrValue("a_res", 'href', '#/app/public/restaurantes?qs=2');
    this.cronapi.screen.changeContent("resumo", 'O Pelourinho, popularmente chamado de Pelô, é o nome de um bairro da cidade de Salvador, no Brasil. Localiza-se no Centro Histórico da cidade, na área que abrange apenas as ruas que vão do Terreiro de' +
     ' Jesus até o Largo do Pelourinho,[1] o qual possui um conjunto arquitetônico colonial barroco brasileiro preservado e integrante do Patrimônio Histórico da Organização das Nações Unidas para a Educaçã' +
     'o, a Ciência e a Cultura.', 'false');
    this.cronapi.screen.changeAttrValue("imgCentral", 'src', 'img/pelo1.jpg');
  } else if (qs == '1') {
    this.cronapi.screen.changeContent("titulo", 'Elevador Lacerda', 'false');
    this.cronapi.screen.changeAttrValue("a_loc", 'href', '#/app/public/localizacao?qs=1');
    this.cronapi.screen.changeAttrValue("a_trans", 'href', '#/app/public/localizacao?qs=1');
    this.cronapi.screen.changeAttrValue("a_fav", 'href', '#/app/public/favoritar?qs=1');
    this.cronapi.screen.changeAttrValue("a_res", 'href', '#/app/public/restaurantes?qs=1');
    this.cronapi.screen.changeContent("resumo", 'O Elevador Lacerda é o primeiro elevador urbano do mundo. Em 8 de dezembro de 1873, quando foi inaugurado, era o mais alto do mundo, com 63 metros.[1] Localizado na cidade de Salvador, Bahia, cumpre a' +
     ' função de transporte público entre a Praça Cairu, na Cidade Baixa, e a Praça Tomé de Sousa, na Cidade Alta. É um dos principais pontos turísticos e cartão postal da cidade. Do alto de suas torres, de' +
     'scortina-se a vista para a Baía de Todos-os-Santos, o Mercado Modelo e, ao fundo, o Forte de São Marcelo.', 'false');
    this.cronapi.screen.changeAttrValue("imgCentral", 'src', 'img/elevadorlacerda.jpg');
  } else if (qs == '3') {
    this.cronapi.screen.changeContent("titulo", 'Farol da Barra', 'false');
    this.cronapi.screen.changeAttrValue("a_loc", 'href', '#/app/public/localizacao?qs=3');
    this.cronapi.screen.changeAttrValue("a_trans", 'href', '#/app/public/localizacao?qs=3');
    this.cronapi.screen.changeAttrValue("a_fav", 'href', '#/app/public/favoritar?qs=3');
    this.cronapi.screen.changeAttrValue("a_res", 'href', '#/app/public/restaurantes?qs=3');
    this.cronapi.screen.changeContent("resumo", 'O Farol da Barra, ou Farol de Santo Antônio, localiza-se na antiga ponta do Padrão, atual Ponta de Santo Antônio, em Salvador, no litoral do estado da Bahia, no Brasil. O farol primitivo foi o segundo' +
     ' existente em todo o continente americano, antecedido somente pelo farol do antigo Palácio de Friburgo no Recife.[3]\n\nA torre atual, de 1839, é troncônica em alvenaria com lanterna e galeria, tem 22' +
     ' metros de altura e foi pintada com bandas pretas e brancas. O farol está construído no interior do Forte de Santo Antônio da Barra.\n', 'false');
    this.cronapi.screen.changeAttrValue("imgCentral", 'src', 'img/faroldabarra.jpg');
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
