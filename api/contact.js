export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;

        try {
            console.log('Form submitted:', { firstName, lastName, email, phone, message });
            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Failed to send message. Please try again later.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
