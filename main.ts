radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 9) {
        fontana = fontana * -1
        if (fontana < 0) {
            pins.digitalWritePin(DigitalPin.P11, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P11, 1)
        }
    }
    if (receivedNumber == 10) {
        sprcha = sprcha * -1
        if (sprcha < 0) {
            pins.digitalWritePin(DigitalPin.P12, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 1)
        }
    }
})
let sprcha = 0
let fontana = 0
radio.setGroup(1)
fontana = -1
sprcha = -1
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        radio.sendNumber(1)
        radio.sendNumber(6)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        radio.sendNumber(2)
        radio.sendNumber(7)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendNumber(3)
        radio.sendNumber(8)
    }
})
