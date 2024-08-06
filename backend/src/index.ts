import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Ramu')
})

app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})


app.put('/api/v1/blog', (c) => {
  return c.text('Hello /api/v1/blog!')
})


export default app



/*


backend will pick database from wrangler.toml 





prisma connection pool url : which will be used in node js application

DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZGE0MzQ3YjctMzBjOC00MGNlLTg0ZDktZDliYjUxOGQ3YWE2IiwidGVuYW50X2lkIjoiMTlkMTZmYTljZjdlZDUxOGQ0YmQzNmRiYTRiMjMyNzg2NjA0MmQ3Nzg2OWZkMDgxNWQxYzM0NzBkZWE2OTE4YSIsImludGVybmFsX3NlY3JldCI6IjI1YTQ5Zjg3LWVkMGQtNDhlZi1hNzk5LTU0NDAxMTkxYWY5MyJ9.1UCXl4TVq22KcPV_aJ2Yhxq0ffmk9w1CrjMge3u1E50"

postgres database Url : which will be pasted in connection pool
postgresql://RamuPostgres_owner:cNRxIHvZQ0O8@ep-hidden-haze-a1reppqo.ap-southeast-1.aws.neon.tech/RamuPostgres?sslmode=require 

*/

