import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { appContext } from '../../context/appContext';

import Join from '../Join';
import Chat from '../../Chat/Chat';

const value = { name: '', room: '', setRoom: jest.fn(), setName: jest.fn() };

const history = createMemoryHistory();
const redirectUrl = '/chat';
const data = { status: 'closed' };

let wrapper = (
  <appContext.Provider value={value}>
    <Router history={history}>
      <Join
        ComponentWithRedirection={() => <Chat data={data} />}
        RedirectUrl={redirectUrl}
      />
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
    const { getByTestId} = render(wrapper);

    let join = getByTestId('submit');
    let nameInput = getByTestId('name');
    let roomInput = getByTestId('room');

    fireEvent.change(nameInput, {
      target: { value: 'foo' },
    });

    fireEvent.change(roomInput, {
      target: { value: 'foo' },
    });

    fireEvent.click(join);

  });
});
