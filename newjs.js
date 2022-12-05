class Animal {
    constructor(color = "yellow", energy = 100){
        this.color = color,
        this.energy = energy
    }
    isActive() {
        if(this.energy > 0){
            this.energy -= 20
            console.log( 'Energy is decreasing, currently at:', this.energy)
        } else if(this.energy <= 0){
            this.sleep()
            console.log( 'Energy is increasing, currently at:', this.energy)
        }
    }
    sleep() {
        this.energy += 20;
        console.log(this.energy)

    }
    getColor(){
        console.log(this.color)
    }
}
class Cat extends Animal {
    constructor(sound = "pur", canJumpHigh = true, canClimbTrees = true, color, energy) { 
        super(color, energy),
        this.sound = sound,
        this.canClimbTrees = canClimbTrees,
        this.canJumpHigh = canJumpHigh
    }
    makeSound(){
        console.log(this.sound)
    }
}
class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class HouseCat extends Cat{
    constructor(housCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.housCatSound = housCatSound
    }
    makeSound(option){
        if(option){
            super.makeSound()
            
        }console.log(this.housCatSound)
    }
}
class Tiger extends Cat{
    constructor(tigerSound = "rrrrr", sound, canJumpHigh, canClimbTrees, color, energy ){
        super(sound, canJumpHigh, canClimbTrees, color, energy),
        this.tigerSound = tigerSound
    }
    makeSound(option){
        if(option){
            super.makeSound()
            
        }console.log(this.tigerSound)
    }
}
class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        else if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
let pironPirot = new Parrot(true)
let jinx = new Parrot(false)
jinx.makeSound("chr")

