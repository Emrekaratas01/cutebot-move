input.onButtonPressed(Button.A, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    cuteBot.motors(50, 50)
    basic.pause(1000)
    cuteBot.motors(0, 0)
})
input.onButtonPressed(Button.AB, function () {
    cuteBot.motors(50, 0)
    basic.pause(6000)
    cuteBot.motors(0, 0)
})
input.onButtonPressed(Button.B, function () {
    cuteBot.motors(-50, -50)
    basic.pause(1000)
    cuteBot.motors(0, 0)
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x7f00ff)
})
