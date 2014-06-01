enchant()

window.onload = ->

  core = new Core(320, 320)
  core.preload('chara1.png')
  core.fps = 20
  core.onload = ->

    Bear = Class.create Sprite,
      initialize: (x, y) ->
        Sprite.call(this, 32, 32)
        this.x = x
        this.y = y
        this.image = core.assets['chara1.png']

        this.on 'enerframe', ->
          this.rotate(10)

        core.rootScene.addChild(this)

    bears = []
    for i in [0...100]
      bears[i] = new Bear(rand(320), rand(320))

  core.start()

rand = (n) ->
  return Math.floor(Math.random())
