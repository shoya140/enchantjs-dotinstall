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
    this.frame = 1;

    position_x = 0;
    position_y = 0;

    bear.addEventListener('enterframe', function(){
      if (core.input.left) this.x -= 5;
      if (core.input.right) this.x += 5;
      if (core.input.up) this.y -= 5;
      if (core.input.down) this.y += 5;

      if (position_x > this.x + 2){
        this.x += 5;
        this.frame = this.age % 3;
      }else if(position_x < this.x - 2){
        this.x -= 5;
        this.frame = this.age % 3;
      }
      if (position_y > this.y + 2){
        this.y += 5;
        this.frame = this.age % 3;
      }else if(position_y < this.y - 2){
        this.y -= 5;
        this.frame = this.age % 3;
      }

    });

    bear.on('touchstart', function(){
      core.rootScene.removeChild(this);
    });

    core.rootScene.on('touchstart', function(e){
      position_x = e.x;
      position_y = e.y;
    });


    var label = new Label();
    label.x = 200;
    label.y = 5;
    label.color = 'red';
    label.font = '14px "Arial"';
    label.text = '0';
    label.on('enterframe', function(){
      label.text = (core.frame/core.fps).toFixed(2);
    });

    core.rootScene.addChild(bear);
    core.rootScene.addChild(label);
  };
  core.start();

};
