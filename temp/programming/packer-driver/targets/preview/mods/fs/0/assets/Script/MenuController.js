System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, director, macro, Node, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MenuController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MenuController", MenuController = (_dec = ccclass('MenuController'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MenuController, _Component);

        function MenuController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "startLoc", void 0);

          _defineProperty(_assertThisInitialized(_this), "startZ", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "sumo", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MenuController.prototype;

        _proto.onLoad = function onLoad() {
          macro.ENABLE_MULTI_TOUCH = false;
          director.preloadScene('GameScene');
        };

        _proto.start = function start() {
          // Created for rotating the character
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        _proto.touchStart = function touchStart(touch) {
          this.startLoc = touch.getLocation();
          this.startZ = this.sumo.rotation.getEulerAngles(new Vec3()).z;
        };

        _proto.touchMove = function touchMove(touch) {
          var loc = touch.getLocationX();
          var dist = this.startLoc.x - loc; // let angle = clamp(dist, -360, 360);
          // let endQuat = Quat.fromEuler(new Quat(), -90, 0, angle);

          this.sumo.setRotationFromEuler(-90, 0, this.startZ + dist);
        };

        _proto.startGame = function startGame() {
          director.loadScene('GameScene');
        };

        _proto.onDestroy = function onDestroy() {
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.touchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        return MenuController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sumo", [_dec2], {
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