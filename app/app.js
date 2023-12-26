// app.js

import express from 'express';
import cors from 'cors';
import emailRoutes from '../app/routes/emailRoutes.js';
import formRoutes from '../app/routes/formRoutes.js';

const app = express();
// Apply the cors middleware
app.use(cors());
app.use(express.json());
app.use(formRoutes);

app.use('/api/email', emailRoutes);


export default app;
