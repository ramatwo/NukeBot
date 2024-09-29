const lenguaje = () => { return 'es' } //Español 

//AVISOS DE MENSAJE
const smsAvisoRG = () => { return `*✅ ∫ Resultado*\n\n` } 
const smsAvisoAG = () => { return `*⚠️ ∫ ADVERTENCIA*\n\n` }
const smsAvisoIIG = () => { return `*❕∫ Información*\n\n` }
const smsAvisoFG = () => { return `*❌ ∫ Error*╮\n\n` }
const smsAvisoMG = () => { return `*❗️∫ MAL*\n\n` }
const smsAvisoEEG = () => { return `*📩 ∫ REPORTE*\n\n` }
const smsAvisoEG = () => { return `*✅ ∫ Éxito*\n\n` }

//PARÁMETROS EN COMANDOS
//const smsRowner = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Comando deshabilitado.\`\`\`` }//DESHABILITADO
//const smsOwner = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Qué intentabas hacer ratita?\`\`\`` }//OWNER
//const smsMods = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Solo para moderadores.\`\`\`\`` }//MODERADORES
//const smsPremium = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Solo V.I.P\`\`\`` }//USUARIOS PREMIUM
//const smsGroup = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Comando solo para grupos.\`\`\`` }//PARA GRUPOS
//const smsPrivate = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Este comando sólo se puede usar en mi mensaje directo.\nSi necesitás ayuda \`\`\`` }//AL PRIVADO
//const smsAdmin = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Comando sólo para administradores\`\`\`` }//ADMINS
//const smsBotAdmin = () => { return `\`\`\`🪀➭⛔ ∫ Necesito ser administrador para ejecutar este comando.\`\`\`` }//BOT CON ADMIN
//const smsUnreg = () => { return `⫹⫺ ➭👤×⛔ ∫ Tenés que registrarte primero. Mandame #registrar a mi privado.` }//VERIFICAR
//const smsRestrict = () => { return `\`\`\`⫹⫺ ➭⛔ ∫ Este comando está restringido.\`\`\`` }//RESTRINGIR COMANDO

//MENU LISTA
const smsTime = () => { return `Tiempo Actual`}
const smsUptime = () => { return `Funcionando Durante`}
const smsVersion = () => { return `Versión de ${global.packname}`}
const smsTotalUsers = () => { return `Total de Usuarios`}
const smsMode = () => { return `Está en Modo`}
const smsModePublic = () => { return `PÚBLICO`}
const smsModePrivate = () => { return `PRIVADO`}
const smsBanChats = () => { return `ChatS ProhibidoS`}
const smsBanUsers = () => { return `UsuarioS ProhibidoS`}
const smsPareja = () => { return `Pareja`}
const smsResultPareja = () => { return `No tiene Pareja`}
const smsSaludo = () => { return `👋 !HOLA! BIENVENIDO(A) 👋`}
const smsDia = () => { return `🌇 Buenos Días ⛅`}
const smsTarde = () => { return `🏙️ Buenas Tardes 🌤️`}
const smsTarde2 = () => { return `🌆 Buenas tardes 🌥️`}
const smsNoche = () => { return `🌃 Buenas noches 💫`}
const smsListaMenu = () => { return `⊹ LISTA DE MENU ⊹`}

