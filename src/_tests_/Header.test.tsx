    
    describe("Header component", () => {
 it("Renders a PreviousEvents-button", () => {
        render(<UpcomingEvents/>)
        const button = screen.getByRole("button")
        expect(button).toHaveTextContent(/previous/i)
    })

    it("Renders a create event button in Upcoming events", () => {
        render(<UpcomingEvents/>)
        const button = screen.getByRole("button")
        expect(button).toHaveTextContent("+")
    })
    })
   