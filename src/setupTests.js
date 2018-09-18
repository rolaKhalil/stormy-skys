import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

// Setup enzyme’s react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })
  //global.localStorage = localStorageMock