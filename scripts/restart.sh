echo "Restarting workspace root..."

cd ../

echo "Removing node_modules..."
rm -rf node_modules

echo "Removing all lock files..."
rm -rf package-lock.json
rm -rf yarn.lock

rm -rf .yarn/cache 

echo "Running yarn cache clean..."
yarn cache clean

echo "Running yarn install..."
yarn install