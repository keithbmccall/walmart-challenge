import React, {Component, FC} from 'react'
import {TextInput, Keyboard} from "react-native";


interface Props {
    style?: object,
    placeholder?: string,
    updateText: any,
    value: string
}


const InputField: FC<Props> = props => {
    return (
        <TextInput
            placeholder={props.placeholder}
            style={props.style}
            keyboardType="default"
            keyboardAppearance="dark"
            returnKeyType="done"
            autoCorrect={false}
            onChangeText={code =>
                props.updateText(code)
            }
            value={props.value}
            onSubmitEditing={Keyboard.dismiss}
        />)

}
InputField.defaultProps = {
    placeholder: ""
}
export default InputField