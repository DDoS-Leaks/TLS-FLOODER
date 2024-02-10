const { exec } = require('child_process');

const modules = [
    'gradient-string',
    'cluster',
    'crypto',
    'http2',
    'http',
    'net',
    'tls',
    'url',
    'fs',
    'axios',
    'path'
];

function installModules(modules) {
    modules.forEach(module => {
        exec(`npm install ${module}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing ${module}: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error installing ${module}: ${stderr}`);
                return;
            }
            console.log(`${module} installed successfully.`);
            
            // Setelah instalasi berhasil, eksekusi tls-bypass.js
            if (module === 'tls') {
                executeTlsBypass();
            }
        });
    });
}

function executeTlsBypass() {
    exec('node tls-bypass.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing tls-bypass.js: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error executing tls-bypass.js: ${stderr}`);
            return;
        }
        console.log(`tls-bypass.js executed successfully.`);
    });
}

installModules(modules);
