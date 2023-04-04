// https://reactnativetesting.io/component/testing/

import { render } from "@testing-library/react-native"
import React from "react"
import renderer from "react-test-renderer"
import { HelloScreenComponent } from "../HelloScreen"

describe("Hello", () => {
  it("renders HelloScreen component", () => {
    const screen = render(<HelloScreenComponent></HelloScreenComponent>)
    expect(screen.getByText("Hello")).toBeTruthy()
  })

  it("Renders Snapshot correctly", () => {
    const tree = renderer.create(<HelloScreenComponent></HelloScreenComponent>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
