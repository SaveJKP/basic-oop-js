class User {
  #name;
  #password;
  constructor(n, p) {
    this.#name = n;
    this.#password = p;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ ${this.#name}, รหัสผ่าน ${this.#password}`);
  }
  set Name(newName) {
    this.#name = newName;
  }
  get Name() {
    return this.#name;
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
}

class Student extends User {
  #score;
  constructor(n, p, s) {
    super(n, p);
    this.#score = s;
  }
}

const user1 = new Teacher("ก้อง", 1234, "web dev");
//จะโชว์แค่ 2 พารามแรกเนื่องจากเป็น method ของ super class หรือ User
user1.showDetail();
const user2 = new Student("เซฟ", 1234, 100);
user2.showDetail();
