const express = require("express");
const {ProviderClass
} = require("@bot-whatsapp/bot");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
  const providerInstance = new providerClass(adapterProvider2);


  const adapterProvider2 = providerInstance(BaileysProvider);

const app = express();


  /**
   * Enviar mensaje con metodos propios del provider del bot
   */
 
app.get('', async (req, res) => {



           adapterProvider2.sendText("5491159132301@s.whatsapp.net", "mensaje");
      
});