//main.js
//
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENIDO*\n┊💖 @user\n┊📄 *LEÉ LA DESCRIPCIÓN DEL GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *NO LE SABE AL GRUPO, CHAO* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊*'}
const smsSdemote = () => { return '*@user 𝘿𝙀𝙅𝘼 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊*'}
const smsSdesc = () => { return '*𝙇𝘼 𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:*\n\n@desc'}
const smsSsubject = () => { return '*𝙀𝙇 𝙉𝙐𝙀𝙑𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎:*\n\n@subject'}
const smsSicon = () => { return '*𝙎𝙀 𝙃𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼 𝙁𝙊𝙏𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊*'}
const smsSrevoke = () => { return '*𝘼𝙃𝙊𝙍𝘼 𝙀𝙎𝙏𝙀 𝙀𝙎 𝙀𝙇 𝙉𝙐𝙀𝙑𝙊 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊*\n\n*@revoke*'}
//
const smsConexion = () => { return `\n✅ CONEXIÓN EXITOSA.`} 
const smsCargando = () => { return `✨ CARGANDO...\n`} 
const smsCodigoQR = () => { return `\n✅ ESCANEA EL CÓDIGO QR EXPIRA EN 45 SEGUNDOS ✅`}
const smsConexionOFF = () => { return `\n⚠️ SIN CONEXIÓN ⚠️`}
const smsClearTmp = () => { return `\n╭» 🟢 MULTIMEDIA 🟢\n│☁ ARCHIVOS DE LA CARPETA TMP ELIMINADAS\n╰―――――――――――――――――――✤`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│☁ SESIONES NO ESENCIALES ELIMINADAS\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ARCHIVOS 🟠\n│☁ ARCHIVOS RESIDUALES ELIMINADAS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 sEXTBot 🟡\n│☁ NADA POR ELIMINAR \n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ sEXTBot ⚪\n│☁ ARCHIVOS NO ESENCIALES ELIMINADOS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 sEXTBot 🔴\n│☁ OCURRIÓ UN ERROR\n╰―――――――――――――――――――✤\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ARCHIVO 🟣\n│☁`} 
const smspurgeOldFiles2 = () => { return `BORRADO CON ÉXITO\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ARCHIVO 🔴\n│☁`} 
const smspurgeOldFiles4 = () => { return `NO SE LOGRÓ BORRAR\n╰―――――――――――――――――――✤\n`}

//_allantilink.js
const smsTextoYT = () => { return 'NukeBot - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '} 
const smsApagar = () => { return '❌ ∫ DESACTIVADO'} 
const smsEncender = () => { return '✅ ∫ ACTIVADO'} 
const smsEnlaceTik = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceYt = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTel = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceFb = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceIg = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsEnlaceTw = () => { return `𝙎𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝘿𝙀 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙋𝙍𝙊𝘾𝙀𝘿𝙊 𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙏𝙀`}
const smsAllAdmin = () => { return `𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎`}
const smsSoloOwner = () => { return `𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗙𝗔𝗟𝗟𝗔𝗡𝗗𝗢 🔴*`}
const smsCont2 = () => { return `*⚠️ 𝗣𝗟𝗨𝗚𝗜𝗡:*`}
const smsCont3 = () => { return `*⚠️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:*`}
const smsCont4 = () => { return `*⚠️ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢:*`}
const smsCont5 = () => { return `*⚠️ 𝗘𝗥𝗥𝗢𝗥:*`}
const smsCont6 = () => { return `*❗ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗘𝗦𝗧𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗨𝗦𝗔𝗡𝗗𝗢 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 #reporte 𝗣𝗔𝗥𝗔 𝗦𝗢𝗟𝗨𝗖𝗜𝗢𝗡𝗔𝗥𝗟𝗢*`}

const smsCont8 = () => { return ` *DIAMASTE(S) 💎 USADO(S)*`}
const smsCont9 = () => { return `${global.lenguajeSB['smsAvisoAG']()}*NECESITA EL NIVEL ➡️*`}
const smsCont10 = () => { return `*PARA USAR ESTE COMANDO. TÚ NIVEL ACTUAL ES ➡️*`}
const smsCont11 = () => { return `*ACTUALIZA CON EL COMANDO*`}
const smsCont12 = () => { return `UN GRUPO GENIAL  😼`}
const smsCont13 = () => { return `ALGUIEN SE UNIÓ   🥳`}
const smsCont14 = () => { return `ALGUIEN SE FUE  🧐`}
const smsCont15 = () => { return `𝙃𝙊𝙇𝘼`}
const smsCont16 = () => { return `𝙇𝘼𝙎 𝙑𝙄𝘿𝙀𝙊𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📲`}
const smsCont17 = () => { return `𝙇𝘼𝙎 𝙇𝙇𝘼𝙈𝘼𝘿𝘼𝙎 📞`}
const smsCont18 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼𝙉 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝘼𝙎 𝙋𝙊𝙍 𝙇𝙊 𝙌𝙐𝙀 𝙏𝙀𝙉𝘿𝙍𝙀 𝙌𝙐𝙀 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍𝙏𝙀.*`}
const smsCont19 = () => { return `𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍`}
const smsCont20 = () => { return `*┃✤ Nombre:*`}
const smsCont21 = () => { return `*┃✤ Enviando el mensaje eliminado...*`}

//_anti-internacional.js
const smsInt1 = () => { return `𝙀𝙎𝙏𝙀 𝙉𝙐𝙈𝙀𝙍𝙊`}
const smsInt2 = () => { return `𝙉𝙊 𝙀𝙎𝙏𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 `}

//_antilink.js
const smsAdwa = () => { return `𓀿`}
const smsEnlaceWat = () => { return `*🛡️➭⛔ ∫ Enlace detectado. Removiendo vagabundo:* `}

//_antilink2.js
const smsEnlaceWatt = () => { return `*🛡️➭⛔ ∫ Enlace detectado. Removiendo vagabundo:* `}

//_antispam.js
//const smsNoSpam = () => { return `🛡️➭⛔ ∫ NO HAGAS SPAM.`}

//_antispam_.js
//const smsNoSpam2 = () => { return `FUE DESBANEADO DESPUÉS DE ${60000 / 1000 - 59} MINUTO. POR FAVOR NO HAGA SPAM `}
//antispam.js
const smsNoSpam  = () => { return  "SPAM DE MENSAJES LEVE" }
const smsNoSpam1 = (sender, motive) => { return `*@${m.sender.split`@`[0]} NO PUEDE USAR COMMANDOS DURANTE 30 SEGUNDOS*\n\n*MOTIVO: ${motive}*` }
const smsNoSpam2 = () => { return  "SPAM DE MENSAJES MODERADO" }
const smsNoSpam3 = () => { return  (sender, motive) => `*@${m.sender.split`@`[0]} NO PUEDE USAR COMMANDOS DURANTE 1 MINUTO*\n\n*MOTIVO: ${motive}*` }
const smsNoSpam4 = () => { return  "SPAM DE MENSAJES ALARMANTE" }
const smsNoSpam5 = () => { return  (sender, motive) => `*@${m.sender.split`@`[0]} NO PUEDE USAR COMMANDOS DURANTE 2 MINUTOS*\n\n*MOTIVO: ${motive}*` }
const smsNoSpam6 = () => { return  (mention) => `No hagas spam` }

//Texto
const smsConMenu = () => { return `☘️ 𝗠 𝗘 𝗡 𝗨`} //🟡 NO CAMBIAR 

//Error
const smsMalError = () => { return `${lenguajeSB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeSB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE. INTENTE DE NUEVO.\`\`\``}
const smsMalError3 = () => { return `${lenguajeSB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `𝙉𝙊𝙊 ! 🤬 𝘿𝙀𝘾𝙄𝙍 𝙀𝙎𝙏𝘼 𝙋𝘼𝙇𝘼𝘽𝙍𝘼`}
const smsToxic2 = () => { return `𝙀𝙎𝙏𝘼 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝘼 𝙉𝙊 𝙎𝙀𝘼𝙎 𝙏𝙊𝙓𝙄𝘾𝙊(𝘼)`}
const smsToxic3 = () => { return `*ADVERTENCIA*\n⚠️`}
const smsToxic4 = () => { return `😭 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊`} //🟡 NO CAMBIAR 
const smsToxic5 = () => { return `☢️ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾`} //🟡 NO CAMBIAR 
const smsToxic6 = () => { return `𝙏𝙀 𝙇𝙊 𝘼𝘿𝙑𝙀𝙍𝙏𝙄 𝙑𝘼𝙍𝙄𝘼𝙎 𝙑𝙀𝘾𝙀𝙎 `}
const smsToxic7 = () => { return `*🛡️➭⛔ ∫ 𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 4 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎.* `}

//Tienda
const eExp = () => { return '⚡ Experiencia' } 
const eDiamante = () => { return '💎 Diamante' } 
const eDiamantePlus = () => { return '💎+ DiamantePlus' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Esmeralda' } 
const eJoya = () => { return '♦️ Joya' }
const eMagia = () => { return '🌀 Magia' } 
const eOro = () => { return '👑 Oro' } 
const eCoinss = () => { return '🪙 Moneditas' }
const eNukeTickers = () => { return '🎫 Tickets' } 
const eEnergia = () => { return '✨ Energía' }
const ePocion = () => { return '🥤 Poción' }
const eAgua = () => { return '💧 Agua' }
const eBasura = () => { return '🗑 Basura' }
const eMadera = () => { return '🪵 Madera' }
const eRoca = () => { return '🪨 Piedra' }
const ePiedra = () => { return '🥌 PiedraPlus' }
const eCuerda = () => { return '🕸️ Cuerda' }
const eHierro = () => { return '⛓️ Hierro' }
const eCarbon = () => { return '⚱️ Carbón' }
const eBotella = () => { return '🍶 Botella' }
const eLata = () => { return '🥫 Lata' }
const eCarton = () => { return '🪧 Cartón' } 
const eEletric = () => { return '💡 Electricidad' }
const eBarraOro = () => { return '〽️ Barra de Oro' }
const eOroComun = () => { return '🧭 Oro Común' }
const eZorroG = () => { return '🦊🌫️ Zorro Grande' }
const eBasuraG = () => { return '🗑🌫️ Super Basura' }
const eLoboG = () => { return '🐺🌫️ Super Lobo' }
const eMaderaG = () => { return '🛷🌫️ Super Madera' }
const eEspada = () => { return '⚔️ Espada' }
const eCarnada = () => { return '🪱 Carnada' }
const eBillete = () => { return '💵 Billetes' }
const ePinata = () => { return '🪅 Piñata' }
const eGancho = () => { return '🪝 Gancho' }
const eCanaPescar = () => { return '🎣 Caña de Pescar' } 
const eCComun = () => { return '📦 Caja Común' }
const ePComun = () => { return '🥡 Caja Poco Común' }
const eCMistica = () => { return '🗳️ Caja Mítica' }
const eCMascota = () => { return '📫 Caja de Mascotas' }
const eCJardineria = () => { return '💐 Caja de Jardinería' }
const eClegendaria = () => { return '🎁 Caja Legendaria' } 
const eUva = () => { return '🍇 Uva' }
const eManzana = () => { return '🍎 Manzana' }
const eNaranja = () => { return '🍊 Naranja' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 
const eSUva = () => { return '🌾🍇 Semillas de uva' }
const eSManzana = () => { return '🌾🍎 Semillas de manzana' }
const eSNaranja = () => { return '🌾🍊 Semillas de naranja' }
const eSMango = () => { return '🌾🥭 Semillas de Mango' }
const eSPlatano = () => { return '🌾🍌 Semillas de plátano' } 
const eCentauro = () => { return '🐐 Centauro' }
const eAve = () => { return '🦅 Ave' }
const eGato = () => { return '🐈 Gato' }
const eDragon = () => { return '🐉 Dragón' }
const eZorro = () => { return '🦊 Zorro' }
const eCaballo = () => { return '🐎 Caballo' }
const eFenix = () => { return '🕊️ Fénix' }
const eLobo = () => { return '🐺 Lobo solitario' }
const ePerro = () => { return '🐶 Perro' } 
const eAMascots = () => { return '🍖 Alimento para Mascota' }
const eCCentauro = () => { return '🐐🥩 Comida de Centauro' }
const eCAve = () => { return '🦅🥩 Comida de Ave' }
const eCMagica = () => { return '🌀🥩 Comida Mágica' }
const eCDragon = () => { return '🐉🥩 Comida de Dragón' }
const eACaballo = () => { return '🐎🥩 Alimentos Para Caballo' }
const eCFenix = () => { return '🕊️🥩 Comida de Fénix' } 
//config-on y off.js
const smsWel1 = () => { return `🎉 BIENVENIDA`}
const smsWel2 = () => { return `Mensaje de Bienvenida para nuevos Miembros en Grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `Avisos de acciones dentro del Grupo`}
const smsANivel1 = () => { return `🆙 NIVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Sube de nivel a todos de manera automática; (Aplica recompensas por subir de Nivel)`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Habilitar función para agregar o eliminar personas en Grupos`}
const smsLlamar1 = () => { return `🚫 ANTI LLAMADAS`}
const smsLlamar2 = () => { return `Bloquea a Personas que hagan llamadas`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Banear el Uso de Comados cuando alguien realice algún tipo de Spam`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Habilitar función para que todos puedan usar NukeBot`}
const smsModAd1 = () => { return `🛂 MODO ADMIN`}
const smsModAd2 = () => { return `Solo los Admins podrán usar NukeBot en Grupos`}
const smsLect1 = () => { return `✅ LECTURA AUTOMÁTICA`}
const smsLect2 = () => { return `Dejar los mensajes o chats como Leídos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORAL`}
const smsTempo2 = () => { return `Función que permite estadía temporalmente en Grupos`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Habilitar el envio automático de Stickers a todos`}
const smsStickA1 = () => { return `🪄 STICKERS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Los vídeos, Gif, imágenes, enlaces jpg o jpeg; Se convertirán en Stickers Automáticamente`}
const smsReacc1 = () => { return `🤡 REACCIÓN `}
const smsReacc2 = () => { return `Habilitar el envio automático de Reacciones a mensajes`}
const smsAudi1 = () => { return `🔊 AUDIOS`}
const smsAudi2 = () => { return `Habilitar el envio automático de Audios a todos`}
const smsModHor1 = () => { return `🔞 MODO HORNY`}
const smsModHor2 = () => { return `Mostrar contenido para Adulto en los Chats`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICOS`}
const smsAntitoc2 = () => { return `Enviar Advertencias aquellas personas que insulten`}
const smsModOb1 = () => { return `👀 MODO OBSERVAR`}
const smsModOb2 = () => { return `Permitir que las imágenes, Gif y Vídeos se puedan ver para todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI ELIMINAR`}
const smsAntiEli2 = () => { return `Todo mensaje eliminado será reenviado al Chat o Grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Eliminar Números internacionales considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI ENLACES`}
const smsAntiE2 = () => { return `Eliminar Personas que envíen enlaces de Grupos de WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI ENLACES 2`}
const smsAntiEE2 = () => { return `Eliminar Personas que envíen enlaces que contengan https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIKTOK`}
const smsAntiTT2 = () => { return `Eliminar Personas que envíen enlaces de TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Eliminar Personas que envíen enlaces de YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Eliminar Personas que envíen enlaces de Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Eliminar Personas que envíen enlaces de Facebbok`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Eliminar Personas que envíen enlaces de Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Eliminar Personas que envíen enlaces de Twitter`}
const smsSOLOP1 = () => { return `⚜️ SOLO PRIVADOS`}
const smsSOLOP2 = () => { return `Permitir que solo se use en Chats Privados`}
const smsSOLOG1 = () => { return `⚜️ SOLO GRUPOS`}
const smsSOLOG2 = () => { return `Permitir que solo se use en Chats Grupales`}
const smsConfi1 = () => { return `AJUSTES`}
const smsConfi2 = () => { return `*Un gusto verte*`}
const smsConfi3 = () => { return `*Seleccione una opción de la lista*`}
const smsConfi4 = () => { return `*Para empezar a Configurar*`}
const smsConfi5 = () => { return `● *Avisos de la Configuracion:*`}
const smsConfi6 = () => { return `✅ ⇢ *Función Activada*`}
const smsConfi7 = () => { return `❌ ⇢ *Función Desactivada*`}
const smsConfi8 = () => { return `⚠️ ⇢ *Este chat no es un Grupo*`}
const smsConfi9 = () => { return `*Recomendación: Para ver la configuración*\n*Completa use este Menú en un Grupo*\n`}
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURACIÓN*`}
const smsParaAdmins = () => { return `PARA ADMINS Y CREADOR : GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINS Y CREADOR : CHATS`}
const smsParaOw = () => { return `PARA CREADOR : CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `FUNCIÓN`} 
const smsMens2 = () => { return `ESTADO`} 
const smsMens3 = () => { return `EN ESTE`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ REPORTAR COMANDO ❕`} 
const smsMensError2 = () => { return `Está Fallando el siguiente comando`} 

//_antiviewonce.js
const smsAntiView = () => { return ``} //anti ver una vez

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NUEVO NIVEL 🎖️`} 
const smsAutoLv2 = () => { return `NIVEL ANTERIOR:`} 
const smsAutoLv3 = () => { return `NIVEL ACTUAL:`} 
const smsAutoLv4 = () => { return `RANGO:`} 
const smsAutoLv5 = () => { return `FECHA:`}  
const smsAutoLv7 = () => { return `🥳 RECOMPENSA POR EL NUEVO NIVEL`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeSB['smsAvisoFG']()}*EL VÍDEO NO DEBE DE DURAR MÁS DE 7 SEGUNDOS.*`} 

//_expired.js
const smsBottem1 = () => { return `*SE VA DEL GRUPO ! 🤝 SI QUIERE QUE VUELVA, USE EL COMANDO _#bottemporal_ PARA QUE VUELVA AL GRUPO *`} 
const smsBottem2 = () => { return `*💕 ASISTENCIA PARA USUARIOS*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `HASTA PRONTO 💖`} 



//afk-_afk.js
const smsAfkM1 = () => { return `*⚠️ ∫ Se desactivó tu modo afk.*`} 
const smsAfkM2 = () => { return `*📜 ∫ Motivo:* `} 
const smsAfkM3 = () => { return `*⏳ ∫ Tiempo:* `} 
const smsAfkM4 = () => { return `*⛔ ∫ Este usuario se encuentra afk.*`} 
const smsAfkM5 = () => { return `*📜 ∫ Motivo:* `} 
const smsAfkM6 = () => { return `*📜 ∫ Motivo: NO ESPECIFICÓ MOTIVO DE INACTIVIDAD*`} 


const smsAfkM1B = () => { return ``} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeSB['smsAvisoFG']()}*NO ESTÁS EN CHAT ANÓNIMO*`} 
const smsChatAn2 = () => { return `*SI QUIERES INICIAR UN CHAT ANÓNIMO USA EL COMANDO #start O USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn3 = () => { return `⚡ INICIAR CHAT ANÓNIMO`} 
const smsChatAn4 = () => { return `${lenguajeSB['smsAvisoRG']()}🪐 *USTED SE FUE DEL CHAT ANÓNIMO*`} 
const smsChatAn5 = () => { return `${lenguajeSB['smsAvisoAG']()}*EL OTRO USUARIO SALIÓ DEL CHAT ANÓNIMO*`}  
const smsChatAn6 = () => { return `*SI QUIERES IR A OTRO CHAT ANÓNIMO USA EL COMANDO #start O USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn7 = () => { return `${lenguajeSB['smsAvisoAG']()}*TODAVÍA ESTÁS EN UN CHAT ANÓNIMO O EN ESPERA A QUE ALGUIEN SE UNA PARA CHATEAR*`} 
const smsChatAn8 = () => { return `*SI QUIERES SALIR DEL CHAT ANÓNIMO USE EL COMANDO #leave O PUEDES USAR EL BOTÓN DE ABAJO*\n`} 
const smsChatAn9 = () => { return `🍁 SALIR DEL CHAT ANÓNIMO`} 
const smsChatAn10 = () => { return `${lenguajeSB['smsAvisoEG']()}✨ *YA PUEDEN CHATEAR*`} 
const smsChatAn11 = () => { return `*ALGUIEN SE HA UNIDO AL CHAT ANÓNIMO *`} 
const smsChatAn12 = () => { return `❇️ OTRO(A) USUARIO(A)`} 
const smsChatAn13 = () => { return `${lenguajeSB['smsAvisoRG']()}🐈 *ESPERANDO A QUE ALGUIEN SE UNA AL CHAT ANÓNIMO, TENGA PACIENCIA POR FAVOR*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ MENÚ DE INICIO ⚡`} 
const smsBotonM2 = () => { return `💫 MENÚ COMPLETO 💫`} 
const smsBotonM3 = () => { return `🎒 INVENTARIO 🎒`} 
const smsBotonM4 = () => { return `USUARIOS`}
const smsBotonM5 = () => { return `RANGO`}
const smsBotonM6 = () => { return `NIVEL`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*MENÚ DE BUSQUEDA*'}
const smsTex2 = () => { return '*MODIFICADOR DE AUDIO*'}
const smsTex3 = () => { return '*MENÚ +18*'}
const smsTex4 = () => { return '*CONTENIDO DINÁMICO*'}
const smsTex5 = () => { return '*BUSCAR Y DESCARGAR*'}
const smsTex6 = () => { return '*MENÚ +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Imágenes +18 de calidad y variedad*\n⠇ *Vídeos +18 solo para ti*\n⠇ *Stickers +18 disponibles*'}
const smsTex8 = () => { return '*MENÚ CONVERTIDOR*'}
const smsTex9 = () => { return '*MENÚ DE DESCARGAS*'}
const smsTex10 = () => { return '*MENU JUEGOS DINÁMICOS*'}
const smsTex11 = () => { return '*MENU PARA GRUPOS*'}
const smsTex12 = () => { return '*MENU DE HERRAMIENTAS*'}
const smsTex13 = () => { return '*MENU DE INFORMACIÓN*'}
const smsTex14 = () => { return '*MENU DE EFECTOS Y LOGOS*'}
const smsTex15 = () => { return '*MENU DE LOGOS 2*'}
const smsTex16 = () => { return 'MENU DE AUDIOS'}
const smsTex17 = () => { return '*NO ES NECESARIO USAR PREFIJO EN AUDIOS*'}
const smsTex18 = () => { return 'LISTA DE AUDIOS'}
const smsTex19 = () => { return '*PUEDE SELECCIONAR EL AUDIO *'}
const smsTex20 = () => { return '*MENU PARA PROPIETARIO*'}
const smsTex21 = () => { return '*MENU RPG*'}
const smsTex22 = () => { return '*MENU DE STICKERS Y FILTROS*'}
const smsTex23 = () => { return '*MENU DE MEMES Y ANIMES RANDOMS*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*ESTÁ EN ESTOS GRUPOS:*_'}
const smsLisB = () => { return '*✦ Total de Grupos:*'}
const smsLisC = () => { return '*✦ Grupo:*'}
const smsLisD = () => { return '*✦ ID:*'}
const smsLisE = () => { return '*✦ Participantes:*'}

//ad
const smsMalused = () => { return '⚡ *USAR EL COMANDO DE ESTA FORMA:*\n'}
const smsMalused2 = () => { return `${lenguajeSB['smsAvisoMG']()}🐈 *DEBE DE USAR EL COMANDO COMO EN ESTE EJEMPLO:*\n`}
const smsMalused3 = () => { return `${lenguajeSB['smsAvisoMG']()}🐈 *DEBE DE USAR EL COMANDO O RESPONDER AL MENSAJE DE ALGUIEN COMO EN ESTE EJEMPLO:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ABRIR GRUPO EN UNA HORA_*'}
const smsGrupoTime2 = () => { return '🔒 *_CERRAR GRUPO EN UNA HORA_*'}
const smsGrupoTime3 = () => { return '*GRUPO'}
const smsGrupoTime4 = () => { return 'CERRADO'}
const smsGrupoTime5 = () => { return 'ABIERTO'}
const smsGrupoTime6 = () => { return '*DURANTE'}
const smsGrupoTime7 = () => { return '🔒 *EL GRUPO ESTA CERRADO, SOLO ADMINS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime8 = () => { return '🔓 *EL GRUPO ESTA ABIERTO, TODOS PUEDEN ENVIAR MENSAJES*'}
const smsGrupoTime9 = () => { return '🔓 ABRIR GRUPO DURANTE '}
const smsGrupoTime10 = () => { return '🔒 CERRAR GRUPO DURANTE '}
const smsGrupoTime11 = () => { return ' HORA'}
const smsGrupoTime12 = () => { return 'PERMITIR QUE EL GRUPO SE HABRA POR '}
const smsGrupoTime13 = () => { return 'PERMITIR QUE EL GRUPO SE CIERRE POR '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeSB['smsAvisoFG']()}*NO SE PUEDE AGREGAR EL NÚMERO, VERFIQUE QUE SEA CORRECTO, TAL VEZ SALIÓ RECIENTEMENTE O SU PRIVACIDAD ESTA CONFIGURADA.*`}
const smsAddB2 = () => { return `${lenguajeSB['smsAvisoFG']()}*NO SE PUEDE AGREGAR EL NÚMERO, VERFIQUE QUE SEA CORRECTO, O AGRÉGELO MANUALMENTE.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*NOTIFICACIÓN PARA ADMINS*`}
const smsAddB4 = () => { return `*PRESENCIA DE ADMINS*`}
const smsAddB5 = () => { return `*MENSAJE:*`}
const smsAddB6 = () => { return `Solicito a los Admins por favor.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeSB['smsAvisoAG']()}*SOLO PUEDE USAR SI ESTÁ ACTIVADA LA FUNCIÓN:*\n`}
const smsAdveu2 = () => { return 'Motivo'}
const smsAdveu3 = () => { return `${lenguajeSB['smsAvisoMG']()}*RECUERDE ESCRIBIR EL MOTIVO DE LA ADVERTENCIA*\n`}
const smsAdveu4 = () => { return '*RECIBIÓ UNA ADVERTENCIA EN ESTE GRUPO*'}
const smsAdveu5 = () => { return 'ADVERTENCIA'}
const smsAdveu6 = () => { return '🎒 INVENTARIO'} 
const smsAdveu7 = () => { return '*Se te advirtió varias veces y no hiciste caso.*'}
const smsAdveu8 = () => { return '*vas a ser eliminado.'}
const smsAdveu9 = () => { return '😇 MUCHAS GRACIAS'}
const smsAdveu10 = () => { return '*SE LE ELIMINÓ UNA ADVERTENCIA EN ESTE GRUPO*'}
const smsAdveu11 = () => { return 'Antes:'}
const smsAdveu12 = () => { return 'Ahora:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return '*EL NÚMERO NO ES VÁLIDO, VUELVA INTENTAR RESPONDA AL MENSAJE DE ALGUIEN O USE COMO EN ESTE EJEMPLO:*\n'}
const smsDemott2 = () => { return '*AHORA TIENE PODER EN EL GRUPO *'}
const smsDemott3 = () => { return '*YA NO TIENE PODER EN EL GRUPO *'}

//grupo-info.js
const smsGI1 = () => { return '*INFORMACIÓN DEL GRUPO*'}
const smsGI2 = () => { return '*ID DEL GRUPO*'}
const smsGI3 = () => { return '*NOMBRE DEL GRUPO*'}
const smsGI4 = () => { return '*DESCRIPCIÓN DEL GRUPO*'}
const smsGI5 = () => { return '*NO HAY DESCRIPCIÓN*'}
const smsGI6 = () => { return '*NÚMERO DE USUARIOS*'}
const smsGI7 = () => { return '*Usuarios*'}
const smsGI8 = () => { return '*CREADOR DEL GRUPO*'}
const smsGI9 = () => { return '*ADMINS DEL GRUPO*'}
const smsGI10 = () => { return '⚙️ CONFIGUARACIONES DEL GRUPO'}

//grupo-kick.js
const smskick1 = () => { return `*⛔ ∫ Etiquetá a alguien.*\n\n*Ejemplo: `}
const smskick2 = () => { return `ELIMINADO(A) 😼🫵`}
const smskick3 = () => { return `NO PUEDO ELIMINAR AL CREADOR DEL GRUPO 😆🫵`}
const smskick4 = () => { return `NO ESTÁ EN ESTE GRUPO 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ INVOCANDO AL GRUPO ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeSB['smsAvisoEG']()}*LA DESPEDIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetB2 = () => { return `${lenguajeSB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE DESPEDIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n\n*RECUERDE QUE EL "@" ES OPCIONAL*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeSB['smsAvisoEG']()}*LA BIENVENIDA DEL GRUPO HA SIDO CONFIGURADA*`}
const smsSetW2 = () => { return `${lenguajeSB['smsAvisoIIG']()}🙌 *_ESCRIBA EL MENSAJE DE BIENVENIDA_*\n*_OPCIONAL PUEDE USAR LO QUE ESTA CON "@" PARA AGREGAR MÁS INFORMACIÓN:_*\n\n*⚡ @user (Mención al usuario(a))*\n*⚡ @subject (Nombre de grupo)*\n*⚡ @desc (Description de grupo)*\n\n*RECUERDE QUE LOS "@" SON OPCIONALES*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeSB['smsAvisoEG']()}*LA DESCRIPCIÓN DEL GRUPO HA SIDO CONFIGURADA*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeSB['smsAvisoEG']()}*EL NOMBRE DEL GRUPO HA SIDO CONFIGURADO*`}
const smsNam2 = () => { return `${lenguajeSB['smsAvisoMG']()}*🙌 ESCRIBA EL NUEVO NOMBRE DEL GRUPO*`}
const smsNam3 = () => { return `${lenguajeSB['smsAvisoFG']()}*EL NOMBRE DEL GRUPO NO DEBE DE TENER MÁS DE 25 CARACTERES*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeSB['smsAvisoEG']()}*EL ENLACE DEL GRUPO HA SIDO RESTABLECIDO*`}



//propietario(a).js
const smsJoin = (user) => { return `holaa soy un botardo`}
const smsJoin1 = (usedPrefix, command) => { return lenguajeSB['smsAvisoMG']() + `*INGRESE EL ENLACE DE UN GRUPO*\n*EJEMPLO:*\n*${usedPrefix + command}* ${nna}`}
const smsJoin2 = () => { return lenguajeSB['smsAvisoEG']() + `${packname}\n*SE HA UNIDO AL GRUPO ✅*`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `*RESPONDA AL MENSAJE O ESCRIBA EL MENSAJE USANDO ${usedPrefix + command}*`}
const smsBCMensaje2 = () => { return `*ENVIANDO MENSAJE OFICIAL, ESPERE UN MOMENTO...*`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ *EL MENSAJE FUE ENVIADO A ${totalPri} CHAT(S) PRIVADO(S)*\n\n*TIEMPO TOTAL DE ENVÍO: ${time}*\n${totalPri >= 3000 ? '\n*NO SE ENVIARON A TODOS LOS CHATS PARA EVITAR SATURACIÓN*' : ''}`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ *MENSAJE ENVIADO:*`}
const smsBCbot2 = () => { return `PRIVADO`}
const smsBCbot3 = () => { return `GRUPO`}
const smsBCbot4 = () => { return `TOTAL`}
const smsBCbot5 = () => { return `TIEMPO TOTAL DE ENVÍO:`}
const smsBCbot6 = () => { return `NO SE ENVIARON A TODOS LOS CHATS PRIVADOS PARA EVITAR SATURACIÓN`}
const smsBCbot7 = () => { return `✅ *COMUNICADO OFICIAL* ✅`}

//propietario(a).js
const smsChatGP1 = () => { return "*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*"}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *COMUNICADO OFICIAL* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ *EL MENSAJE FUE ENVIADO A ${totalGP} GRUPO(S)*`}

