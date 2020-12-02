class Magician {
  constructor ({name: name, topHat: topHat = true}) {
    this.name = name
    this.topHat = topHat
    this.confident = false
    this.count = 0
  }

  incantation(spell) {
    return spell.toUpperCase() + "!";
  }

  cast() {
    this.count += 1
    if (this.count >= 3) {
      this.confident = true
    }

    if (this.topHat) {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if (!this.confident) {
      return 'Oh no! Practice more before attempting this trick!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
}

module.exports = Magician;
