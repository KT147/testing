import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        
        // kirjutab test funktsioonis üle fetch functioni
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        })

        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem', {exact: true}, {timeout:1000})
        expect(listItemElements).not.toHaveLength(0)
    })
})