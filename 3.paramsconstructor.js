class User {
  name = "save";
  password = 1234;
  //parameter constructor ใช้เพื่อกำหนดค่า property ให้แก่ object แต่ละตัว
  constructor(n,p) {
    this.name = n; //this อ้างอิงไปที่ property เพื่อทำการเปลี่ยนค่า default ของ prop
    this.password = p;
  }
}
// เรียกใช้ constructor พร้อมใส่ค่า params
const user1 = new User("kong",1234);
console.log(user1.name)
console.log(user1.password)

const user2 = new User("eiei",4561);
console.log(user2.name);
console.log(user2.password);