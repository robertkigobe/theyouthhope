
name="adding_flex"
echo "git checkout -b "$name
git checkout -b $name
git add .
git commit -a -m $name
git push --set-upstream origin $name
git checkout main
git pull

echo "Building app"
npm run build 

echo "Deploying to server"
scp -r build/* rkigobe@161.35.3.254:/var/www/161.35.3.254

echo "done https://getcssscan.com/css-buttons-examples"

echo "cleaning up"   