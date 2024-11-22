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
  //method-setter
  setName(newName){
    this.#name = newName;
  }
  //method-getter
  getName(){
    return this.#name
  }
}
const user1 = new User("kong", 1234);
//เรียกใช้ setName
user1.setName("hacker");
//เรียกใช้ getName ให้แสดงเฉพาะชื่อ
console.log(user1.getName())
