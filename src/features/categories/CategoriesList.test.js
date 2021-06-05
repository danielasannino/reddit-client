import { CategoriesList } from './CategoriesList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const { shallow } = require('enzyme');

const mockStore = configureStore([])
const store = mockStore()

describe('CategoriesList component', () => {

    it('should render with the given state from redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <CategoriesList />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})