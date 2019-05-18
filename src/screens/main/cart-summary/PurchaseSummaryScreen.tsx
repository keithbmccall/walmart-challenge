import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {cartActions} from "store/actions";
import {rootState} from "store/reducers"
import {Layout} from "shared/components";


type ReduxState = rootState

interface Props {
    fetchCartItems: any
}

interface State {
}

class PurchaseSummaryScreen extends PureComponent<Props, State> {
    state = {}

    componentDidMount(): void {
        this.props.fetchCartItems();
    }

    render() {
        return (
            <Layout>
                <Text>Sandwichs</Text>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    fetchCartItems: () => dispatch(cartActions.fetchCartItems()),
});
const mapStateToProps = (state: ReduxState) => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummaryScreen)