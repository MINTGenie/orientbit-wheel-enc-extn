input.onButtonPressed(Button.A, function () {
    OrientBit.resetWheelRotCnt()
})
let list: number[] = []
OrientBit.enableEncoder(DigitalPin.P1, DigitalPin.P2, 16)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
basic.forever(function () {
    list = OrientBit.getRotationCount()
    serial.writeNumbers(list)
    basic.pause(1000)
})
control.inBackground(function () {
    while (true) {
        if (list[0] == 9 || list[2] == 9) {
            maqueen.motorStop(maqueen.Motors.All)
        }
        basic.pause(100)
    }
})
