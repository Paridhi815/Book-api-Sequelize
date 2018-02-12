const https = require('https');

// const url1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const url2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

// https.get(url1, (res) => {
//   // console.log('statusCode:', res.statusCode);
//   res.on('data', (d) => {
//     const data = JSON.parse(d);
//     console.log(data);
//   });
// });


// https.get(url2, (res) => {
//   // console.log('statusCode:', res.statusCode);
//   res.on('data', (d) => {
//     const data = JSON.parse(d);
//     console.log(data);
//   });
// });

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('pari');
//   }, 4000);
// });

const promise1 = new Promise((resolve) => {
  https.get(`${url2}1`, (res) => {
    res.on('data', (data) => {
      const dataN = data.toString();
      resolve(dataN);
    });
  });
});

const promise2 = new Promise((resolve) => {
  https.get(`${url2}2`, (res) => {
    res.on('data', (data) => {
      const dataN = data.toString();
      resolve(dataN);
    });
  });
});
// also ensures all the promises come in order
Promise.all([promise1, promise2]).then((value) => {
  console.log(value);
});

// promise.then(value => console.log(value));
