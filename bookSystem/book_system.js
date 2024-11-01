let books = [];

function addBook() {
    console.log("add book working..")
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button id = ${index} onclick="deleteBook()">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deleteBook() {

    // Get the button element that triggered the event
    const button = event.target;

    // Get the ID of the button and convert it to a number

    const index = parseInt(button.id);

    console.log( "buton id to delete =" + index);
    
    // Check if the index is within the range of the books array
    if (index >= 0 && index < books.length) {
        // Remove the book at the specified index
        books.splice(index, 1);
        console.log(`Book at index ${index} deleted.`);
        console.log(books); // Display updated books array
    } else {
        console.log("Invalid index.");
    }
    showbooks();
    // clearInputs();
}