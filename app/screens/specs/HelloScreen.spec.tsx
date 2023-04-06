// https://reactnativetesting.io/component/testing/

import { RouteProp } from "@react-navigation/native"
import { render } from "@testing-library/react-native"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import renderer from "react-test-renderer"
import { AppStackParamList } from "../../navigators"
import { HelloScreen, HelloScreenComponent } from "../HelloScreen"

describe("Hello", () => {
  it("renders HelloScreen component", () => {
    const screen = render(<HelloScreenComponent></HelloScreenComponent>)
    expect(screen.getByText("Hello test")).toBeTruthy()
  })

  it("Renders Snapshot correctly", () => {
    const tree = renderer.create(<HelloScreenComponent></HelloScreenComponent>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe("Renders screen", () => {
    let navigation
    const route: RouteProp<AppStackParamList, "Hello"> = {
      key: "HelloScreen",
      name: "Hello",
    }

    beforeEach(() => {
      navigation = {
        dispatch: jest.fn(),
      }
    })

    test("Test HelloScreen", () => {
      const tree = renderer
        .create(
          <SafeAreaProvider>
            <HelloScreen navigation={navigation} route={route} />
          </SafeAreaProvider>,
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
