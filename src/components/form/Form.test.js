import React from 'react'
import { shallow, configure } from 'enzyme'
import Form from './Form'
import renderer from 'react-test-renderer'

describe('<Form />', () => {
    it('renders without crashing', () => {
        const tree = renderer.create(
            <Form getWeather={'on submit function'} />
        )
        expect(tree.toJSON()).toMatchSnapshot()
    });
})