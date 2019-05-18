import React, {FC} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {colors} from "shared/constants";


interface Props {
    style?: object,
    content: string,
    pressMethod: any
}

const ToolTip: FC<Props> = props =>
    <TouchableOpacity style={{...style.toolTip, ...props.style}} onPress={props.pressMethod}>
        <Text>{props.content}</Text>
    </TouchableOpacity>
export default ToolTip

const style = StyleSheet.create({
    toolTip: {
        backgroundColor: colors.white,
        borderStyle: 'solid',
        borderColor: colors.grey,
        borderWidth: 1,
        position: 'absolute',
        top: 30,
        width: 250,
        height: 110,
        zIndex: 1000,
        padding: 20,
        justifyContent: 'center'
    }
})