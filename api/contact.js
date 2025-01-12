export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { firstName, lastName, email, phone, message } = req.body;
  
      // Simulate processing (e.g., log data or send an email)
      console.log('Received contact form data:', {
        firstName,
        lastName,
        email,
        phone,
        message,
      });
  
      return res.status(200).json({
        code: 200,
        message: 'Message sent successfully!',
      });
    } else {
      return res.status(405).json({
        code: 405,
        message: 'Method Not Allowed',
      });
    }
  }
  