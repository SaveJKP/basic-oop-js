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
  //Accesors set
  set Name(newName) {
    this.#name = newName;
  }
  //Accesors get
  get Name() {
    return this.#name;
  }
}
const user1 = new User("kong", 1234);
//set
user1.Name = "eiei";
//get
console.log(user1.Name);
