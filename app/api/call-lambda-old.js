import AWS from 'aws-sdk';

const lambda = new AWS.Lambda();

export default async function handler(request) {
  const body = await request.json(); // Get the payload from the request
  const params = {
    FunctionName: 'on-user-message', // Replace with your Lambda function name
    InvocationType: 'RequestResponse', // Use 'Event' for async calls
    Payload: JSON.stringify(body), // Use request body as the payload
  };

  try {
    const data = await lambda.invoke(params).promise();
    const parsedData = JSON.parse(data.Payload);
    return new Response(JSON.stringify(parsedData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to call Lambda' }), { status: 500 });
  }
}
