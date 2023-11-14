const express = require("express");
const {createProvider
} = require("@bot-whatsapp/bot");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");

  const adapterProvider2 = createProvider(BaileysProvider);

const app = express();


  /**
   * Enviar mensaje con metodos propios del provider del bot
   */
 
app.get('/enviar-mensaje', async (req, res) => {



          await adapterProvider.sendText("5491159132301@s.whatsapp.net", "mensaje");
      
});
