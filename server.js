require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact/email', async (req, res) => {
  try {
    console.log('request attempted', req.body);
    const msg = {
      to: 'cylor.dev@gmail.com',
      from: 'cylor.dev@gmail.com',
      subject: req.body.email,
      text: req.body.message,
      html: `<h3>${req.body.email}</h3>
            <h4>${req.body.subject}</h4>
            <p>${req.body.message}</p>`,
    };
    await sgMail.send(msg).then((response) => res.json(response));
  } catch (error) {
    console.log(error);
  }
});

// if (process.env.NODE_ENV === 'development') {
//   app.use(express.static('portfolio/build'));
//   app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, 'portfolio/build', 'index.html'));
//   });
// }

app.use(express.static(path.join(__dirname, 'portfolio/build')));
app.get('*', (request, response) => {
  response.sendFile(
    path.resolve(__dirname, 'portfolio', 'build', 'index.html')
  );
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
