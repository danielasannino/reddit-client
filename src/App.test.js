import App from './App';

const { shallow } = require('enzyme');


describe('App component shallow rendering', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
