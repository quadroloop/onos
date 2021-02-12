cd ./public/dataset/
python3 onos.py --adc lpa
cd ..
cd ..
git status
git add .
git commit -m "[$(date)] Added LPA images to training data"
git push

