import express from "express";
import cors from "cors";
import morgan from 'morgan'
const app = express();

app.use(cors());
app.use(express.json()); // 👈 Taruh ini dulu
morgan.token('body', (req) => JSON.stringify(req.body))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "3",
    name: "Arto Hellas",
    number: "040-123456",
  },
];

app.get("/", (req, res) => {
  res.send("hello duniakudekca");
});

app.get("/info", (req, res) => {
  const sumpersons = persons.length;
  const currentTime = new Date();

  res.send(`
    <p>Phonebook has info for ${sumpersons} people</p>
    <p>${currentTime}</p>
  `);
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;

  const payload = persons.find((person) => String(person.id) === String(id));

  if (!payload) {
    return res.status(404).json({
      message: "person not found"
    });
  }
  res.json(payload);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;

  try {
    persons = persons.filter((person) => String(person.id) !== String(id));

    // PENTING: Panggil .end() sebagai fungsi dengan tanda ()
    res.status(204).json({
      message: "person berhasil dihapus",
    });
  } catch (err) {
    res.status(404).json({
      message: "server eror"
    })
  }
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ 
      error: "name or number is missing" 
    });
  }

  const nameExists = persons.some((p) => p.name === name);
  if (nameExists) {
    return res.status(400).json({ 
      error: "name must be unique" 
    });
  }

  const payload = {
    id: String(Math.floor(Math.random() * 1000000)), // Menggunakan string angka acak
    name: name,
    number: number
  };

  persons.push(payload);

  res.status(201).json(payload);
});

const port = 3001;

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
