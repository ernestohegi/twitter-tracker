# ツイッター Tracker
### Work in progress

## How to install and use

- This project requires Node's latest version installed.
- Checkout the repository.
- Run `npm install`.
- Create a *twitter-configuration.js* file from the example one.
- Load your Twitter app credentials into the created configuration file.
- Run `node twitter-tracker --track=[MY_TRACKING_QUERY]` to start the tracker.
- Run `node frontend` to start the frontend.

## Mechanics

This application is composed of two parts. The first one is the Twitter tracker. The second one is the frontend.

Both parts of the application use Socket.io to communicate between themselves. Once a new tweet is received on the tracker, a *tweet* event is emitted with the tweet id, user screen name and tweet message. This event is in turn listened by the frontend. Once the event is received, a new tweet element is prepended on the tweets container.

## Technologies

This application was built with:
Node.js, Express, JavaScript, Socket.io, CSS and HTML.

## Questions

If you have any questions or anything's wrong, please send me an e-mail to <a href="mailto:ernesto.hegi@gmail.com"> ernesto.hegi@gmail.com</a>

## Next steps

- Integrate unit and functional tests (sorry for that future self).
- Clean the code.
