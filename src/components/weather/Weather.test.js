import React from 'react'
import { shallow, configure } from 'enzyme'
import Weather from './Weather';
import renderer from 'react-test-renderer'

describe('<Weather />', () => {
  it('renders without crashing', () => {
      const tree = renderer.create(
          < Weather weatherStateAbbr={'sn'} city={'Toronto'} country={'Canada'} applicabledDate={'2018-11-19'} weatherStateName={'Light Snow'} minTemp={'-10'} maxTemp={'0'} theTemp={'-2'} humidity={'0'} error={'no error'}/>

      )
      expect(tree.toJSON()).toMatchSnapshot()
  });
})