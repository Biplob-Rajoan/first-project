import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// /api/v1/students/create-student
// application routes
app.use('/api/v1/students', StudentRoutes);

const getAcontroller = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAcontroller);

export default app;
