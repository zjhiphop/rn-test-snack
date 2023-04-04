// https://reactnativetesting.io/component/testing/

import React from "react"
import { fireEvent, render, screen } from "@testing-library/react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import renderer from "react-test-renderer"
import { DetailScreen, DetailScreenComponent } from "../DetailScreen"

describe("Detail", () => {
  it("renders DetailScreenComponent with Screen", () => {
    render(
      <SafeAreaProvider>
        <DetailScreen></DetailScreen>
      </SafeAreaProvider>,
    )
    // expect(screen.getByText("Hello")).toBeTruthy()
  })

  it("renders DetailScreenComponent component", () => {
    const screen = render(<DetailScreenComponent></DetailScreenComponent>)
    expect(screen.getByText("Detail")).toBeTruthy()
  })
})

describe("Renders Snapshot correctly", () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <DetailScreen></DetailScreen>
      </SafeAreaProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
