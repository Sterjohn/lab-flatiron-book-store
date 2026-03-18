const bookStore = {
  name: 'Flatbooks Technical Books',
  books: [
    {
      id: 1,
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
      id: 2,
      title: 'JavaScript & JQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/315RWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51310WtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
      id: 4,
      title: 'JavaScript: The Definitive Guide',
      author: 'David Flanagan',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg'
    },
    {
      id: 5,
      title: "You Don't Know JS",
      author: 'Kyle Simpson',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5HBu7fUL._SX331_BO1,204,203,200_.jpg'
    },
    {
      id: 6,
      title: 'Cracking the Coding Interview',
      author: 'Gayle Laakmann McDowell',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
    }
  ]
};
 
// Select the title element and save as bookStoreTitle
const bookStoreTitle = document.getElementById('header');
 
// Change textContent to match the bookstore name
bookStoreTitle.textContent = bookStore.name;
 
// Remove the example placeholder list item
document.getElementById('delete-this').remove();
 
// Select the book list ul
const bookList = document.getElementById('book-list');
 
// Loop through every book in the bookStore object
bookStore.books.forEach(book => {
 
  // Create elements for each book
  const bookContainer = document.createElement('li');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  const bookImage = document.createElement('img');
 
  // Set textContent and src to match the book object
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.imageUrl;
  bookImage.alt = book.title;
 
  // Style the container
  bookContainer.classList.add('list-li');
 
  // Append bookTitle, bookAuthor, and bookImage to bookContainer
  bookContainer.appendChild(bookImage);
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
 
  // Append bookContainer to bookList
  bookList.appendChild(bookContainer);
 
});