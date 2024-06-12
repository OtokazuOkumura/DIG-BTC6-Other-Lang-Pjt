TRUNCATE TABLE notes RESTART IDENTITY;
INSERT INTO notes (notetext, lastupdatedtime) VALUES
(E'Databases\nwooohooo\n\nasdfasdf', '2024-06-11 18:00'),
(E'Express', '2024-06-11 17:30'),
(E'Groceries', '2024-06-10 0:00'),
(E'Tokyo restaurants', '2024-06-10 11:00'),
(E'Books to read', '2024-06-09 15:30');
