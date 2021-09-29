System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, macro, Vec3, EventHandler, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, GameUIController;

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
      Node = _cc.Node;
      macro = _cc.macro;
      Vec3 = _cc.Vec3;
      EventHandler = _cc.EventHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62ee6KEwbpJNKAJo5TmXRgo", "GameUIController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = GameUIController
       * DateTime = Tue Sep 28 2021 19:04:24 GMT+0530 (India Standard Time)
       * Author = shashankA
       * FileBasename = GameUIController.ts
       * FileBasenameNoExtension = GameUIController
       * URL = db://assets/Script/GameUIController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("GameUIController", GameUIController = (_dec = ccclass('GameUIController'), _dec2 = property({
        type: [EventHandler],
        tooltip: 'Touch Drag'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameUIController, _Component);

        function GameUIController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "startLoc", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "touchEventCallBack", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameUIController.prototype;

        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnded, this);
        };

        _proto.touchMove = function touchMove(touch) {
          /*  let loc = touch.getUILocation();
           let pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(loc.x, loc.y));
           let angle = Math.atan2(pos.y, pos.x);
           this.touchEventCallBack.forEach(c => c.emit([pos, angle * macro.DEG])); */
          var loc = touch.getLocation();
          var pos = new Vec3(loc.x - this.startLoc.x, loc.y - this.startLoc.y);
          var angle = this.get_angle(this.startLoc.x, this.startLoc.y, loc.x, loc.y);
          console.log(angle);
          this.touchEventCallBack.forEach(function (c) {
            return c.emit([pos, angle]);
          });
        };

        _proto.touchEnded = function touchEnded(touch) {
          this.touchEventCallBack.forEach(function (c) {
            return c.emit([new Vec3(0, 0, 0)]);
          });
        };

        _proto.touchStart = function touchStart(touch) {
          this.startLoc = touch.getLocation();
          this.touchMove(touch);
        };

        _proto.get_angle = function get_angle(cx, cy, ex, ey) {
          var dy = ey - cy;
          var dx = ex - cx;
          var theta = Math.atan2(dy, dx); // theta *= 180 / Math.PI;

          return theta * macro.DEG;
        };

        return GameUIController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchEventCallBack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameUIController.js.map