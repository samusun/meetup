import { render, screen, fireEvent } from "@testing-library/react"
import { shallow, mount } from "enzyme"

describe("Main component", () => {
    it("Render without error", ()=> {
        shallow(<PreviousEvents/>)
    })
})

