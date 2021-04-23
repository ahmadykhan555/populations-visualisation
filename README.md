### Population Visualization

This project compares different countries' population data and visualizes them in a meaningful intuitive manner

### Running the app

- Make sure you have the latest LTS version of NodeJs https://nodejs.org/en/download/
- This app is created using npx create-react-app and utilizes yarn as the dependency manager.
- To install yarn simply run `npm install --global yarn`.
- Make sure to run `yarn install` to install all project dependencies.
- To run the app open this project in vs-code and open the terminal 'control + ` ' or use your preferred terminal and go to the directory.
- Run `yarn start` (see instructions for running with mapbox below).
- Open your preferred browser at `http://localhost:3000`.

#### Adding MapBox Access token

- In order to show the map, you need to have an access token from mapbox. You can create a new one for yourself using the following link https://account.mapbox.com/access-tokens/
- next you need to use the terminal to pass in the secret access token.
- For Mac/Linux run`REACT_APP_MAP_ACCESS_TOKEN=yourToken yarn start`
- For Windows run `set "REACT_APP_MAP_ACCESS_TOKEN=yourToken" && yarn start`
