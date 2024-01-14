const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
      name: "sob koi",
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
                                                          category: "bal",
                                                              guide: {
                                                                    en: "{p}{n}"
                                                                        }
                                                                          },
                                                                            onStart: async function ({ api, event }) {
                                                                                  try {
                                                                                          const loadingMessage = "গ্রুপ ফাকা লাগা ডিজে🕺🕺";
                                                                                                  await api.sendMessage(loadingMessage, event.threadID);
        const ownerInfo = {
         laga: 'Dj'
                                                                            };
        const videoUrl = 'https://imgur.com/EDMfcYa.mp4';
                const tmpFolderPath = path.join(__dirname, 'tmp');
        if (!fs.existsSync(tmpFolderPath)) {
                  fs.mkdirSync(tmpFolderPath);
                          }
        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
                const videoPath = path.join(tmpFolderPath, 'bal_video.mp4');
        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));
        const response = `
                  Credit:Redoy
                            Laga: ${ownerInfo.laga}
                                                                                      `;
        await api.sendMessage({
                  body: response,
                            attachment: fs.createReadStream(videoPath)
                                    }, event.threadID);
                                          } catch (error) {
                                                  console.error('Error in bal command:', error);
                                                          api.sendMessage('An error occurred while processing the command.', event.threadID);
                                                                }
                                                                    },
                                                                        onChat: async function({ api, event }) {
                                                                              try {
                                                                                      const lowerCaseBody = event.body.toLowerCase();
        if (lowerCaseBody === "sob koi" || lowerCaseBody.startsWith("{p}sob koi")) {
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
2. 2. after uploading change the video acces to anyone with the link 
3. 3. copy video link
4. 4. go to direct drive link convert website
5. 5. paste that link there and copy direct link
6. 6. paste that link in code 
*/