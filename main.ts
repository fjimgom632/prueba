let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
strip.show()
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        basic.showNumber(0)
    } else {
        basic.showNumber(1)
    }
})
