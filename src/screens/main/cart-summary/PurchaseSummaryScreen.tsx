import React, {PureComponent, Fragment} from 'react'
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {cartActions} from "store/actions";
import {rootReducer} from "store/reducers"
import {Layout, LoadingView, PromoCode, Totals, ItemDetails} from "shared/components";
import {CommonItemPricingType, CommonItemType} from "types-store";
import {calculateTotals} from "./methods";
import {View, StyleSheet} from "react-native";
import {colors} from "shared/constants";

//@ts-ignore
type ReduxState = rootReducer

interface Props {
    fetchCartItems: any,
    applyPromoCode: any,
    appliedPromoCode: {} | any,
    cartItems: []
}

interface State {
    isDetailsExpanded: boolean,
    isPromoCodeExpanded: boolean,
    isToolTipVisible: boolean
}

type StateKeys = keyof State;

class PurchaseSummaryScreen extends PureComponent<Props, State> {
    state = {
        isDetailsExpanded: false,
        isPromoCodeExpanded: false,
        isToolTipVisible: false
    }

    componentDidMount(): void {
        this.props.fetchCartItems();
    }


    calculateTotals = (cartItems: CommonItemType[], appliedPromoCode: object | any): CommonItemPricingType => calculateTotals(cartItems, appliedPromoCode)

    uiTrigger = (key: StateKeys): void => {
        this.setState({
            [key]: !this.state[key]
        } as unknown as Pick<State, keyof State>)
    }
    applyPromoCode = (promoCode: string): void => {
        this.props.applyPromoCode(promoCode)
    }

    render() {
        const cartTotal = this.calculateTotals(this.props.cartItems, this.props.appliedPromoCode)
        return (
            <Layout>
                <View style={style.purchaseSummaryWrapper}>
                    {this.props.cartItems.length ?
                        <Fragment>
                            <Totals cartTotals={cartTotal} appliedPromo={this.props.appliedPromoCode} isToolTipVisible={this.state.isToolTipVisible}
                                    triggerToolTip={() => this.uiTrigger('isToolTipVisible')}/>
                            <ItemDetails cartItems={this.props.cartItems}
                                         isDetailsExpanded={this.state.isDetailsExpanded}
                                         triggerDetails={() => this.uiTrigger('isDetailsExpanded')}/>
                            <PromoCode isPromoCodeExpanded={this.state.isPromoCodeExpanded}
                                       triggerPromo={() => this.uiTrigger('isPromoCodeExpanded')}
                                       applyPromoCode={this.applyPromoCode}
                            />
                        </Fragment> :
                        <LoadingView/>
                    }
                </View>

            </Layout>
        )
    }
}

const style = StyleSheet.create({
    purchaseSummaryWrapper: {
        margin: '15%',
        padding: 20,
        paddingBottom: 40,
        borderRadius: 15,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,

    }
})


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchCartItems: () => dispatch(cartActions.fetchCartItems()),
    applyPromoCode: (promoCode: string) => dispatch(cartActions.applyPromoCode(promoCode))
});
const mapStateToProps = (state: ReduxState) => ({
    cartItems: state.cart.cartItems,
    appliedPromoCode: state.cart.appliedPromoCode
});


export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummaryScreen)