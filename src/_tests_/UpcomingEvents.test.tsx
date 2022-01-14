import { render, screen, fireEvent } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import UpcomingEvents from './../Views/UpcomingEvents';

describe('Upcoming Events component', () => {
  it('Render without error', () => {
    shallow(<UpcomingEvents />);
  });
  it('Render mount without error', () => {
    mount(<UpcomingEvents />);
  });
  it('Renders a Attend event button', () => {
    render(<UpcomingEvents />);
    const button = screen.getAllByRole('button', { name: /attend/i })[0];
    expect(button).toBeInTheDocument();
  });

  it('Attending response shows only when Attend button is clicked', () => {
    const wrapper = render(<UpcomingEvents />);
    const response = wrapper.queryByTestId('attendResponse');
    expect(response).not.toBeInTheDocument();
    fireEvent.click(screen.getAllByTestId('attend')[0]);
    const response2 = wrapper.queryByTestId('attendResponse');
    expect(response2).toBeInTheDocument();
  });

  it('Attending response disapear again after click 2', () => {
    const wrapper = render(<UpcomingEvents />);
    const response = wrapper.queryByTestId('attendResponse');
    expect(response).not.toBeInTheDocument();
    const btn = screen.getAllByTestId(/attend/i)[0];
    fireEvent.click(btn);
    fireEvent.click(btn);
    const response2 = wrapper.queryByTestId('attendResponse');
    expect(response2).not.toBeInTheDocument();
  });

  it('Shows date, time, location and description about the event', () => {
    const wrapper = render(<UpcomingEvents />);
    expect(wrapper.queryAllByTestId('date')[0]).toBeInTheDocument();
    expect(wrapper.queryAllByTestId('time')[0]).toBeInTheDocument();
    expect(wrapper.queryAllByTestId('location')[0]).toBeInTheDocument();
    expect(wrapper.queryAllByTestId('description')[0]).toBeInTheDocument();
  });

  it('Does not show comment section at start', () => {
    const wrapper = render(<UpcomingEvents />);
    const response = wrapper.queryByTestId('commentSection');
    expect(response).not.toBeInTheDocument();
  });
  it('Does show comment section after click on comment button', () => {
    const wrapper = render(<UpcomingEvents />);
    const response = wrapper.queryByTestId('commentSection');
    expect(response).not.toBeInTheDocument();
    fireEvent.click(screen.getAllByText(/comment/i)[0]);
    const response2 = wrapper.queryByTestId('commentSection');
    expect(response2).toBeInTheDocument();
  });

  it('Renders a new message in comments when input is given', () => {
    const wrapper = render(<UpcomingEvents />);
    fireEvent.click(wrapper.getAllByText(/comment/i)[0]);
    const inputName: any = wrapper.getByTestId(/nameInput/i);
    const inputComment: any = wrapper.getByTestId(/commentInput/i);
    fireEvent.change(inputName, { target: { value: 'Kenneth' } });
    fireEvent.change(inputComment, { target: { value: 'I WAS THERE' } });
    fireEvent.click(wrapper.getByText('Send'));
    expect(wrapper.queryByText(/Kenneth/)).toBeInTheDocument();
  });

  it('allows me to give rating to an event', () => {
    const wrapper = render(<UpcomingEvents />);
    expect(
      wrapper.queryByText(/thank you for rating/i)
    ).not.toBeInTheDocument();
    fireEvent.click(wrapper.getAllByTestId('rate3')[0]);
    expect(wrapper.queryByText(/thank you for rating/i)).toBeInTheDocument();
  });

  it('Does not show rating and average before rated, and shows after rating is given', () => {
    const wrapper = render(<UpcomingEvents />);
    expect(wrapper.queryByTestId('ratingResponse')).not.toBeInTheDocument();
    expect(wrapper.queryByTestId('average')).not.toBeInTheDocument();

    fireEvent.click(wrapper.getAllByTestId('rate3')[0]);

    expect(wrapper.queryByTestId('ratingResponse')).toBeInTheDocument();
    expect(wrapper.queryByTestId('average')).toBeInTheDocument();
  });

  it('Filter events by search string', () => {
    const wrapper = render(<UpcomingEvents />);
    const searchBar = wrapper.getByTestId('searchBar');
    const submit = wrapper.getByTestId('submitSearch');
    expect(wrapper.queryAllByTestId('eventHead').length).toBeGreaterThan(1);
    fireEvent.change(searchBar, { target: { value: 'future' } });
    fireEvent.click(submit);
    expect(wrapper.queryAllByTestId('eventHead').length).toBe(1);
    expect(wrapper.queryAllByTestId('eventHead')[0]).toHaveTextContent(
      /future/i
    );
  });

  it('render undefined input field at start', () => {
    const wrapper = mount(<UpcomingEvents />);
    const input = wrapper.find('#searchBar');
    const value = input.render().val();
    expect(value).toBe(undefined);
  });

  it('search event and renders correct event, based on search string', () => {
    const wrapper = mount(<UpcomingEvents />);
    const input = wrapper.find('#searchBar');
    const submit = wrapper.find('#submit');
    const searchString = 'future';

    input.simulate('change', { target: { value: searchString } });
    submit.simulate('click');

    const cards = wrapper.find('div.container .Event');
    const searchStrings = cards.find('h5');
    searchStrings.forEach((searchStrings) => {
      const actualSearchString = searchStrings.text();
      expect(actualSearchString).toMatch(searchString);
    });
  });
});
