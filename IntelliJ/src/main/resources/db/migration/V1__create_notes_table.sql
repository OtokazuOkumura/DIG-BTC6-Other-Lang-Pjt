CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    notetext TEXT NOT NULL,
    lastupdatedtime TIMESTAMP NOT NULL
)