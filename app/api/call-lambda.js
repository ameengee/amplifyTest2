//import AWS from 'aws-sdk';

//const lambda = new AWS.Lambda();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({ message: 'Lambda called successfully!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
