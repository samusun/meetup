import { render, screen, fireEvent } from "@testing-library/react"
import { shallow, mount } from "enzyme"

describe("Main component", () => {
    it("Render without error", ()=> {
        shallow(<PreviousEvents/>)
    })
    it("Render mount without error", ()=> {
        mount(<PreviousEvents/>)
    })

    it("Renders upcomingEvents view", () => {
       shallow(<PreviousEvents/>)
    })
    it("Renders a few events in Upcoming events view", () => {
        const component = shallow(<PreviousEvents/>)
        // MORE TESTING NEEDED
    })
    it("EventComponent don't show extra information before click", () => {
        render(<PreviousEvents/>)
        expect(screen.queryByText(/extra information/i)).toBe(null);
    })

    it("EventComponent expands and shows more details at click", () => {
        render(<PreviousEvents/>)
        const element = component.find('input[type="password"]')
        fireEvent.click(element)
        expect(screen.getByText(/extra information/i)).toBeInTheDocument();
    })
    it("EventComponent expands and display rate button", () => {
        render(<PreviousEvents/>)
        const element = component.find('[data-test="radio1"]')
        expect(element).toBeInTheDocument();
    })
    it("EventComponent expands and display comment button", () => {
        render(<PreviousEvents/>)
        const element = component.find('[data-test="radio1"]')
        expect(element).toBeInTheDocument();
    })
    it("Comment section appear when comment btn clicked", () => {
        render(<PreviousEvents/>)
        const commentSection = component.queryByText('leave comment')
        expect(commentSection).toBe(null)
        const btn = component.find('[data-test="commentBtn"]')
        fireEvent.click(btn)
        expect(commentSection).toBeInTheDocument();
    })
})

