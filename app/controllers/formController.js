// formController.js
import { handleFormSubmission } from '../models/formmodel.js';

const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    // Save the form data to MongoDB
    const result = await handleFormSubmission(formData);

    res.json(result);
  } catch (error) {
    console.error('Error during form submission:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { submitForm };
