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

let bookForm= document.querySelector('.BookForm');
let addBookBtn = document.querySelector('.addButton');
let cancelBtn = document.querySelector('#cancel');

cancelBtn.addEventListener('click', ()=>{
  bookForm.classList.remove('bookformStyle');
  addBookBtn.classList.remove('hide');

});

addBookBtn.addEventListener('click',()=>{
  if(bookForm.classList.contains('bookformStyle')){
  bookForm.classList.remove('bookformStyle');
  addBookBtn.classList.remove('hide');
  }
else{
  bookForm.classList += ' bookformStyle';
  addBookBtn.classList += ' hide';
}
})

