# Import necessary libraries
library(data.table)
library(dplyr)

# Set your working directory in the datasets directory, for example:
# setwd("C:/PYTHON/PROJECTS/crkcoc_usage_ml/datasets")

# Vector of each dataset year, which is converted to strings
datasets <- as.character(2015:2019)

total_data <- data.table()

# Sequentially load, modify, and append each dataset
for (year in datasets) {
  
  # Get and load filepath
  file <- paste("NSDUH_", year, ".RData", sep="")
  load(file)
  
  # Each RData environment has a df beginning with "PUF"
  # we generalize the name to just df here and remove the "PUF" df
  df_name <- ls(pattern=glob2rx("PUF*"))
  df <- get(df_name)
  setDT(df)
  rm(list=ls(pattern=glob2rx("PUF*")))
  
  # Remove unnecessary columns
  df[, c("QUESTID2", "filedate") := NULL]
  
  # Add Year to dataframe
  df[, ':=' (year = as.integer(year))]
  
  total_data <- bind_rows(total_data, df)
  
  # Removes currently loaded chunk to save memory
  rm(df)
}
# Normalize column names by making them all lowercase
names(total_data) <- tolower(names(total_data))

# Write appended data to a new csv
write.table(total_data, file="NSDUH_2015-2019.csv", sep=",", row.names=FALSE)

# We now move to the Jupyter Notebook for Data Cleaning and Analysis