window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Restaurantes = window.blockly.js.blockly.Restaurantes || {};

/**
 * localizacao
 */
window.blockly.js.blockly.Restaurantes.linkRestaurantes = function() {
 var qs;
  qs = this.cronapi.screen.getParam('qs');
  if (qs == '2') {
    this.cronapi.screen.changeContent("titleLocal", 'Pelourinho', 'false');
    this.cronapi.screen.changeAttrValue("iframemap", 'src', 'https://www.google.com/search?sxsrf=ACYBGNREVsBAcpVNG4KtUKcFcPpTsFPdiw:1572621114983&q=restaurantes+no+pelourinho&npsic=0&rflfq=1&rlha=0&rllag=-12972738,-38508444,154&tbm=lcl&ved=2ahUKEwi157KXpsnlAhUb' +
     'GLkGHXV9ApwQtgN6BAgKEAQ&tbs=lrf:!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkJS,lf:1,lf_ui:9&rldoc=1');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Restaurantes do Pelourinho.', 'false');
  } else if (qs == '1') {
    this.cronapi.screen.changeContent("titleLocal", 'Elevador', 'false');
    this.cronapi.screen.changeAttrValue("iframemap", 'src', 'https://www.google.com/search?sxsrf=ACYBGNTTcApG7lesb5OSS13BXQ9THTZX2A:1572621688235&q=restaurantes+no+elevador+lacerda&npsic=0&rflfq=1&rldoc=1&rlha=0&rllag=-12975012,-38514044,245&tbm=lcl&sxsrf=ACYBG' +
     'NTTcApG7lesb5OSS13BXQ9THTZX2A:1572621688235&sa=X&ved=2ahUKEwjemd-oqMnlAhUKHLkGHeN2DKkQtgN6BAgLEAQ');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Restaurantes próximos do Elevador Lacerda.\n', 'false');
  } else if (qs == '3') {
    this.cronapi.screen.changeContent("titleLocal", 'Farol da Barra', 'false');
    this.cronapi.screen.changeAttrValue("iframemap", 'src', 'https://www.google.com/search?sxsrf=ACYBGNRcn69ewFKiVdzkdmWykP_mStchPA:1572621641706&q=restaurantes+no+farol+da+barra&npsic=0&rflfq=1&rlha=0&rllag=-13009929,-38529177,410&tbm=lcl&ved=2ahUKEwjyoseSqMnl' +
     'AhXtIbkGHaZYDsMQtgN6BAgKEAQ&tbs=lrf:!3sIAEqAkJS,lf:1,lf_ui:9&rldoc=1');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Restaurantes próximos ao Farol da Barra', 'false');
  }
}
