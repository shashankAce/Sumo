System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        let require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          var MX_MULTIPLAYER = function (serverLocation) {
            this.COLYSEUS_CLIENT = new Colyseus.Client(serverLocation);
          };

          MX_MULTIPLAYER.prototype.room = null;

          MX_MULTIPLAYER.prototype.joinOrCreatePrivateRoom = function (options, callback) {
            // this.joinPrivateRoom(options, callback);
            this.createPrivateRoom(options, callback);
          };

          MX_MULTIPLAYER.prototype.createPrivateRoom = function (options, callback) {
            const {
              roomId
            } = options;

            if (!roomId) {
              return;
            }

            this.COLYSEUS_CLIENT.create(options.roomName, {
              roomType: 'private',
              roomId: roomId,
              playerInfo: options.playerInfo,
              gameConfig: options.gameConfig
            }).then(room => {
              this.room = room;
              console.log(room);
              callback();
              console.log("Room Created Successfully", room);
            }).catch(e => {
              console.log(e);
            });
          };

          MX_MULTIPLAYER.prototype.joinPrivateRoom = function (options, callback) {
            const {
              roomId
            } = options;

            if (!roomId) {
              return;
            }

            this.COLYSEUS_CLIENT.joinById(roomId, {
              roomType: 'PRIVATE',
              roomId: roomId,
              playerInfo: options.playerInfo
            }).then(room => {
              this.room = room;
              callback();
              console.log("Room Joined Successfully", room);
            }).catch(e => {
              console.log(e);

              if (!this.room) {
                setTimeout(() => {
                  this.joinPrivateRoom(options, callback);
                }, 1000);
              }
            });
          };

          MX_MULTIPLAYER.prototype.send = function (eventName, data) {
            this.room.send(eventName, data);
          };

          MX_MULTIPLAYER.prototype.onMessage = function (eventName, callback) {
            this.room.onMessage(eventName, callback);
          };

          module.exports = MX_MULTIPLAYER;
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=mx-multiplayer.js.map