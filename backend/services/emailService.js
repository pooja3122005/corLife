const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_AUTH_USER,
    pass: process.env.SMTP_AUTH_PASSWORD,
  },
});

const sendEmail = async (data) => {
  await transporter.sendMail({
    from: `"Corlife Website" <${process.env.SMTP_AUTH_USER}>`,
    to: "corelifehealth@gmail.com",
    subject: "New Demo Request",

    html: `
      <h2>New Demo Request</h2>

      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th align="left">Name</th>
          <td>${data.name}</td>
        </tr>

        <tr>
          <th align="left">Email</th>
          <td>${data.email}</td>
        </tr>

        <tr>
          <th align="left">Organization</th>
          <td>${data.organization}</td>
        </tr>

        <tr>
          <th align="left">Role</th>
          <td>${data.role}</td>
        </tr>

        <tr>
          <th align="left">Requirements</th>
          <td>${data.notes}</td>
        </tr>

      </table>
    `,
  });
};

module.exports = sendEmail;