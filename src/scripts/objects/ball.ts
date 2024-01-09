import _ from 'lodash'
import { path1, path2, path3, path4, path5 } from '../paths/ball'

const pathMap = {
  1: path1,
  2: path2,
  3: path3,
  4: path4,
  5: path5
}

export default (scene: Phaser.Scene, key?: string) => {
  const pathData = key && pathMap[key] && _.sample(pathMap[key])

  const x = window.innerWidth / 2
  const y = 20

  const sprite = scene.matter.add.image(x, y, 'ball')

  const isStatic = !!pathData

  sprite.setSize(32, 32)
  sprite.setCircle(16)
  sprite.setBounce(0.8)
  sprite.setFriction(0.01)
  sprite.setSleepEvents(true, true)
  sprite.setStatic(isStatic)

  if (!isStatic) sprite.setVelocityX((Math.random() - 0.5) * 10)

  if (isStatic) {
    let step = 0
    const beforeupdate = (...arg) => {
      const data = pathData[step]

      if (data) {
        step += 1
        sprite.setX(data.x)
        sprite.setY(data.y)
        sprite.setRotation(data.angle)
      } else {
        scene.matter.world.off('beforeupdate', beforeupdate)
      }
    }

    scene.matter.world.on('beforeupdate', beforeupdate)
  } else {
    let logFlag = true

    const result: unknown[] = []

    const beforeupdate = (...arg) => {
      const body = sprite.body as MatterJS.BodyType

      if (logFlag) {
        result.push({
          x: body.position.x,
          y: body.position.y,
          angle: body.angle
        })
      } else {
        scene.matter.world.off('beforeupdate', beforeupdate)
      }
    }

    scene.matter.world.on('beforeupdate', beforeupdate)

    scene.matter.world.once('sleepstart', (event, body) => {
      console.log('body', JSON.stringify(result))
    })
  }

  return sprite
}
