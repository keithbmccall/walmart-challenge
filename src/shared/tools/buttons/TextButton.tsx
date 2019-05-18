import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {colors} from "shared/constants";

interface Props {
    style?: object,
    textStyle?: object,
    text: string,
    iconColor?: string,
    iconSize?: number,
    iconName?: string,
    pressMethod: any

}

const TextButton = (props: Props) => (
    <TouchableOpacity
        style={{flexDirection: 'row', ...props.style}}
        onPress={props.pressMethod}>
        <Text style={{...style.defaultStyle, ...props.textStyle}}>
            {props.text}
        </Text>
        {props.iconName && <Icon size={props.iconSize} name={props.iconName} color={props.iconColor}/>}
    </TouchableOpacity>
);
TextButton.defaultProps = {
    iconColor: colors.primary,
    iconSize: 24,
    textStyle: {
        fontSize: 18,
        marginRight: 6,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
}
const style = StyleSheet.create({
    defaultStyle: {
        fontSize: 18,
        marginRight: 6,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }

})
export default TextButton