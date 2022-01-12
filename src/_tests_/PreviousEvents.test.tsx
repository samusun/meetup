import { render, screen, fireEvent } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import PreviousEvents from '../Views/PreviousEvents';

describe('Main component', () => {
  it('Render shallow without error', () => {
    shallow(<PreviousEvents />);
  });
  it('Render mount without error', () => {
    mount(<PreviousEvents />);
  });

  it('Renders a few previous events based on numbers of comments buttons', () => {
    render(<PreviousEvents />);
    const button = screen.getAllByRole('button', { name: /comment/i });
    expect(button.length).toBeGreaterThan(2);
  });

  it('Shows date, time, location and description about the event', () => {
    const wrapper = render(<PreviousEvents />);
    expect(wrapper.queryAllByTestId('date')[0]).toBeInTheDocument();
    expect(wrapper.queryAllByTestId('time')[0]).toBeInTheDocument();
    expect(wrapper.queryAllByTestId('location')[0]).toBeInTheDocument();
    expect(wrapper.queryAllByTestId('description')[0]).toBeInTheDocument();
  });

  it('Does not show comment section at start', () => {
    const wrapper = render(<PreviousEvents />);
    const response = wrapper.queryByTestId('commentSection');
    expect(response).not.toBeInTheDocument();
  });

  it('Does show comment section after click on comment button', () => {
    const wrapper = render(<PreviousEvents />);
    const response = wrapper.queryByTestId('commentSection');
    expect(response).not.toBeInTheDocument();
    fireEvent.click(screen.getAllByText(/comment/i)[0]);
    const response2 = wrapper.queryByTestId('commentSection');
    expect(response2).toBeInTheDocument();
  });

  it('Renders a new message in comments when input is given', () => {
    const wrapper = render(<PreviousEvents />);
    fireEvent.click(wrapper.getAllByText(/comment/i)[0]);
    const inputName: any = wrapper.getByTestId(/nameInput/i);
    const inputComment: any = wrapper.getByTestId(/commentInput/i);
    fireEvent.change(inputName, { target: { value: 'Kenneth' } });
    fireEvent.change(inputComment, { target: { value: 'I WAS THERE' } });
    fireEvent.click(wrapper.getByText('Send'));
    expect(wrapper.queryByText(/Kenneth/)).toBeInTheDocument();
  });
});
