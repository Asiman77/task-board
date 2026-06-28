
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS members;


CREATE TABLE members (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'To Do',    
    priority VARCHAR(50) DEFAULT 'Medium', 
    member_id BIGINT REFERENCES members(id) ON DELETE SET NULL, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


INSERT INTO members (name) VALUES 
('Asiman'), 
('Nuray'), 
('Elçin'), 
('Rəvan'), 
('Sevinc');