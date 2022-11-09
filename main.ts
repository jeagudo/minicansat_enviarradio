input.onButtonPressed(Button.A, function () {
    enviar = true
    basic.showIcon(IconNames.Yes)
})
let enviar = false
enviar = false
basic.showIcon(IconNames.No)
radio.setGroup(1)
loops.everyInterval(1000, function () {
    if (enviar) {
        basic.showIcon(IconNames.Happy)
        radio.sendString("" + input.temperature() + "," + input.lightLevel() + "," + input.acceleration(Dimension.Y))
        basic.clearScreen()
    }
})
