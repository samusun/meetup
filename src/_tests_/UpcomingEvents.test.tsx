import { render, screen, fireEvent } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import UpcomingEvents from './../Views/UpcomingEvents';
import Comments from './../Components/Comments';

describe("Upcoming Events component", () => {
    it("Render without error", ()=> {
        shallow(<UpcomingEvents/>)
    })
    it("Render mount without error", ()=> {
        mount(<UpcomingEvents/>)
    })
     it("Renders a Attend event button", () => {
        render(<UpcomingEvents/>)
        const button = screen.getByRole('button', {name: /attend/i})
        expect(button).toBeInTheDocument();
    })

    it("Attending response shows only when Attend button is clicked", () => {
        const wrapper = render(<UpcomingEvents/>)
        const response = wrapper.queryByTestId("attendResponse")
        expect(response).not.toBeInTheDocument();
        fireEvent.click(screen.getByTestId("attend"))
        const response2 = wrapper.queryByTestId("attendResponse")
        expect(response2).toBeInTheDocument();
    })

    it("Attending response disapear again after click 2", () => {
        const wrapper = render(<UpcomingEvents/>)
        const response = wrapper.queryByTestId("attendResponse")
        expect(response).not.toBeInTheDocument();
        const btn = screen.getByTestId(/attend/i)
        fireEvent.click(btn)
        fireEvent.click(btn)
        const response2 = wrapper.queryByTestId("attendResponse")
        expect(response2).not.toBeInTheDocument();
    })


    it("Shows date, time, location and description about the event", () => {
        const wrapper = render(<UpcomingEvents/>)
        expect(wrapper.queryByTestId("date")).toBeInTheDocument();
        expect(wrapper.queryByTestId("time")).toBeInTheDocument();
        expect(wrapper.queryByTestId("location")).toBeInTheDocument();
        expect(wrapper.queryByTestId("description")).toBeInTheDocument();
    })


    it("Does not show comment section at start", () => {
        const wrapper = render(<UpcomingEvents/>)
        const response = wrapper.queryByTestId("commentSection")
        expect(response).not.toBeInTheDocument();
    })
    it("Does show comment section after click on comment button", () => {
        const wrapper = render(<UpcomingEvents/>)
        const response = wrapper.queryByTestId("commentSection")
        expect(response).not.toBeInTheDocument();
        fireEvent.click(screen.getByText(/comment/i))
        const response2 = wrapper.queryByTestId("commentSection")
        expect(response2).toBeInTheDocument();
    })

    it("Renders a new message in comments when input is given", () => {
        const wrapper = render(<UpcomingEvents/>)
        fireEvent.click(wrapper.getByText(/comment/i))
        const inputName: any = wrapper.getByTestId(/nameInput/i)
        const inputComment: any = wrapper.getByTestId(/commentInput/i)
        fireEvent.change(inputName, { target: { value: 'Jannemannen' } })
        fireEvent.change(inputComment, { target: { value: 'I WAS THERE' } })
        fireEvent.click(wrapper.getByText("Send"))
        expect(wrapper.queryByText(/Jannemannen/)).toBeInTheDocument();
    })
})