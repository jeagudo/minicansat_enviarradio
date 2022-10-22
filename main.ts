input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
radio.setGroup(1)
loops.everyInterval(1000, function () {
    if (logging) {
        basic.showIcon(IconNames.Happy)
        radio.sendString("" + input.temperature() + " " + input.lightLevel() + " " + input.acceleration(Dimension.Y))
        basic.clearScreen()
    }
})
