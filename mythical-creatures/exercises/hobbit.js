class Hobbit {
  constructor (name) {
    this.name = name
    this.age = 0
    this.adult = false
    this.old = false
  }

  celebrateBirthday() {
    this.age += 1

    if (this.age >= 101) {
      this.old = true
    } else if (this.age >= 33) {
      this.adult = true
    }
  }

  get hasRing() {
    return this.ringEval()
  }

  ringEval() {
    if (this.name == 'Frodo') {
      return true
    } else {
      return false
    }
  }
}

module.exports = Hobbit;
