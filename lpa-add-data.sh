cd ./public/dataset/
python onos.py --adc lpa
git status
git add .
git commit -m "[$(date)] Added LPA images to training data"
git push

