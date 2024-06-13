const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const policyRoutes = require('./routes/policyRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api/policies', policyRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
