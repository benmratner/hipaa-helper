import * as React from 'react'
import { Address } from '#/types'

type Props = {
    address?: Address,
    onChange: Function
}

type State = Address


class AddressInput extends React.Component<Props, State>{

    state = {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: ''
    }

    componentDidMount() {
        if (this.props.address){
            this.setState({
                ...this.props.address
            })
        }
    }

    editField = (field) => {
        this.setState({
            ...this.state,
            [field.target.name]: field.target.value
        }, 
        () => this.props.onChange(this.state))
    }

    render() {

        return (
            <div className={'d-flex flex-column'}>
                Line 1:
                <input 
                    onChange={e => this.editField(e)} 
                    name={'addressLine1'} 
                    value={this.state.addressLine1}
                />
                Line 2:
                <input 
                    onChange={e => this.editField(e)} 
                    name={'addressLine2'} 
                    value={this.state.addressLine2}
                />
                City:
                <input 
                    onChange={e => this.editField(e)} 
                    name={'city'} 
                    value={this.state.city}
                />
                State:
                <input 
                    onChange={e => this.editField(e)} 
                    name={'state'} 
                    value={this.state.state}
                />
                Zip Code:
                <input 
                    onChange={e => this.editField(e)} 
                    name={'zip'} 
                    value={this.state.zip}
                />
            </div>   
        )
    }
} 

export default AddressInput