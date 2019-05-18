import React, {FC} from 'react'
import {Text, View} from "react-native";
import {CommonItemPricingType} from "types-store";
import {Buttons, Row} from "shared/tools";
import style from './styles'
import ToolTip from "../../tools/blocks/ToolTip";

interface Props {
    cartTotals: CommonItemPricingType,
    containerStyle?: object,
    rowStyle?: object,
    textStyle?: object,
    bigTextStyle?: object,
    appliedPromo: object | any,
    isToolTipVisible: boolean,
    triggerToolTip: any
}

const Totals: FC<Props> = props => {
    const {cartTotals} = props;
    return (
        <View>
            <View style={{...style.containerStyle, ...props.containerStyle}}>
                <Row style={props.rowStyle}>
                    <Text style={{...style.normalText}}>Subtotal</Text>
                    <Text style={{...style.boldText}}>${cartTotals.subtotal}</Text>
                </Row>
                <Row style={{...props.rowStyle, ...style.toolTipRowStyle}}>
                    <Buttons.TextButton text="Pickup savings" pressMethod={props.triggerToolTip}
                                        textStyle={{...style.normalText}}/>
                    {props.isToolTipVisible &&
                        <ToolTip content="Picking up your order in the store helps cut costs, and we pass the savings on to you." pressMethod={props.triggerToolTip}/>
                    }
                    <Text style={{...style.boldText, ...style.savingsText}}>-${cartTotals.savings}</Text>
                </Row>
                <Row style={props.rowStyle}>
                    <View>
                        <Text style={{...style.normalText}}>Est. taxes & fees</Text>
                        <Text style={{...style.normalText}}>(Based on {cartTotals.zip})</Text>
                    </View>
                    <Text style={{...style.boldText}}>${cartTotals.tax}</Text>
                </Row>
                {props.appliedPromo &&
                    <Row style={props.rowStyle}>
                        <View>
                            <Text style={{...style.normalText}}>Promo Applied!: </Text>
                            <Text style={{...style.normalText}}>"{props.appliedPromo.code}"</Text>
                        </View>
                        <Text style={{...style.boldText, ...style.savingsText}}>-{props.appliedPromo.percent}%</Text>
                    </Row>
                }
            </View>
            <Row style={props.rowStyle}>
                <Text style={{...style.boldText, ...style.mediumText, ...props.bigTextStyle}}>Est. total</Text>
                <Text style={{...style.boldText, ...style.largeText, ...props.bigTextStyle}}>${cartTotals.total}</Text>
            </Row>
        </View>
    )
}

export default Totals