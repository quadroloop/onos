
echo "Compressing training datasets.."
node compress_training_dataset.js

echo "Waiting for 10secs"
sleep 10
rm -rf ./public/neural_engine/data/train && rm -rf ./public/neural_engine/data/validation
mv ./public/neural_engine/data/train-compressed ./public/neural_engine/data/train && mv ./public/neural_engine/data/validation-compressed && ./validation
rm -rf ./public/neural_engine/data/train-compressed && rm -rf ./public/neural_engine/data/validation-compressed
