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