class User {
  //Access Modifier-Public
  name = "save";
  password = 1234;
  constructor(n, p) {
    this.name = n;
    this.password = p;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ ${this.name}, รหัสผ่าน ${this.password}`);
  }
}
const user1 = new User("kong", 1234);
//สามารถเปลี่ยนแปลงค่าภายนอกได้
user1.name = "hacker"
user1.password = 555555
user1.showDetail()
