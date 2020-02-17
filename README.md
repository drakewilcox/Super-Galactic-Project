# _Super Galacic Age Calculator_

#### _Friday Project for Week 5 of Epicodus_

#### By _**Drake Wilcox**_

## Description

This Project is an exercise in using Test Driven Development and focuses on the business logic of a program that calculates the age of a user if they were on different planets. 

## Specifications
| Specification | Input | Output |
|:--------------|:------|:-------|
|Allow the user to input their age |Input: 30 |   Output: 40 |
| Calculate inputted age as age on Mercury | Input: 30 | Output: 125 |
| Calculate inputted age as age on Venus | Input: 30 | Output: 48 |
| Calculate inputted age as age on Mars | Input: 30 | | Output: 15 |
| Calculate inputted age as age on Jupiter | Input: 30 | Output: 2 |
| Return life expectancy if user sex is male | Input: Male | Output : 76 |
| Return life expectancy if user is female | Input: Female | Output: 81 |
| Return amount of years the user has to live based on life expectancy| Input: Sex-Male | Age-30 Output: 46 |
| Return amount of years the user has to live on each planet |Input: Sex-Male Age-30 Planet-Mars | Output: 24 |
| Return the amount of years a user has lived past life-expectancy if applicaple | Input: Sex-Male Age- 80 | Output: 4 |

## Setup/Installation Requirements

To use this application, follow the following instructions. 

#### Node Installation

##### For macOS: 

_If Homebrew is not installed on your computer, enter the following two commands in the terminal:_ 
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:PATH' >> ~/.bash_profile

_Installing Git:_
* $ brew install git

_Installing Node.js:_
* $ brew install node

##### For Windows: 
_Visit the [node.js](https://nodejs.org/en/download/) web for installation instructions_

#### Application Setup:
_Clone this repository via Terminal using the following commands:_
* ``$ cd desktop``
* ``$ git clone https://github.com/drakewilcox/doctor-lookup``
* ``$ cd doctor-lookup``

_Install node package manager (npm) at the project's root directory via the following command:_
* ``$ npm install``

_Open this application via live server using the following command:_
* ``$ npm run start``
## Known Bugs

_No known bugs at this time_

## Technologies Used

* _Javascript_
* _jQuery_
* _HTML_
* _CSS_
* _Bootstrap_
* _Jest_
* _npm_
* _webpack_

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Drake Wilcox_**