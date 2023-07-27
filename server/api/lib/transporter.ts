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
export const html = (title: string, link: string) => `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto Mono", monospace;
        color: rgb(239, 230, 253);
      }

      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(206, 176, 250);
      }

      #wrapper {
        background-color: rgb(70, 0, 169);
        padding: 1.5rem;
        text-align: center;
      }

      header {
        margin-bottom: 2.5rem;
      }

      header > h1 {
        text-decoration: underline;
        margin-bottom: 5px;
      }

      header > p {
        color: rgb(179, 179, 204);
      }

      main {
        position: relative;
        width: 70%;
        left: 50%;
        transform: translateX(-50%);
      }

      #post-title {
        font-size: large;
        margin-bottom: 2rem;
      }

      button {
        background-color: rgb(41, 0, 100);
        margin-bottom: 0.1rem;
        padding: 15px;
        border-radius: 7px;
        border: none;
      }

      button > u {
        font-size: 16px;
      }

      button:hover {
        cursor: pointer;
        background-color: rgb(239, 230, 253);
        transition: ease-in-out 0.5s;
      }

      button:hover > u {
        color: rgb(41, 0, 100);
        transition: ease-in-out 0.5s;
      }

      button > p {
        text-decoration: none;
        font-size: 10px;
        color: rgb(239, 230, 253);
      }

      #link {
        margin-bottom: 1.7rem;
        font-size: 12px;
        color: rgb(179, 179, 204);
      }

      #aux-p {
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <header>
        <h1>Conteúdo novo na área!</h1>
        <p>E está maravilhoso...</p>
      </header>
      <main>
        <p id="post-title">
          O contéudo que saiu quentinho do forno agora fala sobre:
          <b>${title}</b>.
        </p>

        <a href="${link}">
          <button>
            <u>Acessar novo conteúdo</u>
            <p>clica ai vai...</p>
          </button>
        </a>

        <p id="link">Link direto: <a href="${link}">${link}</a></p>

        <p id="aux-p">
          Bom, eu já estou indo lá garantir essa leitura, <br />
          aprender nunca é demais. Te encontro por lá! ✌
        </p>
      </main>
    </div>
  </body>
</html>
`;
