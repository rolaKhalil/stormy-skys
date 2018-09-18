import React from 'react'
import { shallow, configure } from 'enzyme'
import Title from './Title';
import renderer from 'react-test-renderer'

describe('<Title />', () => {
    it('renders without crashing', () => {
        const tree = renderer.create(
            <Title />
        )
        expect(tree.toJSON()).toMatchSnapshot()
    });
})