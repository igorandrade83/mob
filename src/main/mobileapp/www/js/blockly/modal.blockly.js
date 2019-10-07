window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Modal = window.blockly.js.blockly.Modal || {};

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

/**
 * modal
 */
window.blockly.js.blockly.Modal.msg = function() {
 var rand;
  rand = mathRandomInt(1, 5);
  if (rand == 1) {
    this.cronapi.screen.changeContent("resumo", 'Deus abençoe todos nós!', 'false');
  } else if (rand == 2) {
    this.cronapi.screen.changeContent("resumo", 'Que a professora e todos vocês estudantes sejam bem felizes.', 'false');
  } else if (rand == 3) {
    this.cronapi.screen.changeContent("resumo", 'Meu coração está cheio de amor, porque meu Deus é meu Senhor.', 'false');
  } else if (rand == 4) {
    this.cronapi.screen.changeContent("resumo", 'Sorria todo dia!', 'false');
  } else if (rand == 5) {
    this.cronapi.screen.changeContent("resumo", 'Nunca deixe a tristeza te abater', 'false');
  } else {
    this.cronapi.screen.changeContent("resumo", ':)', 'false');
  }
}
