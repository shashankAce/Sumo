System.register(["__unresolved_0", "cc", "colyseus.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Client, _dec, _class, _temp, _crd, ccclass, SocketConnection;

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
    }, function (_colyseusJs) {
      Client = _colyseusJs.Client;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa55cgJ/ItInrViJDo5FmqX", "SocketConnection", undefined);

      ccclass = _decorator.ccclass;

      _export("SocketConnection", SocketConnection = (_dec = ccclass('SocketConnection'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function SocketConnection() {
          _defineProperty(this, "client", void 0);

          _defineProperty(this, "playerName", void 0);

          _defineProperty(this, "isConnected", void 0);

          _defineProperty(this, "room", void 0);
        }

        var _proto = SocketConnection.prototype;

        _proto.connect = function connect(afterConnnect) {
          var _this = this;

          var domain = window.location.href.split('/')[2];
          var url = "ws://" + domain.split(':')[0] + ':2567';
          this.client = new (_crd && Client === void 0 ? (_reportPossibleCrUseOfClient({
            error: Error()
          }), Client) : Client)(url);
          this.client.create('SumoRoom').then(function (room) {
            _this.isConnected = true;

            _this.onConnect(room);

            afterConnnect();
            console.log("Room Created Successfully", room);
          })["catch"](function (e) {
            console.log(e);
          });
        };

        _proto.onConnect = function onConnect(room) {
          this.room = room;
        };

        return SocketConnection;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SocketConnection.js.map