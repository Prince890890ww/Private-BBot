module.exports = {
    config: {
        name: "hasina",
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
    if (event.body && event.body.toLowerCase() == "hasina") return message.reply("Sheikh Hasina Wazed (née Sheikh; born 28 September 1947) is a Bangladeshi politician who has served as the tenth Prime Minister of Bangladesh since January 2009. Hasina was among Time's 100 most influential people in the world in 2018.");
}
};