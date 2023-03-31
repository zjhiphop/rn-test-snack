// https://reactnativetesting.io/component/testing/

import { render } from "@testing-library/react-native"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import renderer from "react-test-renderer"
import { HelloScreen } from "../HelloScreen"

describe("Hello", () => {
  it("renders", () => {
    render(
      <SafeAreaProvider>
        <HelloScreen></HelloScreen>
      </SafeAreaProvider>,
    )
    // expect(screen.getByText("Hello")).toBeTruthy()
  })
})

describe("Renders Snapshot correctly", () => {
  const tree = renderer
    .create(
      <SafeAreaProvider>
        <HelloScreen></HelloScreen>
      </SafeAreaProvider>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
