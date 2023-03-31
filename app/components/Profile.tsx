import { observer } from "mobx-react-lite"
import * as React from "react"
import { Image, Pressable, StyleProp, TextInput, TextStyle, View, ViewStyle } from "react-native"

import { colors, typography } from "../theme"
import { Text } from "./Text"

export interface ProfileProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Profile = observer(function Profile(props: ProfileProps) {
  const { style } = props
  const $styles = [$container, style]
  // test mocked store
  // const store = useStores()
  // console.log(store)
  const HomeIcon = require("../../assets/svg/home.svg")

  return (
    <View style={$styles}>
      <Text style={$text}>Hello</Text>
      <Image
        accessibilityLabel="welcome face"
        source={require("../../assets/images/welcome-face.png")}
      />
      <HomeIcon accessibilityLabel="home svg" fill="gray" width={100} height={100}></HomeIcon>
    </View>
  )
})

export const NewMessageForm = function NewMessageForm({ onSend }: { onSend?: any }) {
  const [inputText, setInputText] = React.useState("")

  const handleSend = () => {
    if (onSend) {
      onSend(inputText)
    }
    setInputText("")
  }

  return (
    <View>
      <TextInput placeholder="Message" value={inputText} onChangeText={setInputText} />
      <Pressable onPress={handleSend}>
        <Text>Send</Text>
      </Pressable>
    </View>
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
