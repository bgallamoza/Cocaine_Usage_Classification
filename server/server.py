from flask import Flask, request, jsonify
import utils

app = Flask(__name__)

@app.route('/get_column_info', methods=['GET'])
def get_column_info():
    return utils.get_col_info()

@app.route('/predict_crkcoc_usage', methods=['GET', 'POST'])
def predict_crkcoc_usage():
    answers = []
    for col in utils.get_data_columns():
        answers.append(int(request.form[col]))
    
    response = jsonify({
        'crkcoc_pred': utils.make_prediction(utils.get_model(), utils.get_pipeline(), [answers])
    })

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server for Cocaine/Crack Usage Prediction")
    utils.set_col_info('data_columns.json')
    utils.set_model('randforest_model.pickle')
    utils.set_pipeline('pipeline.pickle')
    app.run()