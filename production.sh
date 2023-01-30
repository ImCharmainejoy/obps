rm -rf .nuxt
npm run generate
git add .
git commit -m "update prod dist"
git push origin prod