const express = require('express');
const app = express();

// Route to receive parameter in the URL
app.get('/is_prime/:num', (req, res) => {
  const num = parseInt(req.params.num);
  const primeNumbers = [2]
  for (let i = 3; i <= num; i+=2) {
    primeNumbers.push(i)
    for (let j = 0; Math.pow(primeNumbers[j],2) <= i && j < primeNumbers.length - 1; j++) {
        const prime = primeNumbers[j];
        if( i % prime == 0){
            primeNumbers.pop();
            break;
        }
    }
  }
  const result = {result:(primeNumbers.pop() == num)}
  res.json(result);
  res.end()
});
app.get('/test', (req, res) => {res.status(200).send('Hello World!').end()})

// Start the server
/*const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
module.exports = app;