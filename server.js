
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/ventures', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/ventures.html'));
});

app.get('/vacancies', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/vacancies.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/contact.html'));
});

app.get('/events', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/events.html'));
});
  
app.listen(process.env.PORT || 8001, () => {
    console.log('listening on port 8001!');  
});

// process.exit(0); 
