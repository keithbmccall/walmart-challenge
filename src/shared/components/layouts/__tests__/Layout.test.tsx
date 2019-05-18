import Layout from '../Layout';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const children = [1, 2, 3].map(n => <Text>{n}</Text>)
const createTestProps = (props: Object) => ({
    ...props,
    children
});

describe("ResponsiveImage", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<Layout children={children}/>);
        });

        it("should render 3 <Text>", () => {
            expect(wrapper.find(Text)).toHaveLength(3);
        });

    });
});