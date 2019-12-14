const { execFile } = require('child_process');

execFile('pwsh', ['-command', '". \'./index.ps1\'"'], { stdio: 'inherit' });
