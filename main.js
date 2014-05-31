enchant();

window.onload = function(){

  var core = new Core(320, 320);
  core.preload('chara1.png');
  core.fps = 20;
  core.onload = function(){

    var Bare = Class.create(Sprite, {
      initialize: function(x, y){
        Sprite.call(this, 32, 32);
        this.x = x;
        this.y = y;
        this.image = core.assets['chara1.png'];
        this.on('enterframe', function(){
          this.x += 5;
        });
        core.rootScene.addChild(this);
      }
    });

    var bare = new Bare(10, 10);

  };
  core.start();

};
