// Define your Book class here:

class Book{
	constructor(title,author,copyRightDate,ISBN,numberOfPages,bookCheckedOut,bookDiscarded) {
		this.title = title;
    this.author=author;
    this.copyRightDate=copyRightDate;
    this.ISBN=ISBN;
    this.numberOfPages=numberOfPages;
    this.bookCheckedOut=bookCheckedOut;
    this.bookDiscarded=bookDiscarded;
	}
}
// Define your Manual and Novel classes here:

class Noval extends Book{
    constructor(title,author,copyRightDate,ISBN,numberOfPages,bookCheckedOut,bookDiscarded,check){
      super();
		this.title = title;
    this.author=author;
    this.copyRightDate=copyRightDate;
    this.ISBN=ISBN;
    this.numberOfPages=numberOfPages;
    this.bookCheckedOut=bookCheckedOut;
    this.bookDiscarded=bookDiscarded;
    this.check= function(){
      if((yearGet() - this.copyRightDate)>5){
        throw ("throw it into empty space to become debris.");
      }
      
    }
  }
}
class Manual extends Book{
  constructor(title,author,copyRightDate,ISBN,numberOfPages,bookCheckedOut,bookDiscarded){
    super();
    this.title = title;
    this.author=author;
    this.copyRightDate=copyRightDate;
    this.ISBN=ISBN;
    this.numberOfPages=numberOfPages;
    this.bookCheckedOut=bookCheckedOut;
    this.bookDiscarded=bookDiscarded;
    
    }
  }


// Declare the objects for exercises 2 and 3 here:

let noval = new Noval('Pride and Prejudice','Jane Austen',1813,1111111111111,432,32,'No');
 let manual = new Manual('Top Secret Shuttle Building Manual','Redacted',2013,0000000000000,1147,1,'No');
console.log(noval);
console.log(check());
console.log(manual);
// Code exercises 4 & 5 here:
