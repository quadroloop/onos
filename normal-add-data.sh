cd ./public/dataset/
python onos.py --adc normal
cd ..
cd ..
git add .
git commit -m "[$(date)] Added normal image to training dataset"
git push
