import React, {ReactNode} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {colors} from 'shared/constants'


interface Props {
    children: ReactNode,
    style?: object
}

const Layout = (props: Props) => {
    return <SafeAreaView style={{...style.layoutWrapper, ...props.style}}>{props.children}</SafeAreaView>;
};

const style = StyleSheet.create({
    layoutWrapper: {
        flex: 1,
        backgroundColor: colors.layoutBackground,
    }
});

export default Layout;
