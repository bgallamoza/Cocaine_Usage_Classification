# Crack/Cocaine Usage Classification
## **Building a machine learning model to predict if you have/have not used crack/cocaine before**

Hello! This repository documents my entire process obtaining, cleaning, and using NSDUH survey data to construct a few models that predict if you have/have not used crack/cocaine before. These models include:

1. Random Forest Classifier
2. Logistic Regression
3. svm.LinearSVC

This process is laid out in two Jupyter Notebooks:

1. **Exploratory Data Analysis (EDA.ipynb)**: Process cleaning, exploring, and graphing the dataset
2. **Model_Building.ipynb**: Process creating a pipeline for data preprocessing and model building

To make my model more interactive, I also made a simple web application with Flask and a user interface built in HTML, JavaScript, and CSS. This allows users to obtain a prediction given their inputted data.

## **Libraries Used**
For this project, I used Anaconda version 2021.05, which should come with all necessary libararies used throughout the project. Notable libraries used include:
1. Sklearn
2. Pandas
3. Matplotlib/Seaborn
4. Flask/flask-cors

## **Summary**

The National Survey on Drug Use and Health (NSDUH) is the "leading source of statistical information on the use of illicit drugs, alcohol, and tobacco and mental health issues in the United States" (SAMHSA). **The abundance of Yes/No questions regarding the usage of illicit drugs make this dataset valuable for binary classification problems.**

Compared to substances such as alcohol and tobacco, crack/cocaine has a relatively smaller pool of individuals 12+ years old who have tried cocaine before (~2 million). **The smaller number of people who have used cocaine may indicate that a more specific subset of people try cocaine.** This would make crack/cocaine a strong candidate for a binary classification problem. Exploratory data analysis was conducted to find identifiable characteristics in people who have tried crack/cocaine. Fourteen features were used to train the model, which include:

1. Highest completed education
2. Number of days consumed alcohol in the past year
3. Race/Ethnicity

...and several others!

![alt text](/readme_pictures/EDA_plots.png "EDA Graphs")

Ultimately, **this model will be useful to those who want to make educated guesses about another individual's potential cocaine use based on limited information.** This can be especially helpful to social workers seeking to help others who may be using crack/cocaine.

## **Choosing a model**
Three different supervised classifiers were trained and tested: random forest classifier, logisitc regression classifier, and linear support vector machine classifier. For each model, different hyperparameters were tuned using GridSearchCV.

**Ultimately, the Random Forest Classifier was chosen for producing the most precise predictions for individuals who have used cocaine.** Considering our potential use case for our model, we want to avoid falsely accusing others of crack/cocaine use, so precision is prioritized over recall.

## **Running the Notebooks and Server**

Using the R script and running the Notebooks are optional. If you only want to run the server, please skip to "Running the Flask Server".

### **Getting the NSDUH Data through R**
R and Rstudio were used to read and concatenate RData files provided for years 2015-2019. To run the R script, download the RData files from 2015 to 2019, place them in the ```datasets``` folder, and run the script. You can find the datasets here:

https://www.datafiles.samhsa.gov/dataset/national-survey-drug-use-and-health-2015-nsduh-2015-ds0001

Alternatively, you can download the entire CSV on **Kaggle**, place it in ```datasets```, then run the Jupyter Notebooks:

https://www.kaggle.com/bgallamoza/national-survey-of-drug-use-and-health-20152019

### **Running the Flask Server**

To run the Jupyter Notebook cells and start the Flask server, I included a ```requirements.txt``` file to install all the necessary Python libraries. You can install these by navigating to your terminal and running:

```pip install -r requirements.txt```

Alternatively, if you have Anaconda installed, I included the environment I used to create this project, which can be installed in the terminal using:

```conda env create -f cocaine_usage_ml.yml```

and activated using:

```conda activate cocaine_usage_ml```

Next, run the Flask server by navigating to the ```server``` directory and running ```python server.py```

![alt text](/readme_pictures/flask.png "Starting the Flask server in Git Bash")

Now, you can open ```app.html``` in the ```client``` folder and enter your information for a prediction.

![alt text](/readme_pictures/website.png "Preview of the website, server/app.html")

Have fun!

## References

1. SAMHSA. (n.d.). Key Substance Use and Mental Health Indicators in the United States:  Results from the 2019 National  Survey on Drug Use and Health. SAMHSA. https://www.samhsa.gov/data/sites/default/files/reports/rpt29393/2019NSDUHFFRPDFWHTML/2019NSDUHFFR1PDFW090120.pdf. 