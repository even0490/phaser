import FpsText from '../objects/fpsText'
import createBall from '../objects/ball'
import createPillar from '../objects/pillar'
import createWall from '../objects/wall'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.add.image(0, 0, 'main-bg').setOrigin(0, 0).setDisplaySize(this.cameras.main.width, this.cameras.main.height)

    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)

    this.matter.world.setBounds(0, 0, window.innerWidth, window.innerHeight, 32, true, true, false, true)

    const groupAB = this.matter.world.nextGroup(true)

    createPillar(this)
    createWall(this)

    // this.input.on('pointerdown', pointer => {
    //   const sprite = createBall(this, pointer.worldX, pointer.worldY)
    //   sprite.setCollisionGroup(groupAB)
    // })

    if (this.input.keyboard)
      this.input.keyboard.on('keydown', event => {
        const sprite = createBall(this, event.key)
        sprite.setCollisionGroup(groupAB)
      })
  }

  update(time, delta) {
    this.fpsText.update()
  }

  render(data) {
    console.log('render', data)
  }
}
