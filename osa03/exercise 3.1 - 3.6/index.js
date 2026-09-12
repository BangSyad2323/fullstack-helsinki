import express from "express";
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json());

const person = [
    { 
      id: "1",
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: "2",
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: "3",
      name: "Arto Hellas", 
      number: "040-123456"
    },
   
]




app.get("/", (req, res) => {
  res.send("hello duniakudekca", person)
})

app.get("/info", (req, res) => {
  const sumPerson = person.length;
  const currentTime = new Date();

 res.send(`
    <p>Phonebook has info for ${sumPerson} people</p>
    <p>${currentTime}</p>
  `);
})

app.get("/api/persons", (req, res) => {
  res.json(person)
})

const port = 3001;

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`)
})