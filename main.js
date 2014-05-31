enchant();

window.onload = function(){

  var core = new Core(320, 320);
  core.preload('chara1.png');
  core.fps = 20;
  core.onload = function(){
    var bear = new Sprite(32, 32);
    bear.image = core.assets['chara1.png'];
    bear.x = 0;
    bear.y = 0;
    bear.frame = 1;

    position_x = 0;
    position_y = 0;

    var enemy = new Sprite(32, 32);
    enemy.image = core.assets['chara1.png'];
    enemy.x = 80;
    enemy.y = 0;
    enemy.frame = 0;

    bear.addEventListener('enterframe', function(){
      if (core.input.right) this.x += 5;
      if (core.input.left) this.x -= 5;


      // intersect

      if (this.intersect(enemy)){
        label.text = 'hit';
      }
      // within
      if (this.within(enemy, 10)){
        label.text = 'hit!!';
        core.pushScene(gameOverScene);
        core.stop();
      }

    });

    bear.on('touchstart', function(){
      core.rootScene.removeChild(this);
    });

    core.rootScene.on('touchstart', function(e){
      position_x = e.x;
      position_y = e.y;
    });

    var gameOverScene = new Scene();
    gameOverScene.backgroundColor = 'black'


    var label = new Label();
    label.x = 200;
    label.y = 5;
    label.color = 'red';
    label.font = '14px "Arial"';
    label.text = '0';

    core.rootScene.addChild(bear);
    core.rootScene.addChild(enemy);
    core.rootScene.addChild(label);
  };
  core.start();

};
