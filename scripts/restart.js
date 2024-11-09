const { execSync } = require('child_process');
const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

try {
  console.log('Restarting...');

  // Remove node_modules directory
  rimraf.sync('node_modules');

  // Remove yarn.lock
  if (fs.existsSync('yarn.lock')) {
    fs.unlinkSync('yarn.lock');
  }

  // Remove package-lock.json
  if (fs.existsSync('package-lock.json')) {
    fs.unlinkSync('package-lock.json');
  }

  // Clean yarn cache
  execSync('yarn cache clean', { stdio: 'inherit' });

  // Install dependencies
  execSync('yarn install', { stdio: 'inherit' });

  console.log('Restart completed successfully.');
} catch (error) {
  console.error('Error during restart:', error);
  process.exit(1);
}
