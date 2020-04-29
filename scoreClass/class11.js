// Define your Book class here:
class Book{
    constructor(title,author,ISBN,numberOfPages){
    this.title = title;
    this.author = author;
    this.ISBN =  ISBN;
    this.numberOfPages =  numberOfPages;
    //this.bookDiscarded = bookDiscarded;
  }
  }
  // Define your Manual and Novel classes here:
  class Manual extends Book{
    constructor(title,author,ISBN,numberOfPages,copyRightDate,bookDiscarded ){
      super(title,author,ISBN,numberOfPages);
      this.bookDiscarded=bookDiscarded;
      this.copyRightDate = copyRightDate;
      this.check = function(){
        var d = new Date();
        var n = d.getFullYear();
        if((n - copyRightDate) > 5){
         return "throw it into empty spaces to become debris.";
        }else{
          return "no";
        }
      };
    }
  }
  class Noval extends Book{
    constructor(title,author,ISBN,numberOfPages,timesBookCheckedOut,bookDiscarded){
      super(title,author,ISBN,numberOfPages);
      this.timesBookCheckedOut = timesBookCheckedOut;
      this.bookDiscarded=bookDiscarded;
      this.checkDiscard = function(){
        if(timesBookCheckedOut > 100){
         return "bookDiscarded";
        }else{
          return `The number of times the book has been checked out = ${timesBookCheckedOut}.`;
        }
        
      };
    }
  }
  
  
  
  // Declare the objects for part 2 here:
  
  let manual = new Manual("Top Secret Shuttle Building Manual","Redacted",0,1147,2013);
  let noval = new Noval("Pride and Prejudice","Jane Austen",1111111111111,432,32);
  
  
  
  // Code part 3 here:
  manual.check();
  
  noval.checkDiscard();