const bcrypt = require('bcrypt');

async function verifyPassword () {
  const myPassword = 'admin 123 .456';
  const hash = '$2b$10$O2v9lJC/2b7yZwK8D/n8t.ph3BBElzpDa43X10hSCew8xfzVphoO2';
  const isMacth = await bcrypt.compare(myPassword, hash);
  console.log(isMacth);
}

verifyPassword();

