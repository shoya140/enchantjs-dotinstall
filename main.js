// Generated by CoffeeScript 1.7.1
(function() {
  var rand;

  enchant();

  window.onload = function() {
    var core;
    core = new Core(320, 320);
    core.preload('chara1.png');
    core.fps = 20;
    core.onload = function() {
      var Bear, bears, i, _i, _results;
      Bear = Class.create(Sprite, {
        initialize: function(x, y) {
          Sprite.call(this, 32, 32);
          this.x = x;
          this.y = y;
          this.image = core.assets['chara1.png'];
          this.on('enerframe', function() {
            return this.rotate(10);
          });
          return core.rootScene.addChild(this);
        }
      });
      bears = [];
      _results = [];
      for (i = _i = 0; _i < 100; i = ++_i) {
        _results.push(bears[i] = new Bear(rand(320), rand(320)));
      }
      return _results;
    };
    return core.start();
  };

  rand = function(n) {
    return Math.floor(Math.random());
  };

}).call(this);
