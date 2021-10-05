System.register(["__unresolved_0", "cc", "colyseus.js", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Client, Constants, MiloManager, _dec, _class, _temp, _crd, ccclass, property, SocketConnection;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfClient(extras) {
    _reporterNs.report("Client", "colyseus.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoom(extras) {
    _reporterNs.report("Room", "colyseus.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMiloManager(extras) {
    _reporterNs.report("MiloManager", "./MiloManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_colyseusJs) {
      Client = _colyseusJs.Client;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      MiloManager = _unresolved_3.MiloManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa55cgJ/ItInrViJDo5FmqX", "SocketConnection", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SocketConnection", SocketConnection = (_dec = ccclass('SocketConnection'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SocketConnection, _Component);

        function SocketConnection() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "client", void 0);

          _defineProperty(_assertThisInitialized(_this), "playerName", void 0);

          _defineProperty(_assertThisInitialized(_this), "isConnected", void 0);

          _defineProperty(_assertThisInitialized(_this), "room", void 0);

          return _this;
        }

        var _proto = SocketConnection.prototype;

        _proto.connect = function connect() {
          var _this2 = this;

          var domain = window.location.href.split('/')[2];
          var url = "ws://" + domain.split(':')[0] + ':2567';
          this.client = new (_crd && Client === void 0 ? (_reportPossibleCrUseOfClient({
            error: Error()
          }), Client) : Client)(url);
          var miloManager = (_crd && MiloManager === void 0 ? (_reportPossibleCrUseOfMiloManager({
            error: Error()
          }), MiloManager) : MiloManager)();
          var userInfo = JSON.parse(miloManager.onGameInit());
          var playerInfo = userInfo.players.find(function (obj) {
            return obj.userId == userInfo.initInfo.userId;
          });
          this.playerName = playerInfo.name;
          playerInfo = Object.assign(playerInfo, {
            micEnable: userInfo.initInfo.micEnabled
          });
          var loginDetails = Object.assign(userInfo.initInfo, {
            isHost: playerInfo.host,
            playerInfo: playerInfo,
            gameConfig: _crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants,
            roomName: 'OriginalWar'
          });
          this.client.create(loginDetails.roomName, {
            roomType: 'private',
            roomId: loginDetails.roomId,
            playerInfo: loginDetails.playerInfo,
            gameConfig: loginDetails.gameConfig
          }).then(function (room) {
            _this2.isConnected = true;

            _this2.onConnect(room);

            console.log("Room Created Successfully", room);
          })["catch"](function (e) {
            console.log(e);
          });
        };

        _proto.onConnect = function onConnect(room) {
          this.room = room;
        };

        return SocketConnection;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SocketConnection.js.map