const fs = require("fs");

module.exports = {
  config: {
	 name: "autoreact",
	 version: "1.0.0",
	 author: "John lester",// conver to goatbot by Eugene Aguilar 
	 shortDescription: {
		en: "bot react",
	 },
	 longDescription: {
		en: "Bot react",
	 },
	 category: "no prefix",
	 guide: {
		en: "...",
	 },
  },
onChat: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("hahaha") ||
react.includes("haha") || react.includes("pakyu") || react.includes("Pakyu") || react.includes("bobo") || react.includes("Bobo") || react.includes("gago") || react.includes("tangina") || react.includes("tang") || react.includes("pak") || react.includes("shit") || react.includes("amp") || react.includes("lol") || react.includes("LOL") || react.includes("ulol") || react.includes("walang utak") || react.includes("Amp") || react.includes("tanga") || react.includes("bts") || react.includes("Bts") || react.includes("BTS") || react.includes("burat") || react.includes("kantutin") || react.includes("Kantutin") || react.includes("unggoy") || react.includes("bano") || react.includes("kulang") || react.includes("😆") || react.includes("😂") || react.includes(":)") || react.includes("🙂") || react.includes("😹") || react.includes("🤣") || react.includes("mabaho") || react.includes("mapanghi") || react.includes("Mabaho") || react.includes("suntukan") || react.includes("stupid") || react.includes("fuck") || react.includes("fuckyou") || react.includes("sapak") || react.includes("Sapak") || react.includes("bold") || react.includes("Bold") || react.includes("am") || react.includes("nan") || react.includes("Am") || react.includes("bisaya") || react.includes("gagi") || react.includes("bastos") || react.includes("Bastos") || react.includes("deputa") || react.includes("Deputa") || react.includes("puta") || react.includes("Puta") || react.includes("Pota") || react.includes("baboy") || react.includes("kababuyan") || react.includes("🖕") || react.includes("🤢") || react.includes("😝") || react.includes("hayup") || react.includes("hayop") || react.includes("nigga") || react.includes("Nigga") || react.includes("script kiddie") || react.includes("trash") || react.includes("Hayop") || react.includes("Hayup") || react.includes("kagagohan") || react.includes("kagaguhan") || react.includes("Nan") || react.includes("kingina") || react.includes("Kingina") || react.includes("KINGINA") || react.includes("hindot") || react.includes("jesus") || react.includes("Jesus") || react.includes ("jesos") || react.includes("Jesos") || react.includes("abno") || react.includes("Abno") || react.includes("Script kiddie") || react.includes("lmao") || react.includes("Lmao") || react.includes("LMAO") || react.includes("xd") || react.includes("Xd") || react.includes("XD") || react.includes("biot") || react.includes("Biot") || react.includes("bayot") || react.includes("Bayot") || react.includes("Bayut") || react.includes("bayut") || react.includes("bakla") || react.includes("Bakla") || react.includes("bading") || react.includes("Bading") || react.includes("poor") || react.includes("Poor")) {
    var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
          };
    if(react.includes("mahal") || react.includes("Mahal") || react.includes("Love") || react.includes("love") || react.includes("lab") || react.includes("lab") || react.includes("😊") || react.includes("ilove") || react.includes("Ilove") || react.includes("iLove") || react.includes("ilab") || react.includes("iLab") || react.includes("Ilab") || react.includes("labyu") || react.includes("Labyu") || react.includes("kiss") || react.includes("Kiss") || react.includes("yie") || react.includes("kwass") || react.includes("Kwass") || react.includes("krass") || react.includes("Krass") || react.includes("crush") || react.includes("crush") || react.includes("ligawan") || react.includes("kilig") || react.includes("fuck") || react.includes("Fuck") || react.includes("Kinikilig") || react.includes("Kilig") || react.includes("😗") || react.includes("😙") || react.includes("😘") || react.includes("😚") || react.includes("ugh") || react.includes("Ugh") || react.includes("sige pa") || react.includes("Sige pa") || react.includes("sarap") || react.includes("Sarap") || react.includes("sex") || react.includes("Sex") || react.includes("☺") || react.includes("porn") || react.includes("Porn") || react.includes("kantotan") || react.includes("Kantotan") || react.includes("Iyotan") || react.includes("Iyutan") || react.includes("iyotan") || react.includes("iyutan") || react.includes("pasend") || react.includes("Pasend") || react.includes("Iyut") || react.includes("Iyot") || react.includes("iyot") || react.includes("iyut") || react.includes("eut") || react.includes("Eut") || react.includes("eut") || react.includes("😍") || react.includes("shet") || react.in