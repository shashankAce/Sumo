System.register(["__unresolved_0", "cc", "colyseus.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Client, _dec, _class, _temp, _crd, ccclass, property, SocketConnection;

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
          this.client.create('SumoRoom').then(function (room) {
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