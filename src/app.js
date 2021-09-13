import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import TasksRoutes from './routes/tasks.routes';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000); //Nombre de la variable y valor


//Middlewares
const corsOptions = {}
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//URL del servidor (Routes)
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Application' });
});


app.use('/api/tasks', TasksRoutes);


export default app;