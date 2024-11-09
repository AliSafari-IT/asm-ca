cd ../

# build scss files into css
npx tailwindcss -i ./wwwroot/css/tailwind.scss -o ./wwwroot/css/site.min.css --minify
npx tailwindcss -i ./wwwroot/css/custom.scss -o ./wwwroot/css/custom.min.css --minify

# run app
dotnet run

# open in browser
start http://localhost:5000