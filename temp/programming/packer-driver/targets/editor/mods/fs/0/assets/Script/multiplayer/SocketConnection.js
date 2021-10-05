System.register(["__unresolved_0", "cc", "colyseus.js", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Client, Constants, MiloManager, _dec, _class, _temp, _crd, ccclass, property, SocketConnection;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("SocketConnection", SocketConnection = (_dec = ccclass('SocketConnection'), _dec(_class = (_temp = class SocketConnection extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "client", void 0);

          _defineProperty(this, "playerName", void 0);

          _defineProperty(this, "isConnected", void 0);

          _defineProperty(this, "room", void 0);
        }

        connect() {
          let domain = window.location.href.split('/')[2];
          let url = "ws://" + domain.split(':')[0] + ':2567';
          this.client = new (_crd && Client === void 0 ? (_reportPossibleCrUseOfClient({
            error: Error()
          }), Client) : Client)(url);
          let miloManager = (_crd && MiloManager === void 0 ? (_reportPossibleCrUseOfMiloManager({
            error: Error()
          }), MiloManager) : MiloManager)();
          let userInfo = JSON.parse(miloManager.onGameInit());
          let playerInfo = userInfo.players.find(obj => {
            return obj.userId == userInfo.initInfo.userId;
          });
          this.playerName = playerInfo.name;
          playerInfo = Object.assign(playerInfo, {
            micEnable: userInfo.initInfo.micEnabled
          });
          let loginDetails = Object.assign(userInfo.initInfo, {
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
          }).then(room => {
            this.isConnected = true;
            this.onConnect(room);
            console.log("Room Created Successfully", room);
          }).catch(e => {
            console.log(e);
          });
        }

        onConnect(room) {
          this.room = room;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SocketConnection.js.map