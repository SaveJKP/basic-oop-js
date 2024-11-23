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
//สืบทอดคลาสใช้ extends เหมือนก็อปปี้ code จาก user มาใส่
class Teacher extends User {
}

class Student extends User {
}
//เรียกใช้ costructor จาก teacher
const user1 = new Teacher();
user1.showDetail();
//เรียกใช้ constructor จาก student
const user2 = new Student();
user2.showDetail();
