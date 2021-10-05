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
        var require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          var MiloManager = function MiloManager() {
            var users = [{
              "userId": "mx-user-1",
              "gameId": "86a01a92a84646e4ad33252f19b39385",
              "roomId": "7d1b376b-0eee-4d53-bd91-3cda5de62b43-1625715627668",
              "highestScore": 90,
              "lastLevel": 0,
              "gameMode": "score",
              "isFirstOpen": true,
              "roomType": "public/private",
              balance: 100,
              micEnabled: true
            }, {
              "userId": "mx-user-2",
              "gameId": "86a01a92a84646e4ad33252f19b39385",
              "roomId": "7d1b376b-0eee-4d53-bd91-3cda5de62b43-1625715627668",
              "highestScore": 90,
              "lastLevel": 0,
              "gameMode": "score",
              "isFirstOpen": true,
              "roomType": "public/private",
              balance: 100,
              micEnabled: true
            }];
            var dataFromApp = {
              "players": [{
                "bot": false,
                "host": true,
                "name": "Player1",
                "profilePicUrl": "https://i.picsum.photos/id/177/200/200.jpg?hmac=785Vry8HsdS9dQ7mFYbwV8bR2tWVtzJWWl9YLp6L0n8",
                "userId": "mx-user-1"
              }, {
                "bot": false,
                "host": false,
                "name": "Player2",
                "profilePicUrl": "https://i.picsum.photos/id/445/200/300.jpg?hmac=7dfJBQTfK8boCS5_EXpFW8SC_8VKMgDw5yFInpEee4s",
                "userId": "mx-user-2"
              }]
            };
            var userNum = window.location.href.split('?')[1].split("user")[1];
            var userId = parseInt(userNum);
            var user = users[userId - 1];
            var initInfo = Object.assign({}, dataFromApp, {
              initInfo: user
            });

            function onGameInit() {
              return JSON.stringify(initInfo);
            }

            function onGameOver() {}

            function onGameStart() {}

            function onError() {}

            onGameInit = onGameInit.bind(this);
            onGameOver = onGameOver.bind(this);
            onGameStart = onGameStart.bind(this);
            onError = onError.bind(this);
            return {
              onGameInit: onGameInit,
              onGameOver: onGameOver,
              onGameStart: onGameStart,
              onError: onError
            };
          };

          module.exports = MiloManager;
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=mx-milo-manager.js.map