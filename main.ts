let time1 = 0
let time2 = 0
let done = 0
let start = 0
RunComp.SetLightLevel()
radio.setGroup(1)
radio.setFrequencyBand(20)
radio.setTransmitPower(5)

input.onButtonPressed(Button.A, function() {
    done = 1
    radio.sendNumber(1)
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(Note.A, music.beat(BeatFraction.Whole))
    start = 1
})

input.onButtonPressed(Button.B, function() {
    basic.showNumber(time2 - time1)
})

input.onButtonPressed(Button.AB, function() {
    
})


radio.onReceivedNumber(function(receivedNumber: number) {
    done = 0
})

RunComp.OnLightDrop(function() {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    if(done === 1)
    {
        time1 = control.millis()
    }
    else if(done === 0)
    {
        time2 = control.millis()
    }

})
 
