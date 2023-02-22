class EmployeePayrollData {
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = this.id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    const NAME_REGEX = RegExp(
      "^[A-Z]{1}[a-zA-Z\\s]{2,}([ ][A-Z]{1}[a-z]{0,})?$",
    );
    if (NAME_REGEX.test(name)) this._name = name;
    else throw "Incorrect Name!";
  }

  get profile() {
    return this._profile;
  }
  set profile(profile) {
    this._profile = profile;
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }

  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    let now = new Date();
    if (startDate > now) throw "Invalid Date(Future Date)";
    let difference = Math.abs(now.getTime() - startDate.getTime());
    if (difference / (1000 * 60 * 60 * 24) > 30) {
      throw "Start Date should not be beyond 30 days.";
    }
    this._startDate = startDate;
  }

  // get department() {
  //   if (department.length != 0) {
  //     this._department = department;
  //   } else throw "No Department Selected!";
  // }
  // set department(department) {
  //   this._department = department;
  // }
  get department() {
    return this._department;
  }
  set department(department) {
    this._department = department;
  }

  get note() {
    returnthis._note;
  }
  set note(note) {
    this._note = note;
  }

  toString() {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const employeeDate = !this.startDate
      ? "undefined"
      : this.startDate.toLocaleDateString("en-US", options);
    return (
      "[ id: " + this.id +
      ", name: " + this.name +
      ", gender: " + this.gender +
      ", profile: " + this._profile +
      ", salary: " + this.salary +
      ", startDate: " + this.department +
      ", department: " + this.department +
      ", note: " + this._note + " ]" + "\n"
    );
  }
}
