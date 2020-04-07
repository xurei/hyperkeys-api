const notifier = require('node-notifier');

const NotificationService = {
    notify({title, message, timeoutSeconds}) {
        timeoutSeconds = timeoutSeconds || 3;
        
        notifier.notify({
            title: title,
            message: message,
            timeout: timeoutSeconds,
            'expire-time': timeoutSeconds*1000, // Will likely not work in most environments on linux, but stays here for consistency; see https://bugs.launchpad.net/ubuntu/+source/notify-osd/+bug/390508
        });
    }
};

module.exports = NotificationService;
