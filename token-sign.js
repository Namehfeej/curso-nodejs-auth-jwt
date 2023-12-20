const jwt = require('jsonwebtoken')

const secret = 'mydog';
const payload = {
  sub: 123,
  role: 'customer'
}

function signToken(payload, secret){
  return jwt.sign(payload, secret);

}
const token = signToken(payload, secret);

console.log(token);
