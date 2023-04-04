import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Hello: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Hello" component={HelloScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const HelloScreenComponent = observer(function HelloScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return <Text text="Hello" />
})

interface HelloScreenProps extends AppStackScreenProps<"Hello"> {}

export const HelloScreen: FC<HelloScreenProps> = observer(function HelloScreen() {
  return (
    <Screen style={$root} preset="scroll">
      <HelloScreenComponent></HelloScreenComponent>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
