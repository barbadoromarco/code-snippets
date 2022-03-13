class HospitalEmployee {
  // Constructor
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  // Static method
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
  
  // Getters
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  // Method
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}


// Child class
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
