class User {
  #name;
  #password;
  //static prop database
  static database = [];
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
  static showType() {
    console.log("ฉันเป็นผู้เข้าใช้งานระบบ");
  }
  //Method addUser
  static addUser(newUser) {
    this.database.push(newUser);
  }
}

//สร้าง user
const user1 = new User("kong", 1234);
const user2 = new User("save", 1234);
const user3 = new User("aka", 1234);
//เก็บข้อมูล user
User.addUser(user1);
User.addUser(user2);
User.addUser(user3);
//แสดงข้อมูล user
User.database.forEach((user) => {
  user.showDetail();
});
