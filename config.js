import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['22502331988', '✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳', true], 
  ['22502331988', '✮✮ʟᴏᴜᴋsᴏɴ₊ʟᴇ ᴄʟᴀᴠɪᴇʀ ᴅ'ᴏʀ🍥', true],
  ['22502331988', '✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳', true], 
  ['22502331988', '✮✮ʟᴏᴜᴋsᴏɴ₊ʟᴇ ᴄʟᴀᴠɪᴇʀ ᴅ'ᴏʀ🍥', true],
  ['22502331988', 'ʟ /𝒖
  ᴏ /𝒛
    ᴜ/ 𝒖
      ᴋ/ 𝒎
        s/ 𝒂
          ᴏ /𝒌
            ɴ/ 𝒊', true],
  ['22502331988', 'ʟ /𝒖
  ᴏ /𝒛
    ᴜ/ 𝒖
      ᴋ/ 𝒎
        s/ 𝒂
          ᴏ /𝒌
            ɴ/ 𝒊', true]
] 

global.mods = ['22502331988', '22502331988', '22502331988', '22502331988', '22502331988'] 
global.prems = ['22502331988', '22502331988', '22502331988', '22502331988', '22502331988']
global.allowed = ['22502331988', '22502331988', '22502331988', '22502331988', '22502331988']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'NARUTO-MD'
global.premium = 'true'
global.packname = 'ʟ /𝒖
  ᴏ /𝒛
    ᴜ/ 𝒖
      ᴋ/ 𝒎
        s/ 𝒂
          ᴏ /𝒌
            ɴ/ 𝒊' 
global.author = 'ʟ /𝒖
  ᴏ /𝒛
    ᴜ/ 𝒖
      ᴋ/ 𝒎
        s/ 𝒂
          ᴏ /𝒌
            ɴ/ 𝒊
             🌀 🍥' 
global.menuvid = 'https://telegra.ph/file/325630f66abc968eda8e2.mp4'
global.igfg = '▢✓ Follow Our channel\nhttps://whatsapp.com/channel/0029VaE8GbCDzgTILE7OtC3e\n' 
global.dygp = 'https://chat.whatsapp.com/BfH0KLkICn2BjmGFMRcGMW'
global.fgsc = 'https://github.com/salmanytofficial/XLICON-V2-MD' 
global.fgyt = 'https://youtube.com/@s4salmanyt'
global.fgpyp = 'https://youtube.com/@s4salmanyt'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')

global.wait = '*🕣 _XLICON IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
