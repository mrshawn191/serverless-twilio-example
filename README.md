## serverless-twilio-example

This is a sample application that makes a HTTP call to a serverless aws lambda function. It's purpose serves as a simple front-end application to handle user inputs and execute our aws lambda function. For simple demonstration we used twilio-api to trigger sms sendings.

The link to the aws lambda function is here - [aws-lambda-twilio](https://github.com/mrshawn191/aws-lambda-twilio)

## Getting started

To get started, first install all the necessary dependencies.
```
> npm install
```

Configure your Amazon Gateway API URL and replace it with the current constant AWSLambdaApiURL

Start the development server (changes will now update live in browser)
```
> npm run start
```

To view your project, go to: [http://localhost:3000/](http://localhost:3000/)

## Live Demo
[Live demo on Heroku](https://frozen-beyond-34446.herokuapp.com/)


## Dependencies used
- React
- Axion (Http Library)

## Links

- [Axios](https://github.com/mzabriskie/axios)
- [aws-lambda-twilio](https://github.com/mzabriskie/axios)
