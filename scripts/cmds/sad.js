module.exports = {
  config: {
    name: "sad",
    aliases: ["depressed"],
    version: "1.0",
    author: "Siam",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "get video to increase your sadness",
    category: "fun",
    guide: "{p}{n}",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "",
    });

    const link = [
      "https://drive.google.com/uc?export=download&id=1ztNdRo3Wsb5apAK5Nk7qCb5vnTzGooyT",
            "https://drive.google.com/uc?export=download&id=1-SqPBFCrY4EhBVX2FVAk-VMHzo-rkTLz",
      
    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: '🙂🙂',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
};