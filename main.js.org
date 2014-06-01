enchant();

window.onload = function(){

  var core = new Core(320, 320);
  core.preload('chara1.png');
  core.fps = 20;
  core.onload = function(){

    var Bear = Class.create(Sprite, {
      initialize: function(x, y){
        Sprite.call(this, 32, 32);
        this.x = x;
        this.y = y;
        this.frame = rand(5);
        this.opacity = rand(100) / 100;
        this.image = core.assets['chara1.png'];

        this.tl.moveBy(rand(100), 0,  40, enchant.Easing.BOUNCE_EASEOUT).
        moveBy(-rand(100), 0,  40, enchant.Easing.BOUNCE_EASEOUT);

        this.on('enterframe', function(){
          this.rotate(rand(10));
        });
        core.rootScene.addChild(this);
      }
    });

    var bears = [];
    for (var i = 0; i < 100; i++){
      bears[i] = new Bear(rand(320), rand(320));
    }

  };
  core.start();

};

function rand(n){
  return Math.floor(Math.random()*(n+1));
}