//propietario(a.js
const smsPropban1 = () => { return `*ETIQUETE A ALGUIEN O RESPONDA AL MENSAJE DEL USUARIO O ESCRIBA EL NÚMERO QUE QUIERE BANEAR DE LOS COMANDOS*`}
const smsPropban2 = (bot) => { return `*@${bot} NO PUEDE SER BANEADO CON ESTE COMANDO.*`}
const smsPropban3 = () => { return `*⫹⫺ ➭⛔ ∫ NO PUEDO BANEAR AL OWNER PENDEJO PELOTUDO.*`}
const smsPropban4 = (number) => { return `*⛔➭✅ ∫ NO ES NECESARIO VOLVER A BANEAR A @${number}.*`}
const smsPropban5 = () => { return "```👤➭⛔ ∫ Usuario baneado correctamente.```"}//baneadoooo/banuser
const smsPropban8 = () => { return "```⫹⫺ ➭⛔ ∫ Enviando solicitud de bloqueo a la base de datos...```"}
const smsPropban9 = () => { return "```⫹⫺ ➭✅ ∫ Solicitud recibida y aceptada...```"}
const smsPropban6 = (number, usr) => { return `@${number} fuiste baneado por un administrador. Ya no vas a poder usar a Sodica.`}
const smsPropban7 = () => { return `*⫹⫺ ➭⛔ ∫ Usuario baneado con softban.*`}

