# Sneakers R' Us

## Description

Sneakers R' Us is a website for your local sneaker head to safely buy/sell their new/used sneakers. They can also buy accessories for their sneakers or find accessories links for other websites.

## MVP
* Back-end Routes
* Front-end Design
* CSS styling
* Links to other websites

## Post-MVP
* Communication between buyer and seller

## Wireframes
### Home Page
![Home Page](https://i.imgur.com/bBLOCwK.png)
### Sign-Up Page
![Sign-Up](https://i.imgur.com/glVYutF.png)
### Sign-In Page
![Sign-In](https://i.imgur.com/5fYFcqm.png)
### Create Post
![Create Post](https://i.imgur.com/MIvZ7qP.png)
### Sneakers Page
![Sneakers](https://i.imgur.com/yPbMSY9.png)
### Accessories Page
![Accessories](https://i.imgur.com/6KKbGyd.png)
### Users Page
![Users](https://i.imgur.com/KoqP2QE.png)
### Update Post
![Update Post](https://i.imgur.com/8s1WpZq.png)

## Component Heirarchy

## ERD Entity Relationship Diagram
![ERD Image](https://i.imgur.com/ctorr2X.png)

## Built With
* [React](https://reactjs.org/) - Front-End JavaScript library
* [Rails](https://rubyonrails.org/) - Back-End Framework
* [WireFrame](https://wireframe.cc/) - WireFrame
* [Draw.io](https://www.draw.io/) - ERD 

## List of server-side routes
* get '/sneakers/', to: 'sneakers#index'
* get '/sneakers/:id', to: 'sneakers#show'
* post 'sneakers/', to: 'sneakers#create'
* put 'sneakers/:id', to: 'sneakers#update'

* get '/accessories/', to: 'accessories#index'
* get '/accessories/:id', to: 'accessories#show'
* post 'accessories/', to: 'accessories#create'
* put 'accessories/:id', to: 'accessories#update'

* post '/auth/login', to: 'authentication#login'
* get '/auth/verify', to: 'authentication#verify'

## An explanation of the major challenges you expect to face while building this app
* I think the major challenge i expect to face will be creating the back-end routes. I am still getting more familiar with Ruby on Rails but with more practice i will become more comfortable

## Timeframes