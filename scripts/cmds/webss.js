const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "webss",
    aliases: [],
    author: "Siam",
    version: "1.0",
    cooldowns: 5,
    role: 2,
    shortDescription: {
      en: "Generate a screenshot of any webpage."
    },
    longDescription: {
      en: "Generate a screenshot of any webpage"
    },
    category: "owner",
    guide: {
      en: "{url}"
    }
  },
  onStart: async function ({ api, event, args, message }) {
    api.setMessageReaction("🐸", event.messageID, (err) => {}, true);
    let url;

    if (event.type === "message_reply") {
   
      if (event.messageReply.body && event.messageReply.body.startsWith("http")) {
        url = event.messageReply.body;
      } else {
        return message.reply("The replied message does not contain a valid URL.");
      }
    } else {
     
      if (args.length === 0) {
        return message.reply("Please provide a URL.");
      }
    
      url = args[0];
    }

    try {
      const response = await axios.get(`https://ss-22ls.onrender.com/ss?url=${encodeURIComponent(url)}`, { responseType: "stream" });

      
      const imagePath = path.join(__dirname, `/cache/ss_${Date.now()}.png`);

 
      const writer = fs.createWriteStream(imagePath);
      response.data.pipe(writer);

     
      await new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

     
      await message.reply({
        body: "Screenshot generated🐸:",
        attachment: fs.createReadStream(imagePath)
      });

     
      fs.unlinkSync(imagePath);

     
      api.setMessageReaction("🐸", event.messageID, (err) => {}, true);
    } catch (error) {
  
      message.reply(`Error: ${error.message}`);
    }
  }
};
