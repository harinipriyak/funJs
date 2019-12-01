const colors = require('colors');
const app = require('./app/app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => startUp());

const startUp = () => {
  console.log(colors.green(`Server started on port ${PORT}`));
}

const shutDown = () => {
  console.log(colors.red('Shutting Down Server'));
};

process.once('SIGINT', shutDown);
process.once('SIGTERM', shutDown);