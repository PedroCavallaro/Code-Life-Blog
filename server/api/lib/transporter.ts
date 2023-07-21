import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: `${process.env.GMAIL_EMAIL}`,
        pass: `${process.env.GMAIL_PASSWORD}`,
    },
});
export const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
      rel="stylesheet"
    />
    <title></title>
  </head>
  <body
    style="
      background-color: rgb(239, 230, 253);
      font-family: 'Roboto Mono', monospace;
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;
    "
  >
    <h1 style="font-size: 50px">Novo Post no Blog!</h1>

    <div>
      <p style="font-size: 20px">
        Hoje lançou mais um post no blog para vocês aproveitarem...
      </p>
      <p style="font-size: 20px">Assunto de Hoje: {TITULO}</p>
      <p style="font-size: 20px">
        E ai, <a href="#">bora embarcar nessa jornada de aprendizado?</a>
      </p>
    </div>

    <a href="#">Link direto</a>
  </body>
</html>
  `;
