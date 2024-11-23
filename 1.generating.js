//สร้าง class
class User {
  // เก็บ property + ให้ค่า default
  name = "Sav";
  password = 1234;
}
//สร้าง object
const user1 = new User();
//การเรียกใช้ property 
console.log(user1.name)
console.log(user1.password)

const user2 = new User();
//การเข้าถึงเพื่อเปลี่ยนค่า property
user1.name = "kong"
user1.password = 7890   
console.log(user2.name);
console.log(user2.password);
