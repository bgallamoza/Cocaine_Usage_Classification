from flask import Flask, request, jsonify
from flask_cors import CORS
import utils

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins":"*"
    }
})

@app.route('/get_column_info', methods=['GET'])
def get_column_info():
    return utils.get_col_info()

@app.route('/predict_crkcoc_usage', methods=['GET', 'POST'])
def predict_crkcoc_usage():
    """Request information is transferred into a 2D array, which is then preprocessed by an
    initialized pipeline. Pipeline output is fed into the model, where a prediction result is
    finally sent into a json as a response"""

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