cd ./public/dataset/
python3 onos.py -s
git add .
git commit -m "Dataset update for: $(date)"
git push