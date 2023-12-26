// formModel.js
import { MongoClient } from 'mongodb';

const handleFormSubmission = async (formData) => {
  const uri = 'mongodb+srv://shethary:ucJRf0jrLG2A0cTa@aryancluster.1rh8nkz.mongodb.net/AStarJewellers?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('AStarJewellers');
    const collection = database.collection('formSubmissions');

    // Save the form data to MongoDB
    const result = await collection.insertOne(formData);

    console.log('Form data saved to MongoDB:', result);

    return { message: 'Form submission successful' };
  } finally {
    await client.close();
  }
};

export { handleFormSubmission };
