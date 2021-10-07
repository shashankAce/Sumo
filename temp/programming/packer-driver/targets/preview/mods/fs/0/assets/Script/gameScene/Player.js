System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Node, macro, SkeletalAnimationComponent, BoxCollider, RigidBodyComponent, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CELL_TIME, SPEED, BUMPVALUE, STATE, Player;

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
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      macro = _cc.macro;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      BoxCollider = _cc.BoxCollider;
      RigidBodyComponent = _cc.RigidBodyComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3addpkf1lOCoVufXlKk5xR", "Player", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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
      BUMPVALUE = 4;
      STATE = {
        IDLE: 0,
        WALK: 1,
        BUMP: 2
      };

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "playerCamera", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_currentPlayerPosition", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_vector", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_vectorAngle", Vec3.ZERO);

          _defineProperty(_assertThisInitialized(_this), "_now_time", 0);

          _defineProperty(_assertThisInitialized(_this), "_skeletal", void 0);

          _defineProperty(_assertThisInitialized(_this), "_currentState", STATE.IDLE);

          return _this;
        }

        var _proto = Player.prototype;

        _proto.start = function start() {
          this._skeletal = this.node.getComponent(SkeletalAnimationComponent);

          this._skeletal.play('Armature|idle');

          var collider = this.node.getComponent(BoxCollider);
          collider.on('onCollisionEnter', this._onCollisionEnter, this);
        };

        _proto._onCollisionEnter = function _onCollisionEnter(event) {
          var _this2 = this;

          var otherCollider = event.otherCollider;

          if (otherCollider.node.name === 'platform') {
            return;
          }

          console.log("COLLIDED ------- " + this._currentPlayerPosition);
          console.log("COLLIDED ------- " + this._vector.x + "    " + this._vector.y);
          this._currentState = STATE.BUMP;
          this.getComponent(RigidBodyComponent).applyImpulse(new Vec3(this._vector.x * BUMPVALUE * -1, 0, this._vector.y * BUMPVALUE));
          setTimeout(function () {
            _this2.getComponent(RigidBodyComponent).clearVelocity();

            _this2._currentState = STATE.IDLE;
          }, 1000); // const otherRigidBody = otherCollider.node.getComponent(RigidBody)!;
          // otherRigidBody.useGravity = true;
          // otherRigidBody.applyForce(new Vec3(0, 3000, -1500), new Vec3(0, 0.5, 0));
          // const collider = event.selfCollider;
          // collider.addMask(Constants.CarGroup.NORMAL);
          // const rigidBody = this.node.getComponent(RigidBody)!;
          // rigidBody.useGravity = true;
          // this._runState = RunState.CRASH;
          // AudioManager.playSound(Constants.AudioSource.CRASH);
          // CustomEventListener.dispatchEvent(EventName.GAME_OVER);
        };

        _proto.touchCallBack = function touchCallBack(vector, angle) {
          Vec3.rotateZ(vector, vector, Vec3.ZERO, this.playerCamera.eulerAngles.y * macro.RAD);
          this._vector = vector.normalize();

          if (angle) {
            this.node.eulerAngles = new Vec3(0, angle + 90 + this.playerCamera.eulerAngles.y, 0);
          }
        };

        _proto.touchAngleCallBack = function touchAngleCallBack(vector, angle) {
          this._vectorAngle = vector.normalize();
        };

        _proto.fix_update = function fix_update(dt) {
          if (this._currentState == STATE.BUMP) return;

          if (this._vector.lengthSqr() > 0) {
            if (this._currentState == STATE.IDLE) {
              this._currentState = STATE.WALK;

              this._skeletal.play('Armature|walk');
            }

            this.node.setPosition(this.node.position.add3f(this._vector.x * SPEED * dt, 0, -this._vector.y * SPEED * dt));
            this._currentPlayerPosition = new Vec3(this._vector.x, 0, this._vector.y);
            this.playerCamera.setPosition(this.playerCamera.position.add3f(this._vector.x * SPEED * dt, 0, 0));
          } else {
            if (this._currentState == STATE.WALK) {
              this._currentState = STATE.IDLE;

              this._skeletal.play('Armature|idle');
            }
          }

          if (this._vectorAngle.lengthSqr() > 0) {
            this.playerCamera.eulerAngles = this.playerCamera.eulerAngles.add3f(0, -this._vectorAngle.x, 0);
          }
        };

        _proto.update = function update(deltaTime) {
          this._now_time += deltaTime; // this.fix_update(CELL_TIME);

          while (this._now_time >= CELL_TIME) {
            this.fix_update(CELL_TIME);
            this._now_time -= CELL_TIME;
          }
        };

        return Player;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerCamera", [_dec2], {
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
//# sourceMappingURL=Player.js.map