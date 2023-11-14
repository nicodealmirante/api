const express = require("express");

const createProvider = (providerClass = class {}, args = null) => {
  const providerInstance = new providerClass(args);
  if (!providerClass.prototype instanceof ProviderClass) throw new Error('El provider no implementa ProviderClass')
  return providerInstance
};

const BaileysProvider = require("@bot-whatsapp/provider/baileys");

  const adapterProvider2 = createProvider(BaileysProvider);

const app = express();


  /**
   * Enviar mensaje con metodos propios del provider del bot
   */
 
app.get('', async (req, res) => {



           adapterProvider2.sendText("5491159132301@s.whatsapp.net", "mensaje");
      
});
