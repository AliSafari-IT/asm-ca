// first build my scss files to css files then run my dotnet app in debug mode
const exec = require('child_process').exec;

// build scss files into css commands
const buildTailwind = exec('npx tailwindcss -i ./wwwroot/css/tailwind.scss -o ./wwwroot/css/site.min.css --minify');
const buildCustom = exec('npx tailwindcss -i ./wwwroot/css/tailwind.scss -o ./wwwroot/css/site.min.css --minify');
const layoutStyles = [buildTailwind, buildCustom];

layoutStyles.forEach(buildCss => {
    buildCss.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    buildCss.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    buildCss.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
})

// run dotnet app in debug mode
exec('dotnet watch run');

