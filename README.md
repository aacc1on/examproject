build project 

npm i 
npm run dev ---> for developer mode
npm run start ---> for prodaction

CRUD Operations:
  Users: Register/Login, Profile Update
  Posts: POST /posts, GET /posts, etc.
Comments: POST /posts/:id/comments, GET /posts/:id/comments
  Post Categorization:
  Posts can have one or many categories and tags
  Support filtering: GET /posts?category=tech&tag=ai
Comments:
  Comments can be nested (reply to another comment)
  MongoDB recommended for easier nested structure

write env file 
  env.example
