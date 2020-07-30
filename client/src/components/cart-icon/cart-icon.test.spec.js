import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon.component';

describe('CartIcon component', () => {
    let wrapper;
    let mockToggleCartHidden;
    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            itemCount: 0,
            toggleCartHidden: mockToggleCartHidden,
        };

        wrapper = shallow(<CartIcon {...mockProps} />);
    });

    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call toggleCartHidden when icon is clicked', () => {
        wrapper.find('div.cart-icon').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });
});
