# Gallery of My Life App

## Description

_Duration: 3 day sprint_

This is my first app built with React.  It implements all four CRUD operations in a simple "Gallery of My Life."  There are a few photos laid out in a grid with like and delete buttons. There is also a form at the top to add more images.

## Screenshot

![App in use:](https://github.com/aaron-r-rogers/weekend-sql-to-do-list/blob/master/server/public/images/screenshot.png)

### Prerequisites

- [React](https://reactjs.org/)
- Other dependencies can be viewed/installed via the accompanying package.json.

## Installation

1. Create a database named `react_gallery`
2. The queries in the `database.sql` file are set up to create all the tables and populate the data for the app to run properly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. Postico is recommended to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`. (I use [Visual Studio Code](https://code.visualstudio.com/).)
4. Run `npm run server` in your terminal
4. Run `npm run client` in your terminal. This will open a new tab in your browser at localhost:3000

NOTE: The data in database.sql is based on relative URLs of my images.  You may use absolute URLs if you want to add your own images.

## Usage

1. To add an image, enter the title, description, and absolute url of the image.
2. Then click the submmit button
3. The image will be added to the database and appear below the input form.
4. The images will maintain the order that they are added and use a grid presentation.
5. The like button increments a count in the database and shows the user that value.
6. The delete button deletes the corresponding image.
7. Clicking on the image reveals the description of the image, and clicking the descriptions returns to the image.

## Built With

React, with help from Material-UI and PostgreSQL.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io), especially Edan and the Woodall Cohort, who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [rogers.aaron.r@mail.com](mailto:rogers.aaron.r@gmail.com)

