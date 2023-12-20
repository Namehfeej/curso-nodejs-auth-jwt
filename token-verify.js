const jwt = require('jsonwebtoken')

const secret = 'mydog';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMywicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzAzMDMxNTI1fQ.QysUd1OIJm8efYM2m9MGz25tMFN0Dpb5wxD8BLAK-xY'

function verifyToken(token, secret){
  return jwt.verify(token, secret);

}
const payload = verifyToken(token, secret);

console.log(payload);
