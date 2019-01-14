USE readers_db;

SELECT * FROM books;

SELECT u.email, b.bookName FROM users u
INNER JOIN books b
ON u.id = b.UserId
WHERE u.id = 1;