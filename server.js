const express = require('express');
const cors = require('cors');

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(cors());

app.get('/', (req, res) => (
    res.send('Welcome to the Express Server')
));

app.get('/send-text', (req, res) => {

    const { phoneNumber, message } = req.query;

    client.messages
        .create({
            body: message,
            from: '+13235151566',
            to: phoneNumber
        })
        .then(message => console.log(message.body));
});

app.listen(3500, () => console.log("Running on port 3500!"));