var fs = require("fs");

fs.unlink('books.txt', (err) => {
    if (err) throw err;
    console.log('books.txt was deleted');
});