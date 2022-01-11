import { shallow, mount } from 'enzyme';
import { render, screen, fireEvent, queryByText } from "@testing-library/react"
import Comments from './../Components/Comments';

describe('Comments component', () => {
  it('Sätter korrekta props', () => {
    const wrapper = mount(<Comments key='2' eventName='FUN' comments={[]} />);
    expect(wrapper.props().eventName).toEqual('FUN');
    wrapper.setProps({ eventName: 'FUNTIME' });
    expect(wrapper.props().eventName).toEqual('FUNTIME');
  });

   it('renders a send button', () => {
    const wrapper = shallow(<Comments key='2' eventName='FUN' comments={[]}  />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('renders a comment when inputs is filled and send-button is clicked', () => {
    const wrapper = render(<Comments key='0' eventName='FUN' comments={[]}  />)
    expect(wrapper.queryByText(/janne/i)).not.toBeTruthy();
        const inputName: any = wrapper.getByTestId(/nameInput/i)
        const inputComment: any = wrapper.getByTestId(/commentInput/i)
        fireEvent.change(inputName, { target: { value: 'Janne' } })
        fireEvent.change(inputComment, { target: { value: 'Input txt' } })
        fireEvent.click(wrapper.getByText("Send"))
        expect(wrapper.getByText('Input txt')).toBeInTheDocument()
        expect(wrapper.getByText(/janne/i)).toBeInTheDocument();
  });

});
