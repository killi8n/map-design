echo "removing lib directory..."
rm -rf ./lib
echo "compiling components..."
yarn build:components
echo "extracting type..."
yarn build:types
echo "compiling es module..."
yarn build:esm
echo "compiling commonjs..."
yarn build:cjs
echo "copying package.json to inside lib directory"
cp ./package.json ./lib/package.json