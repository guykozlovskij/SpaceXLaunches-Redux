import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SpecificLaunch from './SpecificLaunch';

describe('<SpecificLaunch />', () => {
  it('Should render the launch grid correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpecificLaunch/>, div)
  })
})