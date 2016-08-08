![Electronylon](/../master/assets/art/web/electronylon-icontext.png)

## Electronylon: the Electron, Babylon.js, & React boilerplate
A boilerplate  application with the following technologies wired up for your developing pleasure:
* [Electron](http://electron.atom.io/)
* [Babylon.js](http://www.babylonjs.com/)
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Babel](https://babeljs.io)

### Why?
I'm working on a game with the intention of writing it entirely in JavaScript. For me, React/Redux is the absolute pinnacle of UI development at the moment. Having done a small amount of game development in the past, I'm frequently haunted by memories of how unnecessarily difficult UI development can be in a game engine. I'm hoping to bridge this gap with Electronylon. Using Babylon for the 3d engine and React floating above the canvas, I believe we can achieve a more sane development experience.


### Set up:
```bash
# Clone this repository
git clone https://github.com/mmmeff/Electronylon
# Go into the repository
cd Electronylon
# Install dependencies and run the app
npm install && npm start
```

### Roadmap:
* [] Add Redux for state management
* [] Livereload?
* [] Build out sample React application over 3d scene
* [] Build interop layer between Babylon scene and Redux state
* [] Create a more interesting example scene controlled by the React app
* [] Port to a generator like slush or yeoman
