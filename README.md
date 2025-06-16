Week 1 - MongoDB Fundamentals Assignment

This project demonstrates fundamental and advanced MongoDB operations including database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing using a sample bookstore dataset.

## 🛠 Prerequisites

- Node.js and npm installed
- MongoDB installed locally **OR** access to a MongoDB Atlas cluster
- Clone this repository to your local machine
- Install dependencies:

```bash
npm install mongodb
📁 Project Structure
bash
Copy
Edit
.
├── insert_books.js        # Script to insert sample book data
├── queries.js             # CRUD and advanced query examples
├── aggregations.js        # Aggregation pipeline examples
├── indexing.js            # Indexing and performance analysis
└── README.md              # This file
✅ Task 1: Setup
Create a MongoDB database called plp_bookstore.

Run the insert_books.js script to insert sample book documents:

bash
Copy
Edit
node insert_books.js
✏️ Task 2: Basic CRUD Operations
Run:

bash
Copy
Edit
node queries.js
This script performs:

Finding books by genre, author, and year

Updating the price of a book

Deleting a book by title

🔍 Task 3: Advanced Queries
Also included in queries.js, covering:

Filtering by stock and year

Projection of selected fields

Sorting (ascending/descending by price)

Pagination using limit() and skip()

📊 Task 4: Aggregation Pipeline
Run:

bash
Copy
Edit
node aggregations.js
This script demonstrates:

Average price of books by genre

Author with the most books

Grouping books by publication decade

⚡ Task 5: Indexing and Performance
Run:

bash
Copy
Edit
node indexing.js
This script:

Creates indexes on title, and on author + published_year

Uses explain() to show performance before/after indexing