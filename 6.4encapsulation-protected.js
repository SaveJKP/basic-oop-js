class User {
  //Access Modifier-Protected สืบทอด prop ให้ลูกได้
  _name;
  #password;
  constructor(n, p) {
    this._name = n;
    this.#password = p;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ ${this._name}, รหัสผ่าน ${this.#password}`);
  }
  set Name(newName) {
    this._name = newName;
  }
  get Name() {
    return this._name;
  }
  static showType() {
    console.log("ฉันเป็นผู้เข้าใช้งานระบบ");
  }
}
class Teacher extends User {
  #course;
  constructor(n, p, c) {
    super(n, p);
    this.#course = c;
  }
  showDetail() {
    console.log(this._name + this.#course);
  }
}

class Student extends User {
  #score;
  constructor(n, p, s) {
    super(n, p);
    this.#score = s;
  }
  showDetail() {
    console.log(this._name + this.#score);
  }
}

const user1 = new Teacher("ก้อง", 1234, "web dev");
user1.showDetail();
const user2 = new Student("เซฟ", 1234, 100);
user2.showDetail();
