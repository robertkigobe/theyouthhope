echo "Updating Git"

echo "git checkout -b announcements"
git add .
git commit -m "announcements"
git push --set-upstream origin announcements

echo "Building app"
npm run build 

echo "Deploying to server"
scp -r build/* rkigobe@161.35.3.254:/var/www/161.35.3.254

echo "done https://getcssscan.com/css-buttons-examples"

echo "cleaning up"   