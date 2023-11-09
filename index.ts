import app from './server'
import { connectToMongo } from './db';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectToMongo();
  console.log(`Server is running on port ${PORT}`);
});
