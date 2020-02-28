class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;

    }
    static countUser(){
        console.log("There are 69 many users");
    }
    register(){
        console.log(this.username+' is now registered');
    }
}
let bob=new User('bob','bob@email.com','bob123');
bob.register();
User.countUser();


class Member extends User{
    constructor(username,email,password,memberpackage){
        super(username,email,password);
        this.memberpackage=memberpackage;
    }
    getPackage(){
        console.log(this.username+" is subscriber to the "+this.memberpackage+' Package')
    }
}
let mike=new Member('mike','mike@gmail.com','mike123','standard');
mike.getPackage();

mike.register();
Member.countUser();