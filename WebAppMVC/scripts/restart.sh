cd ../
echo "Restarting WebAppMVC..."

echo %NODE_ENV%
echo %YARN_CACHE_FOLDER%

echo "Removing node_modules..."
rm -rf node_modules

echo "Removing all lock files..."
rm -rf package-lock.json
rm -rf yarn.lock

echo "Installing dependencies..."
yarn install

echo "Done.