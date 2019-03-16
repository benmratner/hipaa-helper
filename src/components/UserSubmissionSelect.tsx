import * as React from 'react'
import Creatable from 'react-select/lib/Creatable'

type Props = {
	options: string[]
	value: string[],
	onChange: Function
}

class UserSubmissionSelect extends React.Component<Props> {
    render() {
        return (
            <Creatable
				options={this.props.options}
				onChange={() => this.props.onChange}
				value={this.props.value}
				isMulti
            />
        )
    }
}

export default UserSubmissionSelect