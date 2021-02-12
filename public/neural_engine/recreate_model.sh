echo "Model Recreation Started.."
echo "Deleting Shard files.."
rm -rf *.bin
echo "Deleting current model.."
rm -rf model.json
echo "Recreating model..."
python3 keras_img_classifier.py
echo "Done."
