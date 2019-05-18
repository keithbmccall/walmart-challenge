import {StyleSheet} from "react-native";
import {colors} from "shared/constants";

export default StyleSheet.create({
    containerStyle: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingBottom: 20,
        marginBottom: 10,
        zIndex: 1
    },
    itemDetailsContainerStyle: {
        marginTop: 20,
        marginBottom: 20
    },
    promoContainerStyle: {
        paddingBottom: 10,
        marginBottom: 10
    },
    normalText: {
        fontSize: 17
    },
    boldText: {
        fontWeight: 'bold'
    },
    mediumText: {
        fontSize: 20
    },
    largeText: {
        fontSize: 25
    },
    savingsText: {
        color: colors.alert
    },
    oldPriceText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: colors.secondary
    },
    itemDetailsImageStyle: {
        height: 200,
        width: '30%'
    },
    itemDetailsDescriptionStyle: {
        flex: 7,
        marginLeft: 10
    },
    promoCodeText: {
        color: colors.secondary,
        paddingLeft: 10
    },
    inputFieldStyle: {
        borderColor: colors.grey,
        borderWidth: 1,
        borderStyle: 'solid',
        flex: 8,
        height: 40,
        paddingLeft: 10
    },
    applyButtonStyle: {
        flex: 4,
        borderRadius: 30,
        borderColor: colors.black,
        borderWidth: 2,
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    applyButtonText: {
        textDecorationLine: 'none'
    },
    toolTipRowStyle: {
        zIndex: 1
    }
});
