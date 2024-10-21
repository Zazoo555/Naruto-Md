const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg"                       // put your app url here,
global.email ="kushimotunde7@gmail.com"
global.location="Nigeria,lagos."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://steezy_maxwell:Steezy._.and._.Maxwell@maxwellandsteezy.wbmgyr4.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/LAGOS";
global.github=process.env.GITHUB|| "https://github.com/Ednut001/naruto-md/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx";
global.website=process.env.GURL || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348102487241" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348102487241";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255752264609";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "2",  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg,https://telegra.ph/file/81326462c7b46a26ea380.jpg,https://telegra.ph/file/03f39cfcf936d65455b0f.jpg,https://telegra.ph/file/4d71f28cdb62409a17c81.jpg,https://telegra.ph/file/a79cbfe94e1fd41809c17.jpg,https://telegra.ph/file/318abcc79a289cec3aca4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255752264609";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255752264609";



module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "⏤͟͟͞͞★Ednut 🫶࿐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ naruto md 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "naruto",
  packname: process.env.PACK_NAME || "md",
  botname : process.env.BOT_NAME  || "Naruto-md",
  ownername:process.env.OWNER_NAME|| "⏤͟͟͞͞★Ednut 🫶࿐",

  sessionName:process.env.SESSION_ID|| "SUHAIL_23_00_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDYxLFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRibWdtZUpxL2JWanU2aUs0azR3NmpGdmorSUllMTJVL0g2WVpUOUhMRkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzUyMjY0NjA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTk3QURCNjZGRDJDMDE4ODg5M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk1NTE2MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamttQzF2SGZUcGU5RklPdVozSFB6UVwiLFxuICBcInBob25lSWRcIjogXCIwODI0NWJlNi1iY2YxLTQ0OTUtYjFhMC0zYzgwNjI2NGIyYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICA1LFxuICAgICAgNzgsXG4gICAgICA4NCxcbiAgICAgIDU1LFxuICAgICAgMjE1LFxuICAgICAgMTI3LFxuICAgICAgMTIyLFxuICAgICAgMSxcbiAgICAgIDEzOCxcbiAgICAgIDIxNyxcbiAgICAgIDEwNixcbiAgICAgIDExMCxcbiAgICAgIDExNixcbiAgICAgIDEyNCxcbiAgICAgIDIxMSxcbiAgICAgIDE1LFxuICAgICAgMjEzLFxuICAgICAgNjQsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjQ3LFxuICAgICAgMTAxLFxuICAgICAgMTY3LFxuICAgICAgOTIsXG4gICAgICA0OCxcbiAgICAgIDMxLFxuICAgICAgMjMxLFxuICAgICAgMTA3LFxuICAgICAgMjM4LFxuICAgICAgNzksXG4gICAgICA0MSxcbiAgICAgIDksXG4gICAgICA3NSxcbiAgICAgIDYxLFxuICAgICAgMTYsXG4gICAgICAyMzgsXG4gICAgICA0OCxcbiAgICAgIDIxNSxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRYQktTUE5MXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NTIyNjQ2MDk6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPbWFyeSDvo79cIixcbiAgICBcImxpZFwiOiBcIjI3MTM2MDc2NDk5NzcyNDoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYU1uUDhPRVArNTI3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1KVm1meVNjL1E0TnlneW1MbjJ2ajh6UWdzVklwdXlyREJueWJGWkVDMlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmhnbWxqZmN1ZTNiQkVqd250NC9EbnBLdys3YkxJSnpoamN2S2N2cUtjaGVlTnBmSG9RVU4zNThHam5lTzByVU9OODFKeXpmR0tZOHRSVC8wRzkxRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMncrRndYc2J3bzBkYzZSd1pXbFJ5c0tjMHhwUlV1K0VjOXR1V2tjUHJSWjN4ZWNjNDNIWGFpUkQ5ZXhvMzkzaUJiWENqcHZ0MFMxQXJnTFNKeW9pZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzUyMjY0NjA5OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTU1MTYxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI4RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjhELmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0NNSHN6NGVyLzFtR3g5TlJ4NDJwVURHd1h0TUFacVdJd0pFYmZTcCtZND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDI0ODk1MDc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk1NTE2MjAxOTFcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "GWQ6jVy9MBpfYF9SnyG8jz8p",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "https://api.elevenlabs.io/v1/text-to-speech/<voice-id>",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Legendary ednut",



};




























global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
