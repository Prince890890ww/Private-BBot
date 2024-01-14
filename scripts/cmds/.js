module.exports = {
    config: {
        name: "/",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "/") return message.reply("「 ___=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===
  --❖-- siam islam(✷‿✷) --❖--
✢━━━━━━━━━━━━━━✢

❥◎⃝! শূন্যতায় ভাসি🙃 

❥কখনো হাসি -😁💚_আবার কাঁদি!-😅

❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি😊❤

✢━━━━━━━━━━━━━━━✢

𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : siam islam(✷‿✷) 」");
}
};