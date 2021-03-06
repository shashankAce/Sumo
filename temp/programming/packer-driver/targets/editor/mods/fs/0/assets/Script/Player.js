System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Node, macro, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CELL_TIME, SPEED, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      macro = _cc.macro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cbf7Z5+/NHHpi/kPsJMdy0", "Player", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Player
       * DateTime = Fri Sep 24 2021 14:15:01 GMT+0530 (India Standard Time)
       * Author = shashankA
       * FileBasename = Player.ts
       * FileBasenameNoExtension = Player
       * URL = db://assets/Script/Player.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      CELL_TIME = 0.016;
      SPEED = 4;

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "playerCamera", _descriptor, this);

          _defineProperty(this, "_vector", Vec3.ZERO);

          _defineProperty(this, "_vectorAngle", Vec3.ZERO);

          _defineProperty(this, "_now_time", 0);
        }

        touchCallBack(vector, angle) {
          Vec3.rotateZ(vector, vector, Vec3.ZERO, this.playerCamera.eulerAngles.y * macro.RAD);
          this._vector = vector.normalize();

          if (angle) {
            this.node.eulerAngles = new Vec3(0, angle + 90 + this.playerCamera.eulerAngles.y, 0);
          }
        }

        touchAngleCallBack(vector, angle) {
          this._vectorAngle = vector.normalize();
        }

        fix_update(dt) {
          if (this._vector.lengthSqr() > 0) {
            this.node.setPosition(this.node.position.add3f(this._vector.x * SPEED * dt, 0, -this._vector.y * SPEED * dt));
            this.playerCamera.setPosition(this.playerCamera.position.add3f(this._vector.x * SPEED * dt, 0, 0));
          }

          if (this._vectorAngle.lengthSqr() > 0) {
            this.playerCamera.eulerAngles = this.playerCamera.eulerAngles.add3f(0, -this._vectorAngle.x, 0);
          }
        }

        update(deltaTime) {
          this._now_time += deltaTime;

          while (this._now_time >= CELL_TIME) {
            this.fix_update(CELL_TIME);
            this._now_time -= CELL_TIME;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Player.js.map