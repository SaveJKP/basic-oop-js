class User {
  //property
  name = "save";
  password = 1234;
  //default constructor ใช้เพื่อกำหนดค่าเริ่มต้น property ให้แก่ object แต่ละตัว
  constructor() {
    console.log("เรียกใช้งาน constructor");
  }
}

const user1 = new User();
const user2 = new User();
