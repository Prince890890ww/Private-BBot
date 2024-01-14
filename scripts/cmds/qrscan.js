const fs = require("fs");
module.exports = {
	config: {
		name: "qrscan",
		version: "1.0",
		author: "Siam",
		countDown: 5,
		role: 0,
		shortDescription: "tools",
		longDescription: "",
		category: "reply to qrcode",
		guide:  {
			vi: "{pn} reply to qrcode "
		}
	},  
	onStart: async function ({ api,event,args }) {
  const fs = require('fs');
  const jimp = require('jimp');
  const QrCode = require('qrcode-reader');
  const path = __dirname + "/assets/qrcode.png";

  const { threadID, messageID, type, messageReply } = event;
  if (type != "message_reply" || messageReply.attachments.length > 1) return api.sendMessage(" You must reply to the required qrcode image!", threadID, messageID);

  if (messageReply.attachments[0].type == 'photo') {
    await require("image-downloader").image({ url: messageReply.attachments[0].url, dest: path })
    const img = await jimp.read(fs.readFileSync(path));
    const qr = new QrCode();
    const value = await new Promise((resolve, reject) => {
      qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
      qr.decode(img.bitmap);
    });
    return api.sendMessage(`» Result: ${value.result}`, threadID, messageID);
  }
  return api.sendMessage("» Error! An error occurred. Please try again later!", threadID, messageID);
}
};