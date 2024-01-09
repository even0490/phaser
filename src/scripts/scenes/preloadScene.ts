export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  // 在场景被创建时调用。你可以在这个方法中初始化场景的变量和设置。
  init(data) {
    console.log('init', data)
  }

  // 在场景加载资源时调用。你可以在这个方法中加载场景所需的图像、声音和其他资源。
  preload(data) {
    console.log('preload', data)
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.image('main-bg', 'https://web-sg.bldimg.com/cblued/static/a.1hjc77s69t0bg4.png')
    this.load.image('ball', 'https://web-sg.bldimg.com/cblued/static/shinyball.1hjcesopfm8d6s.png')
    this.load.image('pillar', 'https://web-sg.bldimg.com/cblued/static/blue_ball.1hjcfa2e8tgeml.png')
    this.load.image('ground', 'https://web-sg.bldimg.com/cblued/static/checkerboard.1hjcfe6kr2rtpe6.png')
    this.load.image('wall', 'https://web-sg.bldimg.com/cblued/static/flectrum2.1hjjieka27rn9h.png')
  }

  // 在场景创建完成后调用。你可以在这个方法中创建游戏对象、设置物理引擎、添加输入事件等。
  create(data) {
    console.log('create', data)
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }

  // 在每一帧更新时调用。你可以在这个方法中处理游戏逻辑、移动游戏对象等。
  update(data) {
    console.log('update', data)
  }

  // 在每一帧渲染时调用。你可以在这个方法中进行自定义的绘制操作。
  render(data) {
    console.log('render', data)
  }
}
