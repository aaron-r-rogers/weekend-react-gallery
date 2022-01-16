CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "title" varchar(60) not null,
    "description" varchar(255),
    "path" varchar(255) not null,
    "likes" integer DEFAULT 0
);
INSERT INTO "gallery" 
	("id", "title", "description", "path", "likes") 
VALUES
    (DEFAULT, 'Chair', 'Photo of a chair I restored for a friend last year.', 'images/chair.jpg', DEFAULT),
    (DEFAULT, 'Frances', 'This is my daughter, Frances. She loves to perform.', 'images/frances.jpg', DEFAULT),
    (DEFAULT, 'Gondola', 'Frances on the gondola in Lutsen last year.', 'images/gondola.jpg', DEFAULT),
    (DEFAULT, 'Loggers', 'About to tee off at a course I frequent, Loggers Trail.', 'images/loggers.jpg', DEFAULT),
    (DEFAULT, 'Northern', 'Frances enjoying a treat in front of Northern Waters in Duluth.', 'images/northern.jpg', DEFAULT),
    (DEFAULT, 'Tree', 'The family with our freshly harvested tree. November 2020.', 'images/tree.jpg', DEFAULT);