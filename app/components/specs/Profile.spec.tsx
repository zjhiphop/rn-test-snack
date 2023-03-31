// https://reactnativetesting.io/component/testing/
// https://github.com/testing-library/jest-native
import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"
import renderer from "react-test-renderer"
import { NewMessageForm, Profile } from "../Profile"

describe("Profile (visibility)", () => {
  beforeEach(() => {
    render(<Profile />)
  })
  it("renders", () => {
    expect(screen.getByText("Hello")).toBeTruthy()
  })

  it('display "welcome face" image', () => {
    expect(screen.getByLabelText("welcome face")).toBeVisible()
  })

  it('display "home" svg icon', () => {
    expect(screen.getByLabelText("home svg")).toBeVisible()
  })
})

describe("Message (Interactive)", () => {
  describe("clicking send", () => {
    it("clears the message field", () => {
      render(<NewMessageForm />)

      fireEvent.changeText(screen.getByPlaceholderText("Message"), "Hello world")
      fireEvent.press(screen.getByText("Send"))

      expect(screen.getByPlaceholderText("Message")).toHaveProp("value", "")
    })

    it("calls the onSend prop", () => {
      const messageText = "Hello world"
      const sendHandler = jest.fn()
      render(<NewMessageForm onSend={sendHandler} />)

      fireEvent.changeText(screen.getByPlaceholderText("Message"), "Hello world")
      fireEvent.press(screen.getByText("Send"))

      expect(sendHandler).toHaveBeenCalledWith(messageText)
    })
  })
})

describe("Renders Snapshot correctly", () => {
  const tree = renderer.create(<Profile />).toJSON()
  expect(tree).toMatchSnapshot()
})