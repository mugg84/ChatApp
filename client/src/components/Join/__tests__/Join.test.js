import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { appContext } from '../../context/appContext';

import Join from '../Join';

const value = { name: '', room: '', setRoom: jest.fn(), setName: jest.fn() };

let wrapper = (
  <appContext.Provider value={value}>
    <MemoryRouter>
      <Join />
    </MemoryRouter>
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

  /*  test('3- redirected to <Chat /> when both input are not empty and btn clicked', () => {
    const { getByTestId } = render(wrapper);

    join = getByTestId('submit');
    name = getByTestId('name');
    room = getByTestId('room');

    fireEvent.change(name, {
      target: { value: 'foo' },
    });

    fireEvent.change(room, {
      target: { value: 'foo' },
    });

    fireEvent.click(join);

    expect(document.body.textContent).toBe('Chat');
  });  */
});
