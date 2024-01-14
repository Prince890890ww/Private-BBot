const os = require("os");

module.exports = {
  config: {
    name: "uptime",
    aliases: ["up", "upt"],
    version: "2.1",
    author: "Siam",
    longDescription: "uptime checker",
    category: "Utility",
    guide: {
      en: "{pn}",
    },
  },

  onStart: async function ({ api, message, event }) {
    try {
      const uptimeInSeconds = process.uptime();

      const days = Math.floor(uptimeInSeconds / 86400);
      const hours = Math.floor((uptimeInSeconds % 86400) / 3600);
      const minutes = Math.floor((uptimeInSeconds % 3600) / 60);

      const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes`;

      const pingStart = Date.now();
      await api.sendMessage({ body: "Monitor up....." }, event.threadID);
      const pingEnd = Date.now();
      const ping = Math.floor((pingEnd - pingStart) / 10); 

      const isStable = ping < 110;  

      const memoryUsage = (os.totalmem() - os.freemem()) / (1024 ** 2); 

      let statusMessage = "বট চলছে দ্রুত গতিতে 🚀";
      if (!isStable) {
        statusMessage = "বট ভালো পজিসনে আছে🥇";
      }

      let uptimeGreeting = "Greetings!"; 
      if (days > 5) {
        uptimeGreeting = "Vps using this bot";
      } else if (days > 2) {
        uptimeGreeting = "ইঞ্জয় বট খুব ভালো কাজ করছে🎇";
      } else if (days > 1 || (days === 1 && hours >= 1)) {
        uptimeGreeting = "Good to see you! The bot has been active for over a day!";
      } else if (hours >= 12) {
        uptimeGreeting = "বট টি ১২ ঘন্টা লাইনে আছে অভিনন্দন 🎇🎇";
      } else if (hours >= 6) {
        uptimeGreeting = "Half a day in, and the bot is rocking it!";
      } else if (hours >= 3) {
        uptimeGreeting = "৩ ঘন্টা পেরিয়ে গেলো ২৪ ঘন্টা টানা চলবে ইনশাআল্লাহ🎈";
      } else if (hours >= 1) {
        uptimeGreeting = "অভিনন্দন বট ১ ঘন্টা পেরিয়ে গেলো 🎆";
      } else if (minutes > 30) {
        uptimeGreeting = "অর্ধেক ঘন্টা হোয়ে গেলো বট এখনো সক্রিও";
      } else if (minutes > 15) {
        uptimeGreeting = "১৫ মিনিট এর উপরে বট লাইনে আছে| বট২৪ ঘন্টা সার্ভিস দিতে প্রস্তুত";
      } else if (minutes > 5) {
        uptimeGreeting = "বট টি ইতিমধ্যে চালু করা হয়েছে আশা করি ২৪ গন্টা চলবে ইনশাআল্লাহ❣️";
      } else if (minutes > 1) {
        uptimeGreeting = "One minute down, and the bot is just getting started!";
      } else {
        uptimeGreeting = "এই বট অনেক সট্রং!";
      }

      const additionalMessages = [
        "তোমার বট নিয়ে সুন্দর মুহুর্ত কাটাও☺️!",
        "নতুন কিছু পেতে আমাকে অনুসরন করুন🫠",
        "আমার দারায় আপনি সুন্দর মুহুর্ত কাটান☺️",
        "তুমি কি জানো আমি কোডিং ভালোবাসি",
        "ধন্যবাদ আমাকে অনুসরন করার জন্য🎁",
        "কমান্ড করার জন্য আপনি প্রস্তুত?",
        "বটের হাস্যকর দিক-আমি মজা করতে পারি🎗️",
        "আমি আপনাকে কিভাবে সাহায্য করতে পারি?",
      ];

      const randomAdditionalMessage = additionalMessages[Math.floor(Math.random() * additionalMessages.length)];

      const replyMessage = `🧤 Uptime: ${uptimeString}\n📣 Status: ${statusMessage}\n× Ping: ${ping}ms\n•• Memory Usage: ${memoryUsage.toFixed(2)} MB\n\n${uptimeGreeting}\n\n🌟 ${randomAdditionalMessage}`;

      message.reply(replyMessage);
    } catch (error) {
      console.error(error);
      message.reply("Error getting uptime and ping.");
    }
  },
};