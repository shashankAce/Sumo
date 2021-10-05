System.register(["__unresolved_0", "cc", "colyseus.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Client, _dec, _class, _temp, _crd, ccclass, property, SocketConnection;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfClient(extras) {
    _reporterNs.report("Client", "colyseus.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoom(extras) {
    _reporterNs.report("Room", "colyseus.js", _context.meta, extras);
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
          this.client.create('SumoRoom').then(room => {
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