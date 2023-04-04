// https://reactnativetesting.io/component/testing/

import { render } from "@testing-library/react-native"
import React from "react"
import renderer from "react-test-renderer"
import { DetailScreenComponent } from "../DetailScreen"

describe("Detail", () => {
  it("renders DetailScreenComponent component", () => {
    const screen = render(<DetailScreenComponent></DetailScreenComponent>)
    expect(screen.getByText("detail")).toBeTruthy()
  })
})

describe("Renders Snapshot correctly", () => {
  const tree = renderer.create(<DetailScreenComponent></DetailScreenComponent>).toJSON()
  expect(tree).toMatchSnapshot()
})
