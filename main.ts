function updateScreen () {
    basic.clearScreen()
    if (hajok) {
        // Látszanak a hajók (fixált pontok) és az aktuális mozgó pont
        for (let i = 0; i <= 4; i++) {
            for (let j = 0; j <= 4; j++) {
                visible[i][j] = lkerako9tt[i][j]
            }
        }
        visible[x][y] = true
        for (let k = 0; k <= 4; k++) {
            for (let l = 0; l <= 4; l++) {
                if (visible[k][l]) {
                    led.plot(k, l)
                }
            }
        }
    } else {
        // Másik nézet: üres képernyő, de mátrix megmarad
        for (let m = 0; m <= 4; m++) {
            for (let n = 0; n <= 4; n++) {
                visible[m][n] = false
            }
        }
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    if (hajok) {
        y += 1
        if (y > 4) {
            y = 0
            x += 1
            if (x > 4) {
                x = 0
            }
        }
        updateScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    hajok = !(hajok)
    updateScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (hajok) {
        // Ha már fixált pont, ne csináljunk semmit
        // Számoljuk meg, hány fixált LED van
        if (lkerako9tt[x][y]) {
            // Már fixálva, semmi teendő
            // Vagy más visszajelzés
            basic.showIcon(IconNames.Asleep)
            basic.pause(300)
        } else {
            for (let o = 0; o <= 4; o++) {
                for (let p = 0; p <= 4; p++) {
                    if (lkerako9tt[o][p]) {
                        count += 1
                    }
                }
            }
            if (count < 10) {
                lkerako9tt[x][y] = true
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(500)
            }
        }
        updateScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (hajok) {
        x += 1
        if (x > 4) {
            x = 0
            y += 1
            if (y > 4) {
                y = 0
            }
        }
        updateScreen()
    }
})
let count = 0
let y = 0
let x = 0
let visible: boolean[][] = []
let lkerako9tt: boolean[][] = []
let hajok = false
hajok = true
lkerako9tt = [
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
]
]
visible = [
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
],
[
false,
false,
false,
false,
false
]
]
basic.clearScreen()
updateScreen()
