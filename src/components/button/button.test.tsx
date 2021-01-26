import React from 'react'
import { render } from '@testing-library/react'
import Button, { ButtonType } from './button'

describe('test Button Component', () => {
    it("should render the correct default button", () => {
        const wrapper = render(<Button>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })

    it("should render the correct component based on differnt props", () => {
        const wrapper = render(<Button btnType={ButtonType.Danger}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toHaveClass('btn btn-danger')
    })

    it("should render a link when bthType equals link and href is provided", () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href={'//www.znp.ink'}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element.tagName).toEqual('A')
        expect(element).toHaveAttribute('href')
    })

    it("should render disable button when disable set to true", () => {
        const wrapper = render(<Button disabled={true}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toHaveAttribute('disabled')
    })

})