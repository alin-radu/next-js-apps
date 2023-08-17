import { connectDatabase, insertDocument } from '../../../lib/db-util';

const checkIsValidData = (email, name, message) =>
  email &&
  email.includes('@') &&
  name &&
  name.trim() !== '' &&
  message &&
  message.trim() !== '';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    const isValidData = checkIsValidData(email, name, message);

    if (!isValidData) {
      res.status(422).json({
        message: 'Invalid input.',
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      const result = await insertDocument(client, 'messages', newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    } finally {
      client.close();
    }

    res.status(201).json({
      message: 'Successfully stored message!',
      data: newMessage,
    });
  }
}

export default handler;
