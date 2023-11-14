const express = require("express");
const { join } = require("path");
const { createReadStream } = require("fs");
const {
  createProvider
} = require("@bot-whatsapp/bot");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const app = express();
const main = async () => {
  const adapterProvider = createProvider(BaileysProvider);


  /**
   * Enviar mensaje con metodos propios del provider del bot
   */
 
app.get('/enviar-mensaje', async (req, res) => {



          await adapterProvider.sendText("5491159132301@s.whatsapp.net", "mensaje");
      
});
  /**
   * Enviar mensajes con metodos nativos del provider
   */
  app.get("/send-message-provider", async (req, res) => {
    const id = "54959132301@c.us";
    const templateButtons = [
      {
        index: 1,
        urlButton: {
          displayText: ":star: Star Baileys on GitHub!",
          url: "https://github.com/adiwajshing/Baileys",
        },
      },
      {
        index: 2,
        callButton: {
          displayText: "Call me!",
          phoneNumber: "+1 (234) 5678-901",
        },
      },
      {
        index: 3,
        quickReplyButton: {
          displayText: "This is a reply, just like normal buttons!",
          id: "id-like-buttons-message",
        },
      },
    ];

    const templateMessage = {
      text: "Hi it's a template message",
      footer: "Hello World",
      templateButtons: templateButtons,
    };

    const abc = await adapterProvider.getInstance();
    await abc.sendMessage(id, templateMessage);

    res.send({ data: "enviado!" });
  });

  app.get("/get-qr", async (_, res) => {
    const YOUR_PATH_QR = join(process.cwd(), `bot.qr.png`);
    const fileStream = createReadStream(YOUR_PATH_QR);

    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
};

main();
