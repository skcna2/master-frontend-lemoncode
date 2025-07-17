console.log("************** DELIVERABLE 04 *********************");

type Book = {
  title: string;
  isRead: boolean;
};

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((b) => b.title === titleToSearch);
  return book ? book.isRead : false;
}

// function isBookRead2(books: Book[], titleToSearch: string): boolean {
//   for (const book of books) {
//     if (book.title === titleToSearch) {
//       return book.isRead;
//     }
//   }
//   return false; // no encuentra el libro
// }

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
