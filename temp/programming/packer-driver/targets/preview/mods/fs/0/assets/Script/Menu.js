System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, log, _dec, _class, _crd, ccclass, property, Menu;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Menu", Menu = (_dec = ccclass('Menu'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Menu, _Component);

        function Menu() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Menu.prototype;

        _proto.start = function start() {};

        _proto.onPlayClicked = function onPlayClicked() {
          log('Start Game');
        };

        return Menu;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Menu.js.map