System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, director, macro, Node, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MenuController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      director = _cc.director;
      macro = _cc.macro;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16e06lwqwJFjJauKigdojGv", "MenuController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuController", MenuController = (_dec = ccclass('MenuController'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class MenuController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "startLoc", void 0);

          _defineProperty(this, "startZ", void 0);

          _initializerDefineProperty(this, "sumo", _descriptor, this);
        }

        onLoad() {
          macro.ENABLE_MULTI_TOUCH = false;
          director.preloadScene('GameScene');
        }

        start() {
          // Created for rotating the character
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        }

        touchStart(touch) {
          this.startLoc = touch.getLocation();
          this.startZ = this.sumo.rotation.getEulerAngles(new Vec3()).z;
        }

        touchMove(touch) {
          let loc = touch.getLocationX();
          let dist = this.startLoc.x - loc; // let angle = clamp(dist, -360, 360);
          // let endQuat = Quat.fromEuler(new Quat(), -90, 0, angle);

          this.sumo.setRotationFromEuler(-90, 0, this.startZ + dist);
        }

        startGame() {
          director.loadScene('GameScene');
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sumo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MenuController.js.map