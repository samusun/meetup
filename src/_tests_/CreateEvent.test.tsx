import { render, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import CreateEvent from './../Views/CreateEvent';

describe('Upcoming Events component', () => {
  it('Render without error', () => {
    shallow(<CreateEvent />);
  });

  it('creates a new event if correct data is inserted', () => {
    const wrapper = render(<CreateEvent />);
    const eventName: any = wrapper.getByTestId('eventName');
    const date = wrapper.getByTestId('date');
    const time = wrapper.getByTestId('time');
    const location = wrapper.getByTestId('location');
    const participants = wrapper.getByTestId('participants');
    const description = wrapper.getByTestId('description');
    const searchWord = wrapper.getByTestId('searchWord');

    fireEvent.change(eventName, { target: { value: 'BigParty' } });
    fireEvent.change(date, { target: { value: /2022-01-02/ } });
    fireEvent.change(time, { target: { value: /11:00/ } });
    fireEvent.change(location, { target: { value: 'Avenyn' } });
    fireEvent.change(participants, { target: { value: 10 } });
    fireEvent.change(description, { target: { value: 'Lots of fun there' } });
    fireEvent.change(searchWord, { target: { value: 'FUN' } });

    fireEvent.click(wrapper.getByTestId('submit'));

    expect(wrapper.getByTestId('response')).toHaveTextContent(/nice/i);
  });

  it('Throws error if location field is empty', () => {
    const wrapper = render(<CreateEvent />);
    const eventName: any = wrapper.getByTestId('eventName');
    const date = wrapper.getByTestId('date');
    const time = wrapper.getByTestId('time');
    const location = wrapper.getByTestId('location');
    const participants = wrapper.getByTestId('participants');
    const description = wrapper.getByTestId('description');
    const searchWord = wrapper.getByTestId('searchWord');

    fireEvent.change(eventName, { target: { value: 'BigParty' } });
    fireEvent.change(date, { target: { value: /2022-01-02/ } });
    fireEvent.change(time, { target: { value: /11:00/ } });
    fireEvent.change(location, { target: { value: '' } });
    fireEvent.change(participants, { target: { value: 10 } });
    fireEvent.change(description, { target: { value: 'Lots of fun there' } });
    fireEvent.change(searchWord, { target: { value: 'FUN' } });

    fireEvent.click(wrapper.getByTestId('submit'));

    expect(wrapper.getByTestId('response')).toHaveTextContent(
      /please enter a valid place/i
    );
  });

  it('Throws error if description field is empty', () => {
    const wrapper = render(<CreateEvent />);
    const eventName: any = wrapper.getByTestId('eventName');
    const date = wrapper.getByTestId('date');
    const time = wrapper.getByTestId('time');
    const location = wrapper.getByTestId('location');
    const participants = wrapper.getByTestId('participants');
    const description = wrapper.getByTestId('description');
    const searchWord = wrapper.getByTestId('searchWord');

    fireEvent.change(eventName, { target: { value: 'BigParty' } });
    fireEvent.change(date, { target: { value: /2022-01-02/ } });
    fireEvent.change(time, { target: { value: /11:00/ } });
    fireEvent.change(location, { target: { value: 'Kortedala' } });
    fireEvent.change(participants, { target: { value: 10 } });
    fireEvent.change(description, { target: { value: '' } });
    fireEvent.change(searchWord, { target: { value: 'FUN' } });

    fireEvent.click(wrapper.getByTestId('submit'));

    expect(wrapper.getByTestId('response')).toHaveTextContent(
      /Your description of the event need to be a bit longer/i
    );
  });
});
