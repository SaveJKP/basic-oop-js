class User {
  #name;
  #password;
  //static prop  เป็ฯการเข้าถึง prop หรือ method ผ่าน class
  static type = "ผู้ใช้งานระบบ";
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
  // static method
  static showType() {
    console.log("ฉันเป็นผู้เข้าใช้งานระบบ");
  }
}

//สร้าง user
const user1 = new User("kong", 1234);
console.log(User.type);
User.showType();

