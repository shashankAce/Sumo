System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, log, _dec, _class, _crd, ccclass, property, Sumo;

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

      _cclegacy._RF.push({}, "0fdf8q6ZkdKKqNd//UiftTG", "Sumo", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Sumo
       * DateTime = Sun Sep 26 2021 01:21:34 GMT+0530 (India Standard Time)
       * Author = shashankA
       * FileBasename = Sumo.ts
       * FileBasenameNoExtension = Sumo
       * URL = db://assets/Script/Sumo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Sumo", Sumo = (_dec = ccclass('Sumo'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Sumo, _Component);

        function Sumo() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Sumo.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          // systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        _proto.touchStart = function touchStart(touch) {
          log;
        };

        _proto.getSumoNode = function getSumoNode() {
          return this.node;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Sumo;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Sumo.js.map