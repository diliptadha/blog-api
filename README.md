# Blog API

## Total 6 Endpoints

- `GET /blogs`: Get all blog posts.
- `GET /blogs/:id`: Get a single blog post by ID.
- `POST /blogs`: Create a new blog post.
- `PUT /blogs/:id`: Update a blog post by ID.
- `DELETE /blogs/:id`: Delete a blog post by ID.
- `POST /blogs/:id/comment`: Add a comment to a blog post by ID.

## Example Requests

### Create a Blog Post

```
curl  -X POST \
  'http://localhost:8000/blogs/' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "title": "blog title",
  "content": "blog content"
}'
```

### Get All Blog Posts

```
curl -X GET \
  'http://localhost:8000/blogs/?limit=5&page=1'
```

### Get a Single Blog Post

```
curl  -X GET \
  'http://localhost:8000/blogs/b916b300-17ce-47c6-8082-dbf1431a31cc'
```

### Update a Blog Post

```
curl  -X PUT \
  'http://localhost:8000/blogs/b916b300-17ce-47c6-8082-dbf1431a31cc' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "title": "asdf",
  "content": "asdfasdfsadf"
}'
```

### Delete a Blog Post

```
curl  -X DELETE \
  'http://localhost:8000/blogs/b916b300-17ce-47c6-8082-dbf1431a31cc'
```

### Add a Comment to a Blog Post

```
curl  -X POST \
  'http://localhost:8000/blogs/b916b300-17ce-47c6-8082-dbf1431a31cc/comment' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "comment": "asdfasdf"
}'
```
