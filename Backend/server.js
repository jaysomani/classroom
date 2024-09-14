const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/virtualClassroom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/classes', require('./routes/classes'));

// Root Route (Optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Virtual Classroom API');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
