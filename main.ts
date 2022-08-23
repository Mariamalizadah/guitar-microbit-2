radio.onReceivedNumber(function (receivedNumber) {
    let receivenumber = 0
    if (receivenumber == 0) {
        midi.playTone(262, music.beat(BeatFraction.Whole))
    } else if (false) {
        if (receivenumber == 1) {
            midi.playTone(349, music.beat(BeatFraction.Whole))
        }
    } else {
        if (receivenumber == 2) {
            midi.playTone(440, music.beat(BeatFraction.Whole))
        }
    }
})
midi.useRawSerial()
radio.setGroup(50)
basic.forever(function () {
	
})
