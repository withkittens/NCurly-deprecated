const { execFileSync } = require('child_process');
execFileSync('pwsh', ['-command', '". \'./index.ps1\'"'], { stdio: 'inherit' });
