input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # # #
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("¡GRACIAS!")
    basic.showIcon(IconNames.Heart)
})
basic.showString("COLEGAS PULSE EL BOTON A")
music.playMelody("A F E F D G E F ", 125)
