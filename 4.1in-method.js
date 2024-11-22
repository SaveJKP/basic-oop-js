class User {
  name = "save";
  password = 1234;
  constructor(n, p) {
    this.name = n;
    this.password = p;
  }
  //method
  showDetail() {
    console.log(`ชื่อผู้ใช้ ${this.name}, รหัสผ่าน ${this.password}`);
  }
}
const user1 = new User("kong", 1234);
user1.showDetail() //นอกคลาส object.method

const user2 = new User("eiei", 4561);
user2.showDetail();
