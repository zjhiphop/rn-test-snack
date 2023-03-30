// https://reactnativetesting.io/component/testing/

import React from "react"
import { fireEvent, render, screen } from "@testing-library/react-native"
import { Profile } from "../Profile"

describe("Profile", () => {
  it("renders", () => {
    render(<Profile />)
    expect(screen.getByText("Hello")).toBeTruthy()
  })
})