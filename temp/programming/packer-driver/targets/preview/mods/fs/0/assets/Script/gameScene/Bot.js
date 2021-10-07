System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, SkeletalAnimationComponent, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CELL_TIME, SPEED, MAXDISTANCE, STATE, Bot;

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
      Vec3 = _cc.Vec3;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77e533EezxA/6Pf2Q54j4sW", "Bot", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Bot
       * DateTime = Wed Oct 06 2021 13:10:22 GMT+0530 (India Standard Time)
       * Author = sushant
       * FileBasename = Bot.ts
       * FileBasenameNoExtension = Bot
       * URL = db://assets/script/Player/Bot/Bot.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      CELL_TIME = 0.016;
      SPEED = 2;
      MAXDISTANCE = 2;
      STATE = {
        IDLE: 0,
        WALK: 1,
        BUMP: 2
      };

      _export("Bot", Bot = (_dec = ccclass('Bot'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bot, _Component);

        function Bot() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "player", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_now_time", 0);

          _defineProperty(_assertThisInitialized(_this), "_movement", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_skeletal", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentState", STATE.IDLE);

          return _this;
        }

        var _proto = Bot.prototype;

        _proto.start = function start() {
          this._skeletal = this.node.getComponent(SkeletalAnimationComponent);

          this._skeletal.play('Armature|idle');
          /* setInterval(() => {
              let direction = new Vec3(this.player.getPosition().x - this.node.getPosition().x,this.player.getPosition().y - this.node.getPosition().y,this.player.getPosition().z - this.node.getPosition().z);
                let angle = (Math.atan2(direction.x,direction.z)) * 180 / Math.PI;   
              this.node.eulerAngles = new Vec3(0, angle, 0);
          }, 500); */

        };

        _proto.update = function update(deltaTime) {
          this._now_time += deltaTime; // this.fix_update(CELL_TIME);

          while (this._now_time >= CELL_TIME) {
            this.fix_update(CELL_TIME);
            this._now_time -= CELL_TIME;
          }

          var direction = new Vec3(this.player.getPosition().x - this.node.getPosition().x, this.player.getPosition().y - this.node.getPosition().y, this.player.getPosition().z - this.node.getPosition().z);
          var angle = Math.atan2(direction.x, direction.z) * 180 / Math.PI;
          this.node.eulerAngles = new Vec3(0, angle, 0);
          var distance = this.getDistance(this.player.getPosition().x, this.player.getPosition().z, this.node.getPosition().x, this.node.getPosition().z);

          if (distance > MAXDISTANCE) {
            direction.normalize();
            this._movement = direction;

            if (this._currentState == STATE.IDLE) {
              this._currentState = STATE.WALK;

              this._skeletal.play('Armature|walk');
            }
          } else {
            this._movement = Vec3.ZERO;

            if (this._currentState == STATE.WALK) {
              this._currentState = STATE.IDLE;

              this._skeletal.play('Armature|idle');
            }
          }
        };

        _proto.getDistance = function getDistance(xA, yA, xB, yB) {
          var xDiff = xA - xB;
          var yDiff = yA - yB;
          return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
        };

        _proto.fix_update = function fix_update(dt) {
          this.node.setPosition(this.node.position.add3f(this._movement.x * SPEED * dt, 0, this._movement.z * SPEED * dt));
        };

        return Bot;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Bot.js.map