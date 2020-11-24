class Pirate {
  constructor (name, job = "scallywag") {
    this.name = name
    this.job = job
    this.cursed = false
    this.booty = 0
  }

  robShip() {
    this.booty += 100
    return 'YAARRR!'
  }
}

module.exports = Pirate;
