input.onButtonPressed(Button.A, function () {
    y += 1
    if (y > 4) {
        y = 0
        x += 1
        if (x > 4) {
            x = 0
        }
    }
    basic.clearScreen()
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (x > 4) {
        x = 0
        y += 1
        if (y > 4) {
            y = 0
        }
    }
    basic.clearScreen()
    led.plot(x, y)
})
let x = 0
let y = 0
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
