import React from 'react';
import {shallow} from 'enzyme';
import {Button} from '../button';

describe('test FooterView', () => {
    const buttonProps = {
        handleClick:jest.fn()
    }
    let component

    beforeEach(() => {
        jest.clearAllMocks();
        component = shallow(<Button {...buttonProps}/>);
    });

    describe('test render contract', () => {
        it('renders inside html-content', () => {
            expect(component.dive().dive()).toMatchSnapshot();
        })

        it('renders Button', () => {
            expect(component.dive().dive().find('Button').length).toBe(1);
        })
    })

    describe('test props contract', () => {
        it('check handleClick prop', () => {
            expect(component.dive().dive().find('Button').prop('onClick')).toEqual(buttonProps.handleClick);
        })
    })
})
    