cd ./public/dataset/
python onos.py --adc typhoon
cd ..
cd ..
git add .
git commit -m "[$(date)] Added typhoon image to training dataset"
git push
