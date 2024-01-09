export default (scene: Phaser.Scene) => {
  const groupC = scene.matter.world.nextGroup(true)
  const maxWidth = window.innerWidth

  const total = 6

  for (let index = 0; index < 30; index++) {
    const length = total

    const floor = Math.floor(index / total)

    const itemWidth = maxWidth / length + 1

    const x = (index % length) * itemWidth + (floor % 2 ? 10 + itemWidth / 2 : 10)
    const y = floor * 80 + 200

    const pillar = scene.matter.add.image(x, y, 'pillar', undefined, {
      isStatic: true,
      shape: { type: 'circle' }
    })

    pillar.setCollisionGroup(groupC)
  }
}
