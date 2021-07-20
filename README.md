# Crack/Cocaine Usage Classification
## Building a machine learning model to predict if you have/have not used crack/cocaine before

Hello! This repository documents my entire process obtaining, cleaning, and using NSDUH survey data to construct a model that predicts if you have/have not used crack/cocaine before.

The National Survey on Drug Use and Health (NSDUH) is the "leading source of statistical information on the use of illicit drugs, alcohol, and tobacco and mental health issues in the United States" (Samhda). The abundance of Yes/No questions regarding usage of illicit drugs make this dataset valuable for a binary classification problem. 

Compared to substances such as alcohol and tobacco, crack/cocaine has a relatively smaller pool of individuals 12+ years old who have tried cocaine before (~2 million). Exploratory data analysis was conducted to find identifiable characteristics in people who have tried crack/cocaine. Explored features include (but are not limited to):
1. Highest completed education
2. Number of days consumed alcohol in the past year
3. Race/Ethnicity

...and many others!

## Models Tested
Three different models were tested during my process using the Sklearn library:

1. Random Forest Classifier
2. Logistic Regression
3. svm.LinearSVC

Ultimately, the Random Forest Classifier was chosen for producing the most precise predictions for individuals who have used cocaine. To make this model more interactive, I set up a Flask server to request a prediction based on user information, where a prediction is returned as a response.

## Running the Files

### R Script and Jupyter Notebooks
Text

### Running the Flask Server
In progress!

## Necessary libraries
For this project, I used Anaconda version 2021.05, which should come with all necessary libararies used throughout the project. Notable libraries used include (but are not limited to):
1. Sklearn
2. Pandas
3. Flask

## References

1. https://www.datafiles.samhsa.gov/dataset/national-survey-drug-use-and-health-2015-nsduh-2015-ds0001
2. https://www.samhsa.gov/data/sites/default/files/reports/rpt29393/2019NSDUHFFRPDFWHTML/2019NSDUHFFR1PDFW090120.pdf