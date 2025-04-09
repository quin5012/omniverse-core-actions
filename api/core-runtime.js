import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'omniverseCoreRuntime.json');
  const data = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(data);
}
