import React, {FC, ReactNode} from 'react'
import {View, StyleSheet} from "react-native";


interface Props {
    style?: object,
    children: ReactNode
}

const Row: FC<Props> = props =>
    <View style={{...style.row, ...props.style}}>
        {props.children}
    </View>
export default Row

const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 5,
        position: 'relative',
    }
})