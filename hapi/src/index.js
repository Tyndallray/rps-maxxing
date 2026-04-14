const app = require('./app');

app.start().then(() => {
  console.log(`Server running on port ${app.info.port}`);
});
