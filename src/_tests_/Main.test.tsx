import { render, screen, fireEvent } from "@testing-library/react"
import { shallow, mount } from "enzyme"

describe("Main component", () => {
    it("Render without error", ()=> {
        shallow(<Main/>)
    })
    it("Render mount without error", ()=> {
        mount(<Main/>)
    })

    it("Renders upcomingEvents view", () => {
       shallow(<UpcomingEvents/>)
    })
    it("Renders a few events in Upcoming events view", () => {
        const component = shallow(<UpcomingEvents/>)
        // MORE TESTING NEEDED
    })

    it("EventComponent don't show extra information before click", () => {
        render(<UpcomingEvents/>)
        expect(screen.queryByText(/extra information/i)).toBe(null);
    })

    it("EventComponent expands and shows more details at click", () => {
        render(<UpcomingEvents/>)
        const element = component.find('input[type="password"]')
        fireEvent.click(element)
        expect(screen.getByText(/extra information/i)).toBeInTheDocument();
    })
})

