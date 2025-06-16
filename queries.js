//QUERIES RAN IN MONGODB 

//--------------------TASK 2: Basic CRUD Operations --------------------

// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

//Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 20.00 } }
)

//Delete a book by its title
db.books.deleteOne({ title: "The Alchemist" })


//--------------------TASK 3: Advanced Queries --------------------

//Find books in stock AND published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

//Using projection to return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)

//Sort books by price

  //a) Ascending order
db.books.find().sort({ price: 1 })
  //b) Descending order
db.books.find().sort({ price: -1 })

//Pagination using limit() and skip()

//a) First 5 books
db.books.find().limit(5)    
//b) Next 5 books (skipping the first 5)
db.books.find().skip(5).limit(5)


//--------------------TASK 4: Aggregation Pipeline --------------------

//Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])

//Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

//Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

//--------------------TASK 5:  Indexing --------------------

//Create an index on the title field
db.books.createIndex({ title: 1 })

//Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

//Use explain() to show performance improvement
db.books.find({ title: "The Alchemist" }).explain("executionStats")