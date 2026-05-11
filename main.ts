fwdSensors.initializeLcd()
/**
 * On line 1, display the text: "Line 1"
 * 
 * On line 2, display the text: "Line 2"
 * 
 * If your string is too long, ">16 chars" will display instead of your text.
 */
/**
 * Modify & Create: If you press a button, display a different message.
 */
basic.forever(function () {
    fwdSensors.lcd1.printLineString("Line 1", 1)
    fwdSensors.lcd1.printLineString("Line 2", 2)
})
