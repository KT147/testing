import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("<Greeting/> component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    //...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!", { exact: true });
    // expect(helloWorldElement).not.toBeInTheDocument()
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked, ", () => {
    render(<Greeting />);

    const itsGoodToSeeYouElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(itsGoodToSeeYouElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outPutElement = screen.getByText("Changed!");
    expect(outPutElement).toBeInTheDocument();
  });

  test("renders NOT It's good to see you! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outPutElement = screen.queryByText("good to see you!", {exact: false});
    expect(outPutElement).toBeNull()
  });
});

// test('renders Hello World as a text', () => {
//     // Arrange
//     render(<Greeting />)

//     // Act
//     //...nothing

//     // Assert
//     const helloWorldElement = screen.getByText('Hello World!', { exact: true})
//     // expect(helloWorldElement).not.toBeInTheDocument()
//     expect(helloWorldElement).toBeInTheDocument()
// })
