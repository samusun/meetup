import { render, screen, fireEvent } from "@testing-library/react"
import { shallow, mount } from "enzyme"
import UpcomingEvents from './../Views/UpcomingEvents';

describe("Upcoming Events component", () => {
    it("Render without error", ()=> {
        shallow(<UpcomingEvents/>)
    })
    it("Render mount without error", ()=> {
        mount(<UpcomingEvents/>)
    })
})

