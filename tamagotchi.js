// Create class below
class Tamagotchi {
    constructor(name, energy, full, mood, sick, rehomed) {
      this.name = name;
      this.energy = energy || 9;
      this.full = full || 8;
      this.mood = mood || 6;
      this.sick = sick || false;
      this.rehomed = rehomed || false;
    }
    greet() {
      `Hello I'm ${this.name}`;
    }
    status() {
      console.log(`My mood is: ${this.mood}
      I am this full: ${this.full}
      My energy is: ${this.energy}
      ${this.sick ? "I am sick" : "I am not sick"}`);
    }
    eat() {
      this.full += 2;
      this.energy -= 1;
      this.full > 10 ? (this.sick = true) : null;
    }
    medicate() {
      if (this.sick) {
        this.sick = false;
        this.full = 9;
        this.energy -= 3;
      } else {
        console.log("refusal to take medicine");
        this.energy -= 1;
      }
    }
    play() {
      if (this.sick) {
        this.mood -= 1;
        this.energy -= 1;
      } else if (this.mood > 9) {
        this.energy -= 2;
        this.full -= 1;
      } else if (this.energy <= 3) {
        console.log("I am too tired to play");
        this.energy -= 1;
      } else {
        this.mood += 2;
        this.energy -= 1;
        this.full -= 1;
      }
    }
    sleep() {
      this.energy += 4;
      this.full -= 3;
    }
    timePasses() {
      if (this.sick) {
        this.mood -= 3;
        this.full -= 2;
        this.energy -= 2;
      } else {
        this.mood -= 2;
        this.energy -= 1;
        this.full -= 1;
      }
    }
    badGuardian() {
      if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
        this.rehomed = true;
      }
    }
  }
// Do not edit below this line
module.exports = Tamagotchi;
