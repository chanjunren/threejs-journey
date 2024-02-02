const hitSound = new Audio('/sounds/hit.mp3')

export function playHitSound(collision) {
    // If sound is playing, need to reset (otherwise another hit sound won't be triggered)
    hitSound.currentTime = 0
    hitSound.play()
}