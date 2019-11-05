# React-Clicky-Game

This is my first app build with React. It is a simple clicky game where the user will get points for each unique image clicked and loose when they click the same image more than once. After each click, the images randomly re-arrange themselves.

## Live Link

A live version of the website can be found is hosted on [Heroku](https://mysterious-reaches-15452.herokuapp.com/).

## Components

This portfolio was built using the following languages, libraries, and servers.

- HTML
- CSS
- Bootstrap
- JavaScript
- React

## Header

The header displays the name of the app, the current state of the game (start/correct guess/incorrect guess) and the current score and any top score reached. The current score resets any time an incorrect image is clicked while the top score will display the highest score reached in this instance of the game.

## Images

This images are arranged in a grid. Once an image is clicked, they are randomly redistributed. The user continues to get points for each unique image clicked. Once they click on an image for the second time, the game resets and they can try to beat their old score.
