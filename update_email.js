const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'client', 'src');

function replaceEmail(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('ayushtiwari3054@gmail.com')) {
        content = content.replace(/ayushtiwari3054@gmail\.com/g, 'ayushtiwari2034@gmail.com');
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            replaceEmail(fullPath);
        }
    }
}

traverse(dir);
