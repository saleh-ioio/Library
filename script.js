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
});

let form = document.getElementById('form');

let saveBookBtn = document.querySelector('#saveBook');

let bookNameInput = document.querySelector('#bookName');
let bookauthorInput = document.querySelector('#authorName');
let bookStatusInput = document.querySelector('#bookStatus');
let bookpagesNumInput = document.querySelector('#pagesNum');

let bookList = document.querySelector('.booklist');

saveBookBtn.addEventListener('click', function(event){
  event.preventDefault();
console.log('kljlj');
  if(form.checkValidity()){
  let card= document.createElement('div');
  card.classList += " bookCard";

  let name= document.createElement('h2');
  name.classList += " txtName";
  name.textContent = bookNameInput.value;

  let author = document.createElement('h2');
  author.classList += " txtauthor";
  author.textContent = bookauthorInput.value;

  let pageNum= document.createElement('h2');
  pageNum.classList += " txtPageNum";
  pageNum.textContent = bookpagesNumInput.value;

  let flex = document.createElement('div');
  flex.classList+= " flex";

  let delBtn = document.createElement('div');
  delBtn.classList+= " button deleteBtn";
  let delTxt = document.createElement('p');
  delTxt.textContent = 'Delete';
  delBtn.appendChild(delTxt);
  delBtn.addEventListener('click', ()=>{
    bookList.removeChild(card);
  })


  let statusBtn = document.createElement('div');
  statusBtn.classList+= " button statusBtn";
  let statusTxt = document.createElement('p');
  statusBtn.classList += bookStatusInput.checked ? ' read' : ' unread';
  statusTxt.textContent = bookStatusInput.checked ?  'read' : 'not read';
  statusBtn.appendChild(statusTxt);
  statusBtn.addEventListener('click', ()=>{
    if( statusTxt.textContent == 'read'){
      statusBtn.classList.remove('read');
      statusBtn.classList += ' unread';
      statusTxt.textContent = 'not read';
    }else{
      statusBtn.classList.remove('unread');
      statusBtn.classList += ' read';
      statusTxt.textContent = 'read';
    }
  });

  flex.appendChild(delBtn);
  flex.appendChild(statusBtn);

  card.appendChild(name);
  card.appendChild(author);
  card.appendChild(pageNum);
  card.appendChild(flex);

  bookList.append(card);

  }
})


