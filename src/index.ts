import dotenv from 'dotenv';
dotenv.config({ path: '.env.example'});
import app from './app';
import connect from './database';

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
  connect();
});