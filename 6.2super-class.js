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
    //ต้องมีพารามของ super เหมือนแม่
  constructor(n, p) {
    super(n, p); //constructor แม่
    console.log("ฉันเป็นคุณครู");
  }
}

class Student extends User {
  constructor(n, p) {
    super(n, p);
    console.log("ฉันเป็นนักเรียน");
  }
}

const user1 = new Teacher("ก้อง",1234);
user1.showDetail();
const user2 = new Student("อิอิ", 1234);
user2.showDetail();