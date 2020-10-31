import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { appContext } from '../../context/appContext';

import Join from '../Join';

jest.mock('../../Alert/Alert', () => ({
  default: () => null,
  __esModule: true,
}));

const value = {
  name: '',
  room: '',
  setRoom: jest.fn(),
  setName: jest.fn(),
  setAlert: jest.fn(),
};

const history = createMemoryHistory();

let wrapper = (
  <appContext.Provider value={value}>
    <Router history={history}>
      <Join />
    </Router>
  </appContext.Provider>
);

afterEach(cleanup);

describe('<Join />', () => {
  test('1- name input updates when input is simulated', () => {
    const { getByTestId } = render(wrapper);

    let nameInput = getByTestId('name');

    fireEvent.change(nameInput, {
      target: { value: 'foo' },
    });

    expect(nameInput.value).toBe('foo');
  });

  test('2- room input updates when input is simulated', () => {
    const { getByTestId } = render(wrapper);

    let roomInput = getByTestId('room');

    fireEvent.change(roomInput, {
      target: { value: 'foo' },
    });

    expect(roomInput.value).toBe('foo');
  });

  test('3- redirected to <Chat /> when both input are not empty and btn clicked', () => {
    const { getByTestId, getByText } = render(wrapper);

    let join = getByText('Sign In');
    let nameInput = getByTestId('name');
    let roomInput = getByTestId('room');

    fireEvent.change(nameInput, {
      target: { value: 'aaa' },
    });

    fireEvent.change(roomInput, {
      target: { value: '' },
    });

    fireEvent.click(join);

    console.log(wrapper);

    expect(getByText('Fill')).toBeInTheDocument();
  });
});
