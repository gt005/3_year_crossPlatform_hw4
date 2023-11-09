import commonRoutes from './routes/commonRoutes';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan(':date[iso] :remote-addr :method :url :status :response-time ms - :res[content-length]'));
}
app.use('/api', commonRoutes);

export default app;