const myLibrary = [];

class Book{
 constructor(name, outher, pageNum){
    this.name = name;
    this.outher = outher;
    this.pageNum = pageNum;
 }   

}

function addBookToLibrary(name, outher, pageNum){

  let book = new Book(name, outher, pageNum);
  myLibrary.push(book);
}
