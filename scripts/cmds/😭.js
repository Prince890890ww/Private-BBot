const fs = require('fs');
module.exports = {
  config: {
    name: "😭",
    version: "1.0",
    author: "otineeeeyyyy",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "😭") {
      return message.reply({
        body: "হারিয়ে ফেলেছি মানসিক শান্তি!🙂🥹ツ࿐\n ❝༆কারোআলোকিত শহরে হাটতেচাইনাツ࿐🙂\n━━━━━━ ⊙ ━━━━━━\nনিখোঁজ হয়ে থাকতে চাই আমি আমার শহরেツ࿐",
        attachment: fs.createReadStream("abir/kanna.mp4"),
      });
    }
  }
};