// formRoutes.js
import express from 'express';
import { submitForm } from '../controllers/formController.js';

console.log('Initializing formRoutes...');

const router = express.Router();

// Use a single route for form submissions
router.post('/api/contact', submitForm);

export default router;
