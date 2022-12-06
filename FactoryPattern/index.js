const CreateUser = (fname, lname, email) => ({
  fname: fname,
  lname: lname,
  email: email,
  getFullName: function () {
    return `${this.fname} ${this.lname}`;
  },
});

let user1 = CreateUser("John", "travolta", "jt@jt.com");
console.log(user1.getFullName());
