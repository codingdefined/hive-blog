const ghpages = require('gh-pages');
const exec = require('child-process-promise').exec;
const path = require('path');

let username, email;
exec('git config user.name').then(result => {
    if (!result.stderr) {
        username = result.stdout.trim();
    }

    if (!username) {
        throw new Error('Failed to read user.name');
    }

    return exec('git config user.email');
}).then((result) => {
    if (!result.stderr) {
        email = result.stdout.trim();
    }

    if (!email) {
        throw new Error('Failed to read user.email');
    }

    return;
}).then(() => {
    console.log(`Publishing as ${username}/${email}`);
    ghpages.publish(path.join(__dirname, '../public'), {
            user: {
                name: username,
                email: email
            }
        }, function (err) {
            if (err) {
                console.error('Failed to publish', err);
                process.exit(1);
            } else {
                console.log('Successfully published');
                process.exit(0);
            }
        }
    );
}).catch(err => {
    console.error(err);
    process.exit(1);
});