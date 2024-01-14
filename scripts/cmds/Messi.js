module.exports = {
    config: {
        name: "Messi",
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
    if (event.body && event.body.toLowerCase() == "messi") return message.reply("লিওনেল আন্দ্রেস “লিও” মেসি একজন আর্জেন্টাইন পেশাদার ফুটবল খেলোয়াড় যিনি মেজর লিগ সকার ক্লাব ইন্টার মায়ামি এবং আর্জেন্টিনার জাতীয় ফুটবল দলের হয়ে একজন আক্রমণভাগের খেলোয়াড় হিসেবে খেলেন। তিনি বর্তমানে আর্জেন্টিনা জাতীয় দলের অধিনায়ক হিসেবে দায়িত্ব পালন করছেন");
}
};