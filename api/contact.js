export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { firstName, lastName, email, phone, message } = req.body;
  
      // Log the received data for debugging
      console.log('Form submitted:', { firstName, lastName, email, phone, message });
  
      try {
        // Respond with a success message
        res.status(200).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ message: 'Failed to process the request.' });
      }
    } else {
      // Handle unsupported HTTP methods
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  