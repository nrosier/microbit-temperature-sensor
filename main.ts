let voltage = 0
let temperatuur = 0
basic.forever(function () {
    voltage = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    3300
    )
    temperatuur = (voltage - 500) / 10
    basic.showNumber(Math.round(temperatuur))
})
