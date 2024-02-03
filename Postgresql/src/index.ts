import { Client } from 'pg'

 
const client = new Client({
  connectionString:"postgresql://yashpate0101:bY5h1qdwgMLV@ep-rough-cell-03216551.ap-southeast-1.aws.neon.tech/Test?sslmode=required"
})

async function createUser() {
    await client.connect();
    const result =await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `)
    console.log(result)
}

createUser();