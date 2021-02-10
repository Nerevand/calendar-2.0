import { mount } from 'enzyme'

import App from '../App'

describe('App component', () => {
  test('should render successfuly', () => {
    const component = <App />
    const wrapper = mount(component)

    expect(wrapper).toMatchSnapshot()
  })
})