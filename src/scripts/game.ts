import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'

const DEFAULT_WIDTH = window.innerWidth
const DEFAULT_HEIGHT = window.innerHeight

const config = {
  type: Phaser.AUTO, // 指定渲染器类型，可以是Phaser.AUTO、Phaser.CANVAS或Phaser.WEBGL。
  backgroundColor: '#ffffff', // 指定游戏的背景颜色，可以是一个CSS颜色字符串或一个颜色值。
  width: DEFAULT_WIDTH, // 指定游戏的宽度（以像素为单位）。默认1024
  height: DEFAULT_HEIGHT, // 指定游戏的高度（以像素为单位）。默认768
  stableSort: -1, // 指定在渲染游戏对象时是否使用稳定排序
  parent: 'phaser-game', // 指定游戏的父元素，可以是DOM元素的ID字符串或DOM元素本身。
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  // canvas：指定用于渲染游戏的canvas元素，可以是一个现有的canvas元素。
  // canvasStyle：指定canvas的样式，如宽度、高度、定位等。
  scene: [PreloadScene, MainScene], // 指定游戏的初始场景，可以是一个场景对象或一个场景配置对象。
  // disableContextMenu: true, // 指定是否禁用右键菜单，默认为false。
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      enableSleeping: true
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
