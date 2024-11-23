class User {
  //Access modifier Protected สืบทอด prop ให้ลูกได้
  _name;
  #password;
  constructor(n, p) {
    this._name = n;
    this.#password = p;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ ${this._name}, รหัสผ่าน ${this.#password}`);
  }
}
class Teacher extends User {
  #course;
  constructor(n, p, c) {
    super(n, p);
    this.#course = c;
  }
  //สร้าง overriding method เป็นการสร้าง method ชื่อเหมือน super class แต่การทำงานด้านในแตกต่างกัน ถ้าไม่สร้างก็จะเป็นการใช้ method ของ super class
  showDetail() {
    console.log("ฉันเป็นครู"+this._name + "สอนวิชา" + this.#course);
  }
}

class Student extends User {
  #score;
  constructor(n, p, s) {
    super(n, p);
    this.#score = s;
  }
  showDetail() {
    console.log("ฉันเป็นนักเรียน" + this._name + "สอบได้" + this.#score);
  }
}

const user1 = new Teacher("ก้อง", 1234, "web dev");
user1.showDetail();
const user2 = new Student("เซฟ", 1234, 100);
user2.showDetail();
