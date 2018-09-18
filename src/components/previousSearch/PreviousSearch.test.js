import { shallow, configure } from 'enzyme'
import PreviousSearch from './PreviousSearch';
import renderer from 'react-test-renderer'

describe('<PreviousSearch />', () => {
  it('renders without crashing', () => {
      const tree = renderer.create(
          < PreviousSearch weatherStateAbbr={'sn'}/>

      )
      expect(tree.toJSON()).toMatchSnapshot()
  });
})