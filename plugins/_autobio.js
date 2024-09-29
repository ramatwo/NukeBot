/*let handler = m => m;

handler.all = async function (m) {
    let setting = global.db.data.settings[this.user.jid];

    let _muptime;
    if (process.send) {
        process.send('uptime');
        _muptime = await new Promise(resolve => {
            const listener = (message) => {
                resolve(message);
                process.removeListener('message', listener);
            };
            process.once('message', listener);
            setTimeout(() => {
                process.removeListener('message', listener);
                resolve();
            }, 20000);
        });
    }
    let gconly = global.opts['gconly'] ? '❌' : '✅'
    let bio = `⏤͟͞🪀 NukeBot v${global.vs} 📌 usá .registrar 📂 @sodica.crew`;
    await this.updateProfileStatus(bio).catch(_ => _);

    setting.status = new Date() * 50000;
};

export default handler;
*/