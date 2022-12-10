import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);
const PORT = process.env.PORT || 4000;
const app = express();
db.data = db.data || { books: [] }
app.db = db
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))
