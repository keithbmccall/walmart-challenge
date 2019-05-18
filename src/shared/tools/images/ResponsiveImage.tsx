import React, {Component, Fragment} from "react";
import {Image} from "react-native";
import {LoadingView} from "shared/components";

interface Props {
    onReady?: any,
    src: string,
    resizeMode?: any,
    style?: object
}

interface State {
    isLoaded: boolean
}

class ResponsiveImage extends Component<Props, State> {
    state = {
        isLoaded: false
    }
    static defaultProps = {
        resizeMode: "contain",
        style: {flex:1}
    };
    imageIsLoaded = () => {
        this.props.onReady && this.props.onReady();
        this.setState({
            isLoaded: true
        });
    };

    render() {
        return (
            <Fragment>
                <Image
                    source={{uri: this.props.src}}
                    style={this.props.style}
                    onLoad={this.imageIsLoaded}
                    resizeMode={this.props.resizeMode}
                />
                {/*{!this.state.isLoaded && (*/}
                {/*    <LoadingView blank={false}/>*/}
                {/*)}*/}
            </Fragment>
        );
    }
}


export default ResponsiveImage;
