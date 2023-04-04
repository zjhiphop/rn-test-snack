import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

interface DetailScreenProps extends AppStackScreenProps<"Detail"> {}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Detail: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Detail" component={DetailScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const DetailScreenComponent = observer(function DetailScreenComponent() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return <Text text="detail" />
})

export const DetailScreen: FC<DetailScreenProps> = observer(function DetailScreen() {
  return (
    <Screen style={$root} preset="scroll">
      <DetailScreenComponent></DetailScreenComponent>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
