cd ./public/dataset/
python onos.py --adc normal
git add .
git commit -m "[$(date)] Added normal image to training dataset"
git push
