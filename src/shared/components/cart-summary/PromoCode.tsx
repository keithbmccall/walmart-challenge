import React, {PureComponent} from 'react'
import {View, Text} from "react-native";
import style from "./styles";
import {Buttons, InputField, Row} from "shared/tools";
import {colors} from "shared/constants";


interface Props {
    isPromoCodeExpanded: boolean,
    applyPromoCode:any,
    triggerPromo: any,
    containerStyle?: object
}

interface State {
    code: string
}

export default class PromoCode extends PureComponent<Props, State> {
    state = {
        code: "",
        isPromoAccepted: false
    }

    updateText = (code: string): void => {
        this.setState({
            code
        })
    }
    submitPromoCode = () => {
        if (this.state.code.length) {
            this.props.applyPromoCode(this.state.code)
        } else {
            console.log('You must enter a code!')
        }
        this.props.triggerPromo();
        this.setState({
            code: ""
        })
    }

    render() {
        let text;
        let iconName;
        if (this.props.isPromoCodeExpanded) {
            text = "Hide promo code";
            iconName = "minus";
        } else {
            text = "Apply promo code";
            iconName = "plus";
        }
        return (
            <View>
                <View
                    style={{...style.promoContainerStyle, ...this.props.containerStyle}}>
                    <Buttons.TextButton text={text} pressMethod={this.props.triggerPromo} iconName={iconName}
                                        iconColor={colors.black} textStyle={{...style.normalText}}/>
                    {this.props.isPromoCodeExpanded &&
                    <View>
                        <Text style={{...style.promoCodeText, ...style.normalText}}>Promo Code</Text>
                        <Row>
                            <InputField updateText={this.updateText}
                                        value={this.state.code}
                                        style={style.inputFieldStyle}/>
                            <Buttons.TextButton text="Apply"
                                                pressMethod={this.submitPromoCode}
                                                textStyle={{...style.normalText, ...style.applyButtonText, ...style.boldText}}
                                                style={style.applyButtonStyle}/>
                        </Row>
                    </View>
                    }
                </View>
            </View>
        )
    }


}