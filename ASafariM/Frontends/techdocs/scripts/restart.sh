echo "Restarting TechDocs..."

cd ../

echo "Removing node_modules..."
rm -rf node_modules

echo "Removing all lock files..."
rm -rf package-lock.json
rm -rf yarn.lock

echo "Installing dependencies..."
yarn install

echo "Done.