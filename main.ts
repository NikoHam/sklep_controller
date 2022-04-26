radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 9) {
        fontana = fontana * -1
        if (fontana < 10) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
    }
})
let fontana = 0
radio.setGroup(1)
fontana = -1
let sprcha = -1
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        radio.sendNumber(8)
    }
})
