/**
 * @type {{
 *  platform: {
 *      name: string,
 *      arch: string,
 *
 *      isWin: boolean,
 *      isWin32: boolean,
 *      isWin64: boolean,
 *
 *      isMac: boolean,
 *      isLinux: boolean
 *  }
 * }}
 */
module.exports = {
	platform: require('./platform'),
	NotificationService: require('./notification-service'),
};
