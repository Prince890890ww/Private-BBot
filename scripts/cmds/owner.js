const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "owner",
    aliases: [],
    author: "Siam",// idea and half code stolen from mirai coded by Aminul sordar
    version: "2.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗯𝗼𝘀𝘀 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻...";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          𝗻𝗮𝗺𝗲: '𝗦𝗶𝗮𝗺 𝗜𝘀𝗹𝗮𝗺',
          𝘄𝗼𝗿𝗸: '𝗰𝗼𝗱𝗶𝗻𝗴',
          𝗿𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽: '𝗙𝘂𝗰𝗸 𝗹𝗼𝘃𝗲',
          𝗮𝗴𝗲 : '18',
          𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸𝗟𝗶𝗻𝗸: '𝗔𝘀𝗸 𝘆𝗼𝘂𝗿 𝗼𝗹𝗱𝗲𝗿 𝗯𝗿𝗼𝘁𝗵𝗲𝗿𝘀',
          bio: '𝗙𝘂𝗰𝗸 𝗮𝘁𝘁𝗶𝘁𝘂𝗱𝗲'
        };

        const videoUrl = 'https://imgur.com/yDpmGfb.mp4';
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
          𝗠𝘆 𝗕𝗼𝘀𝘀 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:
          𝗡𝗮𝗺𝗲: ${ownerInfo.𝗻𝗮𝗺𝗲}
          𝗪𝗼𝗿𝗸: ${ownerInfo.𝘄𝗼𝗿𝗸}
          𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽: ${ownerInfo.𝗿𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽}
          𝗔𝗴𝗲: ${ownerInfo.𝗮𝗴𝗲}
          𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${ownerInfo.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸𝗟𝗶𝗻𝗸}
          𝗦𝘁𝘂𝘁𝘂𝘀: ${ownerInfo.bio}
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();
        
        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };

/*

To add new video 
1. upload your video on drive
2. after uploading change the video acces to anyone with the link 
3. copy video link
4. go to direct drive link convert website
5. paste that link there and copy direct link
6. paste that link in code 

*/