const fs = require('fs');
const express = require('express')

const cors = require('cors');
const app = express()
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  const data = require('./data.json');
  res.json(data);
});

app.post('/api/saveData', (req, res) => {
    try {
      // Check if the data.json file exists
      if (!fs.existsSync('data.json')) {
        fs.writeFileSync('data.json', '[]');
      }
  
      // Read the existing data from data.json
      const existingData = JSON.parse(fs.readFileSync('data.json'));
  
      // Merge the existing data with the new data
      const newData = [...existingData, ...req.body.data];
  
      // Write the updated data back to data.json
      fs.writeFileSync('data.json', JSON.stringify(newData, null, 2));
  
      res.status(200).send('Data saved successfully');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(port, () => {
    console.log("Server started on port 5000")
})