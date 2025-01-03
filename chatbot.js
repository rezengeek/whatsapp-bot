// QR CODE
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Buttons
const client = new Client();
// qr code reading service
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// After that he says everything was fine
client.on('ready', () => {
    console.log('Pronto! WhatsApp conectado.');
});
// And booting
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Function we use to create the delay between one action and another


// Funnel

client.on('message', async msg => {

  if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|salve|eai|Salve|Eai|Opa|opa)/i) && msg.from.endsWith('@c.us')) {

      const chat = await msg.getChat();

      await delay(3000); // 3 second delay
      await chat.sendStateTyping(); // Simulating Typing
      await delay(3000); // Delay of 3000 milliseconds better known as 3 seconds
      const contact = await msg.getContact(); // Getting the contact user
      const name = contact.pushname; // Getting the contact name
      await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + '. Sou o assistente virtual da Rezcode. Como posso ajudá-lo(a) hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona\n2 - Valores dos planos\n3 - Benefícios\n4 - Como aderir\n5 - Outras perguntas'); //Primeira mensagem de texto
      await delay(3000); //delay of 3 seconds
      await chat.sendStateTyping(); // Simulating Typing
      await delay(5000); //delay of 5 seconds
  
      
  }