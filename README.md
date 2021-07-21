# Crack/Cocaine Usage Classification
## **Building a machine learning model to predict if you have/have not used crack/cocaine before**

Hello! This repository documents my entire process obtaining, cleaning, and using NSDUH survey data to construct a few models that predict if you have/have not used crack/cocaine before. These models include:

1. Random Forest Classifier
2. Logistic Regression
3. svm.LinearSVC

## **Libraries Used**
For this project, I used Anaconda version 2021.05, which should come with all necessary libararies used throughout the project. Notable libraries used include:
1. Sklearn
2. Pandas
3. Matplotlib/Seaborn
4. Flask/flask-cors

## **Summary**

The National Survey on Drug Use and Health (NSDUH) is the "leading source of statistical information on the use of illicit drugs, alcohol, and tobacco and mental health issues in the United States" (SAMHSA). **The abundance of Yes/No questions regarding the usage of illicit drugs make this dataset valuable for binary classification problems.**

Compared to substances such as alcohol and tobacco, crack/cocaine has a relatively smaller pool of individuals 12+ years old who have tried cocaine before (~2 million). **The smaller number of people who have used cocaine may indicate that a more specific subset of people try cocaine.** This would make crack/cocaine a strong candidate for a binary classification problem. Exploratory data analysis was conducted to find identifiable characteristics in people who have tried crack/cocaine. Explored features include (but are not limited to):

1. Highest completed education
2. Number of days consumed alcohol in the past year
3. Race/Ethnicity

...and many others!

## **Models Tested**
Three different models were tested during my process using the Sklearn library:

Ultimately, the Random Forest Classifier was chosen for producing the most precise predictions for individuals who have used cocaine. To make this model more interactive, I set up a Flask server to request a prediction based on user information, where a prediction is returned as a response.

## **Running the Files**
If you just want to access the model, simply follow "Running the Flask Server."

### R Script
R and Rstudio was used to read and concatenate RData files provided for years 2015-2019. To run the R script, download the RData files from 2015 to 2019, place them in a folder, and run the script with your directory set to that folder. You can find the datasets here:

https://www.datafiles.samhsa.gov/dataset/national-survey-drug-use-and-health-2015-nsduh-2015-ds0001

### Jupyter Notebook
Anaconda should be installed, containing all the necessary libraries to run the code cells in my Jupyter Notebooks. You can install Anaconda here:

https://www.anaconda.com/products/individual

### Running the Flask Server
Again, Anaconda should have the necessary libraries to run the Flask server. Additionally, you will need the flask-cors library, which you can download by typing the following into your terminal:

```conda install -c conda-forge flask-cors```

Next, run the Flask server by navigating to the ```server``` directory and running ```python server.py```

Now, you can open ```app.html``` in the ```client``` folder and enter your information for a prediction. Have fun!

## References

1. SAMHSA. (n.d.). Key Substance Use and Mental Health Indicators in the United States:  Results from the 2019 National  Survey on Drug Use and Health. SAMHSA. https://www.samhsa.gov/data/sites/default/files/reports/rpt29393/2019NSDUHFFRPDFWHTML/2019NSDUHFFR1PDFW090120.pdf. 