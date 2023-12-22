const UserService = require('./user.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const nodemailer = require('nodemailer');


const service = new UserService();


class AuthService {

  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user){
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }
}

signToken(user) {
  const payload = {
    sub: user.id,
    role: user.role
  }
  const token = jwt.sign(payload, config.jwtSecret);
  res.json({
    user,
    token
  });
};

async sendMail(email){
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "user-demo@forwardemail.net",
      pass: "Pass de prueba 123",
    },
  });

  await transporter.sendMail({
    from: 'user-demo@forwardemail.net',
    to: `${user.email}`,
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
  return { message: 'mail sent'}
}


module.exports = AuthService
