// https://reactnativetesting.io/component/testing/
// https://github.com/testing-library/jest-native
import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"
import { NewMessageForm, Profile } from "../Profile"

describe("Profile", () => {
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

describe("Message", () => {
  describe("clicking send", () => {
    it("clears the message field", () => {
      render(<NewMessageForm />)

      fireEvent.changeText(screen.getByPlaceholderText("Message"), "Hello world")
      fireEvent.press(screen.getByText("Send"))
    })
  })
})