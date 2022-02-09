// Create a Rectangle class. Rectangle should have: length and width.
// It should have getters and setters for all fields.
// It should have getArea() method.
// It should have getPerimeter() method.
// It should have toString() method.
class Rectangle {

    constructor(length, width) {
      this._length = length;
      this._width = width;
    }
  
    get length() {
      return this._length;
    }
  
    set length(l) {
      this._length = l; 
    }

    
    get width() {
        return this._width;
      }
    
      set width(w) {
        this._width = w; 
      }
  
    getArea() {
      return this._length * this._width;
    }

    getParimeter() {
        return 2*(this._length + this._width);
    }

    toString() {
        return "length = " +this._length + " and width = "+ this._width;
    }
  }

//   Create an Employee class. Employee should have: id, firstName, lastName, position, salary, workingHours.
// It should have setters and getters for appropriate fields.
// It should have a method: getFullName().
// It should have a method: getAnnularSalary() which should be the total salary of the employee within a year.
// It should have a method: raiseSalary(percent), which increases the salary by the given percent and returns new salary.

class Employee {

    constructor(id, first, last, position, salary, workinghours) {
        this._id = id;
        this._firstName = first;
        this._lastName = last;
        this._position = position;
        this._salary = salary;
        this._working = workinghours;
    }
  
    //id
    get id() {
      return this._id;
    }
  
    set id(id) {
      this._id = id; 
    }

    //name
    get firstName() {
        return this._firstName;
      }

    get lastName() {
        return this._lastName;
      }
    
    set firstName(name) {
        this._firstName = name; 
    }
    
    set lastName(name) {
        this._lastName = name;  
    }

    //postision
    get position() {
        return this._position;
      }
    
      set position(pos) {
        this._position = pos; 
      }
      
    //salary
    get salary() {
        return this._salary;
      }
    
      set salary(sal) {
        this._salary = sal; 
      }
    
      //work
        get hours() {
        return this._working;
      }
    
      set hours(h) {
        this._working = h; 
      }
  
      getFullName(){
          return this._firstName + " " + this._lastName;
      }

      getAnnualSalary(){
          return 12*this._salary;
      }

      raiseSalary(rate){
        this.salary = this.salary * (1 + (rate / 100));
        return this._salary;
      }
  }

//   Create an Author class and a Book class.
// Author should have: name, email, gender. 
// It should have appropriate getters accnd setters.
// It should have a toString method.

// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.

class Author{
    constructor(name, email, gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name(){
        return this._name;
    }

    set name(n){
        this._name = n;
    }

    get email(){
        return this._email;
    }

    set email(e){
        this._email = e;
    }

    get gender(){
        return this._gender;
    }

    set gender(g){
        this._gender = g;
    }

    toString(){
        return "This authors name is "+this._name;
    }
}

class Book{
    constructor(title, author, price, quantity){
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title(){
        return this._title;
    }

    set title(title){
        this._title = title;
    }

    get author(){
        return this._author;
    }

    set author(author){
        this._author = author;
    }

    get price(){
        return this._price;
    }

    set price(price){
        this._price = price;
    }

    get quantity(){
        return this._price;
    }

    set quantity(q){
        this._quantity = q;
    }

   getProfit(){
       return this._price * this._quantity;
   }

   toString(){
       return "This book's title is " + this._title;
   }
}

// Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not, comparing all fields.
// It should have toString method.

class Account{
    constructor(id, name, balace){
        this._id = id;
        this._name = name;
        this._balance = balace;
    }

    set balace(balance){
        this._balance = this.balace;
    }

    set name(name){
        this._name = name;
    }

    get balace(){
        return this.balace;
    }

    get name(){
        return this._name;
    }

    get id(){
        return this._id;
    }

    credit(amount){
        this.balace +=amount;
        return this.balace;
    }

    debit(amount){
        this.balace -=amount;
        return this.balace;
    }

    transferTo(anotherAccount, amount){
        if (amount <= this.balace){
            anotherAccount.creadit(amount);
            return this.debit(amount);
        }
        else{
            return "Amount exceeded balance.";
        }
    }

    static identifyAccounts(accountFirst, accountSecond){
        return (accountFirst.id == accountSecond.id &&
                accountFirst.name == accountSecond.name &&
                accountFirst.balace == accountSecond.balace);
    }

    toString(){
        return "Account " + this.name +"has " + this.balace +"$ at its disposal.";
    }
}

// Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().

// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters. 
// It should have method: passExam(program, grade). Student should contain the data about its programs and exams. passExam will update that data, so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.

// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters. 
// It should have a toString method.

class Person{
    constructor(firstName, lastName, gender,age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(name){
        this._firstName = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(name){
        this._lastName = name;
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age = age;
    }

    get gender(){
        return this._gender;
    }

    set gender(gender){
        this._gender = gender;
    }

    toString(){
        return this._firstName + " " + this._lastName;
    }
}

class Student extends Person{
    #passedGrades = [];
    
    constructor(firstName, lastName, program, year, fee){
        this._firstName = firstName;
        this._lastName = lastName;
        this._prog = program;
        this._year = year;
        this._fee = fee;
    }

    get year(){
        return this._year;
    }

    set year(year){
        this._year = year;
    }

    get program(){
        return this._prog;
    }

    set program(program){
        this._prog = program;
    }

    passExam(program, grade){
        //collect data
        for(let i=0; i < this._prog.length; i++)
        {
            if(this._prog[i] == program)
            {
                this.#passedGrades[i] = grade;
                break;
            }
        }

        //check if all is passed
        let allPassed = true;
        for(let i=0; i < this.#passedGrades.length; i++)
        {
            if(this.#passedGrades[i] == 'undefined' || this.#passedGrades[i] < 50){
                allPassed = false;
                break;
            }
        }

        // update year info
        if(allPassed){
            this._year++;
        }
    }

    toString(){
        return "I am a student: " + this._firstName + " " + this._lastName;
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, program, pay){
        this._firstName = firstName;
        this._lastName = lastName;
        this._prog = program;
        this._pay = pay;
    }

    get pay(){
        return this._pay;
    }

    set pay(pay){
        this._pay = pay;
    }

    get program(){
        return this._prog;
    }

    set program(program){
        this._prog = program;
    }

    toString(){
        return "I am a teacher: " + this._firstName + " " + this._lastName;
    }
}
 

// Problem 6
class Clock{ 
    constructor(template){
        this._template = template;
    }
    
    set timer(timer){
        this._timer = timer;
    }

    get timer(){
        return this._timer;
    }

    render(){
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10){
            hours = '0' + hours;
        } 
        
        let mins = date.getMinutes();
        if (mins < 10){
            mins = '0' + mins;
        }
      
        let secs = date.getSeconds();
        if (secs < 10){
            secs = '0' + secs;
        }      
        debugger;
        let output = this._template.replace('h', hours).replace('m', mins).replace('s', secs);
        
       console.log(output);
    }
    
    stop(){
     clearInterval(this._timer);
    }
    
    start(){
     this.render();
     this._timer = setInterval(this.render.bind(this), 1000);
    }
  }

  let clock = new Clock('h:m:s');
    clock.start();

