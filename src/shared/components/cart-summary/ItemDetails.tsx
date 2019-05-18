import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {CommonItemType} from "types-store";
import {Buttons, ResponsiveImage, Row} from "shared/tools";
import {colors} from "shared/constants";
import style from './styles'

interface Props {
    cartItems: CommonItemType[],
    isDetailsExpanded: boolean,
    triggerDetails: any,
    containerStyle?: object
}

const renderItemCards = (cartItem: CommonItemType, key: number) => {
    const {subtotal, savings} = cartItem.pricing;
    const {item_name, image, quantity} = cartItem.itemDetails
    return (
        <Row style={{position: 'relative'}} key={key}>
            <ResponsiveImage src={image} style={style.itemDetailsImageStyle}/>
            <View style={style.itemDetailsDescriptionStyle}>
                <Text style={style.normalText}>{item_name}</Text>
                <Row>
                    <View>
                        <Text style={{...style.boldText, ...style.normalText}}>${(subtotal - savings).toFixed(2)}</Text>
                        <Text
                            style={{...style.boldText, ...style.normalText, ...style.oldPriceText}}>${subtotal}</Text>
                    </View>
                    <Text style={style.normalText}>Qty: {quantity}</Text>
                </Row>
            </View>
        </Row>
    )
}
const ItemDetails: FC<Props> = props => {
    let text;
    let iconName;
    if (props.isDetailsExpanded) {
        text = "Hide item details";
        iconName = "minus";
    } else {
        text = "See item details";
        iconName = "plus";
    }

    return (
        <View>
            <View style={{...style.containerStyle, ...style.itemDetailsContainerStyle, ...props.containerStyle}}>
                <Buttons.TextButton text={text} pressMethod={props.triggerDetails} iconName={iconName}
                                    iconColor={colors.black} textStyle={{...style.normalText}}/>
                {props.isDetailsExpanded &&
                <View>
                    {props.cartItems.map(renderItemCards)}
                </View>}
            </View>
        </View>
    )
}

export default ItemDetails