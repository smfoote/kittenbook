var userName = prompt('Hello, what\'s your name?');
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' +
                         '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber +
                         ' accessed on: ' + kbValues.currentTime + '</p>';
