window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Favoritar = window.blockly.js.blockly.Favoritar || {};

/**
 * localizacao
 */
window.blockly.js.blockly.Favoritar.linkFavoritos = function() {
 var qs;
  qs = this.cronapi.screen.getParam('qs');
  if (qs == '2') {
    this.cronapi.screen.changeContent("titleLocal", 'Pelourinho', 'false');
    this.cronapi.screen.changeAttrValue("iframemap", 'src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9743828113415!2d-38.51205883447978!3d-12.973490263363914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604e7b38f66a7%3A0xb90fb09cf176' +
     'ef24!2sPelourinho%2C%20Salvador%20-%20BA%2C%2040301-110!5e0!3m2!1spt-BR!2sbr!4v1571968216155!5m2!1spt-BR!2sbr');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Localização do Pelourinho.', 'false');
  } else if (qs == '1') {
    this.cronapi.screen.changeContent("titleLocal", 'Elevador', 'false');
    this.cronapi.screen.changeAttrValue("iframemap", 'src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9611473393684!2d-38.51533258447996!3d-12.974336863381149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604efa5d0086f%3A0x725930e371c1' +
     '6778!2sElevador%20Lacerda!5e0!3m2!1spt-BR!2sbr!4v1571968312917!5m2!1spt-BR!2sbr');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Localização do Elevador Lacerda.\n', 'false');
  } else if (qs == '3') {
    this.cronapi.screen.changeContent("titleLocal", 'Farol da Barra', 'false');
    this.cronapi.screen.changeAttrValue("iframemap", 'src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9611473393684!2d-38.51533258447996!3d-12.974336863381149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604efa5d0086f%3A0x725930e371c1' +
     '6778!2sElevador%20Lacerda!5e0!3m2!1spt-BR!2sbr!4v1571968312917!5m2!1spt-BR!2sbr');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Localização do Farol da Barra', 'false');
  }
}
