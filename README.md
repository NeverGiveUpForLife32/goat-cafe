# Description 
### This application is a online option for ordering organic foods all while wanting to save some money while doing it.
----------------------------------------------------------------------------------------------------------------------------------------------------
# Getting Started
1. clone the repo 
    - git@github.com:NeverGiveUpForLife32/goat-cafe.git

3. touch .env
4. SECRET= 

2. npm install :point_down:
----------------------------------------------------------------------------------------------------------------------------------------------------
## Installation
--- 
- npm install express 
- npm install morgan
- npm install gulp
- npm install mongodb-memory-server
- npm install webpack
- npm install mongoose
- npm install dotenv
---------------------------------------------------------------------------------------------------------------------------------------------------
# RESRful Routes 

## USER 

| Action | Method | Path | Action |
| -----------| ----------- | ----------- | ----------- |
| create | Post | / | Creates a User |
| login| Post | /login | logs in a created User |
| index| GET | /check-token | |




## items 

| Action | Method | Path | Action |
|-----------| ----------- |----------- | ----------- |
| index | Get | / | shows a list of items |
| index | Get | /:id | shows a single item |


## orders 

| Action | Method | Path | Action |
|-----------| ----------- |----------- | ----------- |
| index | Get |/cart| Shows items in cart|
| index | Get | /history | previous orders |
| create | POST |/cart/items/:id| |
| create | POST |/cart/checkout | |
| update | PUT | /cart/qty |  |
