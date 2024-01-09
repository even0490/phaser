export default (scene: Phaser.Scene) => {
  const groupC = scene.matter.world.nextGroup(true)
  const total = 6

  for (let index = 0; index <= total; index++) {
    const x = (window.innerWidth / (total - 1)) * index
    const y = window.innerHeight - 40

    const wall = scene.matter.add.image(x, y, 'wall', undefined, {
      isStatic: true
    })

    wall.setCollisionGroup(groupC)
  }
}