//jadibot-serbot.js
//const smsIniJadi = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Versión de ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Escanee este codigo QR para iniciar sesión*\n\n📢 *¡Este código QR expira en 45 segundos!*`}
//const smsSoloOwnerJB = () => { return `${lenguajeSB['smsAvisoAG']()}*ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`}
//const smsJBPrincipal = () => { return `${lenguajeSB['smsAvisoAG']()}🔵 *PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ Ingrese al siguiente enlace:*\n`}
//const smsJBConexion = () => { return `${lenguajeSB['smsAvisoFG']()}🟡 *LA CONEXIÓN SE HA CERRADO DE MANERA INESPERADA, INTENTAREMOS RECONECTAR...*`}
//const smsJBConexionClose = () => { return `${lenguajeSB['smsAvisoFG']()}🔴 *LA CONEXIÓN SE HA CERRADO, DEBERÁ DE CONECTARSE MANUALMENTE USANDO EL COMANDO #serbot Y REESCANEAR EL NUEVO CÓDIGO QR*`}
//const smsJBConexionTrue = () => { return `${lenguajeSB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO !*`}
//const smsJBConexionTrue2 = () => { return `${lenguajeSB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO ! PUEDE CONECTARSE USANDO SU (ID) O USAR:*`}
//const smsJBCargando = () => { return `${lenguajeSB['smsAvisoIIG']()}⚪ *ESTÁ CONECTADO(A)  POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» #stop _(Detener la función Sub Bot)_*\n*» #eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» #serbot _(Obtener nuevo código QR para ser Sub Bot)_*`}
//const smsJBInfo1 = () => { return `💖 *ENLACE ÚTIL*`}
//const smsJBInfo2 = () => { return `💖 *La función es estable, sí presenta algún inconveniente Comuníquese al correo: centerNukeBot@gmail.com*\n💝 *Puede hacer una Donación voluntaria por PayPal: ${global.paypal}*\n\n*Muchas Gracias por el apoyo a ${global.packname}*`}

//jadibot-deleteSesion.js
//const smsJBDel = () => { return `${lenguajeSB['smsAvisoAG']()}*USE ESTE COMANDO AL BOT PRINCIPAL*`}
//const smsJBAdios = () => { return `${lenguajeSB['smsAvisoEG']()}*TE VOY A EXTRAÑAR ${global.packname} CHAOO  🥹*`}
//const smsJBCerrarS = () => { return `${lenguajeSB['smsAvisoEG']()}*HA CERRADO SESIÓN Y BORRADO TODO RASTRO*`}
//const smsJBErr = () => { return `*HA CERRADO SESIÓN COMO SUB BOT* ♻️`}






export default { lenguaje, smsPropban8, smsPropban9, smsAvisoRG, smsJoin, smsJoin1, smsJoin2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5, smsPropban6, smsPropban7, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, /*smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict*/ smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsNoSpam3, smsNoSpam4, smsNoSpam5, smsNoSpam6, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eCoinss, eNukeTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp };
