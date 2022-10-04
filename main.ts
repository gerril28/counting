input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        counter += 1
        basic.showNumber(counter)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 100; index++) {
        counter = counter + 1
    }
    basic.showNumber(counter)
})
let counter = 0
counter = 0
basic.showNumber(counter)
basic.forever(function () {
	
})
