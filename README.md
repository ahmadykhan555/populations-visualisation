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

#### Screenshots: 
- Desktop View: 
<img width="1788" alt="Screenshot 2021-04-23 at 5 24 58 AM" src="https://user-images.githubusercontent.com/41294736/115813994-88f46d80-a3f4-11eb-9067-bf35306b47f0.png">
<img width="1788" alt="Screenshot 2021-04-23 at 5 25 41 AM" src="https://user-images.githubusercontent.com/41294736/115814006-8d208b00-a3f4-11eb-95ca-7eec16d1c6dd.png">

- Tablet View: 
<img src="https://user-images.githubusercontent.com/41294736/115814118-be00c000-a3f4-11eb-9632-5767f0d432c6.png" height = 550/>
<img src="https://user-images.githubusercontent.com/41294736/115814125-c0fbb080-a3f4-11eb-886f-f84f300c3f2b.png" height = 550/>
- Mobile View: 
<img src="https://user-images.githubusercontent.com/41294736/115814127-c22cdd80-a3f4-11eb-974b-bf47d7fce91b.png" height = 550/>
