import { render, screen, fireEvent } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import PreviousEvents from '../Views/PreviousEvents';

describe("Main component", () => {
    it("Render shallow without error", ()=> {
        shallow(<PreviousEvents/>)
    })
    it("Render mount without error", ()=> {
        mount(<PreviousEvents/>)
    })
    it("Renders a few events in UpcomingEvents view", () => {
        render(<PreviousEvents/>)
        const button = screen.getAllByRole('button', {name: /attend/i})
        expect(button.length).toBeGreaterThan(2)
    })

    // it("Disabled attend button", () => {
    //     const wrapper = shallow(<PreviousEvents/>)
    //     const button = screen.getAllByRole('button', {name: /attend/i})
    //     console.log(button[0])
    //     wrapper.unmount();
    // })

    // it("EventComponent don't show extra information before click", () => {
    //     render(<PreviousEvents/>)
    //     expect(screen.queryByText(/extra information/i)).toBe(null);
    // })

    // it("EventComponent expands and shows more details at click", () => {
    //     render(<PreviousEvents/>)
    //     const element = component.find('input[type="password"]')
    //     fireEvent.click(element)
    //     expect(screen.getByText(/extra information/i)).toBeInTheDocument();
    // })
    // it("EventComponent expands and display rate button", () => {
    //     render(<PreviousEvents/>)
    //     const element = component.find('[data-test="radio1"]')
    //     expect(element).toBeInTheDocument();
    // })
    // it("EventComponent expands and display comment button", () => {
    //     render(<PreviousEvents/>)
    //     const element = component.find('[data-test="radio1"]')
    //     expect(element).toBeInTheDocument();
    // })
    // it("Comment section appear when comment btn clicked", () => {
    //     render(<PreviousEvents/>)
    //     const commentSection = component.queryByText('leave comment')
    //     expect(commentSection).toBe(null)
    //     const btn = component.find('[data-test="commentBtn"]')
    //     fireEvent.click(btn)
    //     expect(commentSection).toBeInTheDocument();
    // })
})

