const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//Static file declaration
app.use(express.static(path.join(__dirname, 'word-play/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'word-play/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'word-play/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/word-play/public/index.html'));
})

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})