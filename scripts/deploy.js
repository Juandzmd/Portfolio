const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const sourceFile = path.join(__dirname, '..', 'public', '.nojekyll');
const outDir = path.join(__dirname, '..', 'out');
const destFile = path.join(outDir, '.nojekyll');

console.log('📦 Preparing deployment...');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
    console.error('❌ Error: out directory does not exist. Run npm run build first.');
    process.exit(1);
}

// Copy .nojekyll file
try {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✅ Copied .nojekyll to out directory');
} catch (error) {
    console.error('❌ Error copying .nojekyll:', error.message);
    process.exit(1);
}

// Deploy to gh-pages
console.log('🚀 Deploying to GitHub Pages...');
try {
    execSync('gh-pages -d out', { stdio: 'inherit' });
    console.log('✅ Deployment complete!');
} catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
}
