import { mount } from 'enzyme';
import App from './App';
import UpcomingEvents from './Views/UpcomingEvents';
import PreviousEvents from './Views/PreviousEvents';
import CreateEvent from './Views/CreateEvent';

describe('App component', () => {
  it("Doesn't load any other View initially", () => {
    const wrapper = mount(<App />);
    const Upcoming = wrapper.contains(<UpcomingEvents />);
    const Previous = wrapper.contains(<PreviousEvents />);
    const Create = wrapper.contains(<CreateEvent />);
    expect(Upcoming).toBe(false);
    expect(Previous).toBe(false);
    expect(Create).toBe(false);
  });

  it('Loads only Upcoming events header after click on Upcoming Events button', () => {
    const wrapper = mount(<App />);
    const UpcomingBtn = wrapper.find('#upcoming');
    UpcomingBtn.simulate('click');
    let header = wrapper.find('.mainHeader').text();
    expect(header).toBe('Upcoming events');
  });

  it('Loads only Previous events header after click on Previous Events button', () => {
    const wrapper = mount(<App />);
    const previousBtn = wrapper.find('#previous');
    previousBtn.simulate('click');
    let header = wrapper.find('.mainHeader').text();
    expect(header).toBe('Previous events');
  });

  it('Loads Create Event header after click on create Event button', () => {
    const wrapper = mount(<App />);
    const createBtn = wrapper.find('#create');
    createBtn.simulate('click');
    let header = wrapper.find('.mainHeader').text();
    expect(header).toBe('Create event');
  });
});
