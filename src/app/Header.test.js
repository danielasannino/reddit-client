import { Header } from './Header';
const { shallow } = require('enzyme');

describe('Header Component', () => {
    it('renders the header component without crashing', () => {
        shallow(<Header />)
    })
})