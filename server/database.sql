CREATE DATABASE mytodo;

-- Serial=> ensures uniqueness of primary key when collection of records stored in table
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

