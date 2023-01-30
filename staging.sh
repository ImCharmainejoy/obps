rm -rf .nuxt
npm run generate
git add .
git commit -m "update dist"
git push origin staging