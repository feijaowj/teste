basic.showIcon(IconNames.SmallHeart)
game.addLife(0)
game.setScore(0)
basic.forever(function () {
    game.startCountdown(10000)
    led.plot(0, 0)
})
