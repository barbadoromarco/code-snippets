class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'String') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    var randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}
