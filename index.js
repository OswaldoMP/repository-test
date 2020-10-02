require('./config/configEnv')
const express = require('express');

const { sequelize } = require('./models/index');

const app = express();

const cors = require('cors');

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(require('./routes/index'));




app.listen(PORT, () => {
    console.log('Server lisent in port:', PORT);

    sequelize.sync({ force: false }).then(() => {
        console.log("Conected in the data base");
    });
});