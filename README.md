# Blog API

## live url

`https://blog-api-284727859074.us-central1.run.app`

## Total 8 Endpoints

- `GET /blog`: Get all blog posts.
- `GET /blog/:id`: Get a single blog post by ID.
- `POST /blog`: Create a new blog post.
- `PUT /blog/:id`: Update a blog post by ID.
- `DELETE /blog/:id`: Delete a blog post by ID.
- `POST /blog/:id/comment`: Add a comment to a blog post by ID.
- `POST /user/signup`: Sign up a new user.
- `POST /user/login`: Login a user.

## Example Requests

### Create a Blog Post

```
curl  -X POST \
  'http://localhost:8000/blog' \
  --header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1NWJkNzE5LTIzNDYtNGIxNS1iMGJmLTkyNGUxYTQ4NTA0OCIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJpYXQiOjE3Mzk1MDY3NTEsImV4cCI6MTczOTU5MzE1MX0.uoDAAuCjhKsr0aB-l6DRr110dD-MWGFX3Tel61Wgipo' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "title": "asdfasdf",
  "content": "asdfasdf"
}'
```

### Get All Blog Posts

```
curl -X GET \
  'http://localhost:8000/blog/?limit=5&page=1'
```

### Get a Single Blog Post

```
curl  -X GET \
  'http://localhost:8000/blog/b916b300-17ce-47c6-8082-dbf1431a31cc'
```

### Update a Blog Post

```
curl  -X PUT \
  'http://localhost:8000/blog/b916b300-17ce-47c6-8082-dbf1431a31cc' \
  --header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1NWJkNzE5LTIzNDYtNGIxNS1iMGJmLTkyNGUxYTQ4NTA0OCIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJpYXQiOjE3Mzk1MDY5MDgsImV4cCI6MTczOTU5MzMwOH0.Kkn7CFQwZYsM2Yc_w6c0qgBOzCPUlGZWPr_4B90JcRw' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "title":"ok",
  "content":"ok"
}'
```

### Delete a Blog Post

```
curl  -X DELETE \
  'http://localhost:8000/blog/b916b300-17ce-47c6-8082-dbf1431a31cc'
```

### Add a Comment to a Blog Post

```
curl  -X POST \
  'http://localhost:8000/blog/876a0e1c-2101-44b3-9cba-b56d32a3b12c/comment' \
  --header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1NWJkNzE5LTIzNDYtNGIxNS1iMGJmLTkyNGUxYTQ4NTA0OCIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJpYXQiOjE3Mzk1MDY1NjUsImV4cCI6MTczOTU5Mjk2NX0.TRbm-tydCPCLGjwji9HeQLtToQFTWFFH42bZryHdzuo' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "comment": "asdfasdf"
}'
```

### Login a New User

```
curl  -X POST \
  'http://localhost:8000/user/login' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "email":"d@gmail.com",
  "password":"asdf"
}'
```

### Sign Up a New User

```
curl  -X POST \
  'http://localhost:8000/user/signup' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "email":"dd@gmail.com",
  "password":"asdf"
}'
```
