cd ./public/dataset/
python onos.py --adc lpa
cd ..
cd ..
git status
git add .
git commit -m "[$(date)] Added LPA images to training data"
git push

