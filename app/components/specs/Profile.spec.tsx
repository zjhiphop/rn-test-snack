// https://reactnativetesting.io/component/testing/

import { render, screen } from "@testing-library/react-native"
import React from "react"
import { Profile } from "../Profile"

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