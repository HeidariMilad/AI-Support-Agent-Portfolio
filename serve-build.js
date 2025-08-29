const { spawn } = require('child_process');

// Run build
console.log('Building React app...');
const build = spawn('npm', ['run', 'build'], { stdio: 'inherit', shell: true });

build.on('exit', (code) => {
  if (code !== 0) {
    console.error('\n❌ Build failed');
    process.exit(code);
  }
  // Serve build directory
  console.log('\nStarting static server at http://localhost:5000 ...');
  const server = spawn('npx', ['serve', '-s', 'build', '-l', '5000'], { stdio: 'inherit', shell: true });
  server.on('exit', (code) => {
    process.exit(code);
  });
});

