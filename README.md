# KU-safety-place

* Visit our web application at: https://cryptic-plains-93811.herokuapp.com
* Visit our API swagger tool at: https://kuplace.herokuapp.com/ku-place/ui/

A web application that aims to help students who have to travel in Kasetsart University at night to find the safest route to their destination by providing some useful information such as, the amount of light in a particular area(measure with light sensor), the number of security guards in the area, and the amount of PM2.5 in the area.

This application is a part of Data Acquisition and Integration 01219334 course at Kasetsart University, written with node using Express.

## Table of contents

* [Project overview](#project-overview)
* [Features](#features)
* Database Schemas 
* Required libraries and tools
* Instruction to run our web app locally
* Team members
* Project presentation and slide

## Project overview

### Vision

Since there are many students who have to travel in the university at night. KU safety place is aims to provide some useful information which will help our friends to identify the safest route to reach their destination. Moreover, the university management team will have a better idea of which location that they should increase light and security guard. Finally, the content in our web application is presented in the Thai language, because our main target users are Thai students.

### Architecture

The development process of this application is consistent with 4 main parts. Which are

* Data acquisition
* Data integration
* Data sharing
* Data visualization

<img width="600" alt="1" src="https://user-images.githubusercontent.com/59832457/145676720-e37bfc8f-d73f-41c0-83c7-94d12542f1a5.png">

## Features

1. User can select a location and be able to see the amount of light in the area.
<p>
<img width="600" alt="4" src="https://user-images.githubusercontent.com/59832457/145677132-75b8ff26-6696-420d-a469-98144cc8de3e.png">
<p>
2. User can select a location and be able to see distance between the location and each security post in the area
<p>
<img width="600" alt="3" src="https://user-images.githubusercontent.com/59832457/145677098-2bf90ab1-d267-48f9-bdb5-c8c5124a3f7d.png">
<p>
3. User can select a location and be able to see the amount of PM2.5 in the area.
<p>
<img width="600" alt="2" src="https://user-images.githubusercontent.com/59832457/145677057-026db88a-a69f-4f4a-8f79-48e636b66951.png">

## Database schemas
  
Our web application is consists of 4 main schemas. Which are kuPlace that use to store the building name and latitude/longitude of each building, kuLight that use to store the amount of light at its timestamp in a particular area, PM that use to store the amount of PM2.5 in a particular area, and kuSecurity that is used to store images link of the security post and its latitude/longitude. 

<img width="600" alt="8" src="https://user-images.githubusercontent.com/59832457/145678051-bc0f1675-19a5-46db-94dd-f3ba70463992.png">
  
## Requirements
  
For those who want to run our application locally. Here are some requirements

1. Requirements for Swagger tool
  * Python 3.4 or later
  * Java 1.8.0 or later
2. Requirements for KU-safety-place application
  * Node JS 16.13.0 or later

## Running instruction
  
Keep in mind that you can visit our deployed web application by the following links
  * Visit our web application at: https://cryptic-plains-93811.herokuapp.com
  * Visit our API swagger tool at: https://kuplace.herokuapp.com/ku-place/ui/
  
However, in order to run our application locally
  
### 1. Run API swagger tool
  
1.0) Nevigate to the API directory
  ```
  cd KU-safety-place/API
  ```
1.1) Connect to the database
  ```
  create file config.py(see example in config.py.example)
  ```
1.2) Set the virtualm environment
  ```
  python -m venv env
  ```
1.3) Activate the environment
  ```
  env\Scripts\activate.bat
  ```
1.4) Execute the jar file (include in the repository)
  ```
  java -jar openapi-generator-cli-5.3.0.jar generate -i openapi/ku-place-api.yaml -o autogen -g python-flask
  ```
1.5) Install the requirements
  ```
  pip install -r requirements.txt
  ```
1.6) Run the app.py file
  ```
  python app.py
  ```
1.7) Visit our open api at
  ```
  http://localhost:8080/ku-place/ui
  ```
### 2. Run KU-safety-place web application
  
2.0) Navigate to KU-safety-place directory
  
  ```
  cd KU-safety-place
  ```
2.1) Run the application
  
  ```
  node app.js
  ```
  
## Team members
  |Name| Student ID|
  |--|--|
  |[Auttakrit  Wongsarawit](https://github.com/markna551) |                  6210546455|
  |[Saruj  Sattayanurak](https://github.com/Jomsaruj)|	                      6210545700|
  |[Setthanat  Kladee](https://github.com/Ing140943)|                        6210546021|
  
## Project presentation and slide

  - [Presentation Slide]( https://docs.google.com/presentation/d/1y-V6GbWopheRIy6sRsC7chnM_kh7ib3XjgsGeibGwF0/edit?usp=sharing)
  - [Presentation Video]()



