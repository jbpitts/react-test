# react-test

In the folder /api there is a serve. 

* For this server I have used the library json-server that provides a db.json file that allows you to create simple api calls.

In the folder /bitmodern there is a react app, that uses React Router to navigate. 

* The app allows you to create a new book and list all the books. 
React creates and fetch the data through the library axios that lets you make api calls. 
Everything has been implemented using redux, and the api calls are async, so as you might know you can't make async calls using redux, so I have to use this middleware library called Thunk in order to make it work.
For the react router you can find clicking routes by the user and also I used the history library contained in react-router-dom in order to route to a page not just when the user clicks, also when there is an internal navigation coming from the app.

## Installation
## Server side
Inside the /api folder run the command:

```bash
npm start
```

The server runs in http://localhost:3001

## Frontend side
Inside the /bitmodern folder run the command:
```bash
npm start
```
the app is launch at the default react settings http://localhost:3000 
