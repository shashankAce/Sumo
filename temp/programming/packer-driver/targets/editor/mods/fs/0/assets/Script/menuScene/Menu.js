System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, log, _dec, _class, _crd, ccclass, property, Menu;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b33e1uYXghIYZH6cQOlyEBZ", "Menu", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Menu", Menu = (_dec = ccclass('Menu'), _dec(_class = class Menu extends Component {
        start() {}

        onPlayClicked() {
          log('Start Game');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Menu.js.map