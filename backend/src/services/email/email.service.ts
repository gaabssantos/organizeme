import nodemailer from 'nodemailer';

import emailConfig from './email.config';

const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.auth.user,
    pass: emailConfig.auth.pass,
  },
});

export const sendEmail = async (email: string, name: string, code: string) => {
  const info = await transporter.sendMail({
    from: '"Gabriel" <gabriel.oliveira20500@gmail.com>',
    to: email,
    subject: 'Verificação do OrganizeMe',
    html: `Olá ${name}, tudo bem? <br /> Para ativar sua conta, verifique o e-mail <a href=${process.env.FRONT_URL}/verification/${code}>clicando aqui</a>!`,
  });

  console.log('Message sent: %s', info.messageId);
};
