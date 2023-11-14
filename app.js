const express = require("express");

const createProvider = (providerClass = class {}, args = null) => {
  const providerInstance = new providerClass(args);
  if (!providerClass.prototype instanceof ProviderClass) throw new Error('El provider no implementa ProviderClass')
  return providerInstance
};

const BaileysProvider = require("@bot-whatsapp/provider/baileys");

  const adapterProvider = await createProvider(BaileysProvider);

const app = express();


  /**
   * Enviar mensaje con metodos propios del provider del bot
   */
 
app.get('/sm', async (req, res) => {



           adapterProvider.sendText("5491159132301@s.whatsapp.net", "mensaje");
      
});
