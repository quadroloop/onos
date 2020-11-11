cd ./public/dataset/
python onos.py -s
git add .
git commit -m "Dataset update for: $(date)"
git push