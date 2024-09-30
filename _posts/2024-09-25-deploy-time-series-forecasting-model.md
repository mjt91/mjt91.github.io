---
title: Deploying a time series forecasting model 
categories:
  - blog
tags:
  - python
  - forecasting
excerpt: Using FastAPI and statsforecast
published: false
---


# Deploy a time Series Forecasting Model using FastAPI

In this post I will look into the [FastAPI framework]() for hosting a machine learning model.
As FastAPI got more and more tracktion in the field, I want to look into, how this differs from my default approach of using [Flask]().

1. Training a time series forecasting model locally using the statsforecast package.
1. Caching (saving) the model.
1. Building a FastAPI application to serve the time series model.
1. Testing the FastAPI deployment.

I build this example using a subset of the [M4 forecasting competition data]().

Lets first have a look at the data:


```python
import pandas as pd

# Hourly data from m4 forecasting competition
dataf = pd.read_parquet("data/m4-hourly.parquet")

dataf.head()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>unique_id</th>
      <th>ds</th>
      <th>y</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>H1</td>
      <td>1</td>
      <td>605.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>H1</td>
      <td>2</td>
      <td>586.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>H1</td>
      <td>3</td>
      <td>586.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>H1</td>
      <td>4</td>
      <td>559.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>H1</td>
      <td>5</td>
      <td>511.0</td>
    </tr>
  </tbody>
</table>
</div>


It is interesting to note, that the datetime column `ds` consists of integers (as this is hourly data) and was a design decision in the M4 forecasting competition.


```python
import os

# this makes it so that the outputs of the predict methods have the id as a column 
# instead of as the index
os.environ['NIXTLA_ID_AS_COL'] = '1'
```

In the next step I will select the subset of the data for efficiency. It is possible to select more (see first comment line in the next code block or even train it on the whole data).


```python
# uids = dataf['unique_id'].unique()[10:] # Select the first ten ids
uids = ["H1", "H2"]
dataf = dataf.query('unique_id in @uids')
dataf = dataf.groupby('unique_id').tail(7 * 24) #Select last 7 days of data to make example faster

# Show data shape
print(dataf.shape)
# Look at the first five rows
print(dataf.head())
```

    (336, 3)
        unique_id   ds      y
    580        H1  581  587.0
    581        H1  582  537.0
    582        H1  583  492.0
    583        H1  584  464.0
    584        H1  585  443.0


In the modeling step I chose to go with [statsforecast]() from nixtla.
I really enjoy the API and documentation. It is a very nice choice for time series forecasting (and I tried alot: sklearn, prophet by meta, custom-self-build, deep learning for TS, ...).

Again, for efficiency I only added an AutoARIMA model here. Note, that the `freq=1` parameter fits the _hourly_ datetime format from the data.

The de-facto way of saving a model is [joblib](). This is used here as well.


```python
from statsforecast import StatsForecast
from statsforecast.models import AutoARIMA
import joblib

# Train the AutoARIMA model using StatsForecast
model = StatsForecast(models=[AutoARIMA()], freq=1)
model.fit(dataf)

# Forecast future values (let's forecast the next 10 days)
# future_dates = pd.date_range(start=df['ds'].max() + pd.Timedelta(days=1), periods=10, freq='D')
forecasts = model.predict(10)

# Display the forecast
print(forecasts)

# Save the trained model
joblib.dump(model, './stored/autoarima_model.pkl')

```
       unique_id   ds    AutoARIMA
    0         H1  749   622.187886
    1         H1  750   581.155509
    2         H1  751   550.734738
    3         H1  752   517.400937
    4         H1  753   491.014492
    5         H1  754   469.671578
    6         H1  755   452.002328
    7         H1  756   437.020827
    8         H1  757   424.017250
    9         H1  758   412.480311
    10        H2  749  2743.298956
    11        H2  750  2586.936315
    12        H2  751  2469.607715
    13        H2  752  2390.060668
    14        H2  753  2322.524646
    15        H2  754  2257.373984
    16        H2  755  2194.444837
    17        H2  756  2133.595240
    18        H2  757  2074.701456
    19        H2  758  2017.654962


    ['./stored/autoarima_model.pkl']



Optional step is testing the model to see if loading the model and running the predict method is working as intended


```python
# Load the cached AutoARIMA model
model = joblib.load('./stored/autoarima_model.pkl')
```


```python
model.predict(2)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>unique_id</th>
      <th>ds</th>
      <th>AutoARIMA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>H1</td>
      <td>749</td>
      <td>622.187886</td>
    </tr>
    <tr>
      <th>1</th>
      <td>H1</td>
      <td>750</td>
      <td>581.155509</td>
    </tr>
    <tr>
      <th>2</th>
      <td>H2</td>
      <td>749</td>
      <td>2743.298956</td>
    </tr>
    <tr>
      <th>3</th>
      <td>H2</td>
      <td>750</td>
      <td>2586.936315</td>
    </tr>
  </tbody>
</table>
</div>



# Deploy Model using FastAPI
