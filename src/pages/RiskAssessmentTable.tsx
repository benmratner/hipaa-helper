import * as React from 'react'
import { TableColumn, TableRows, TeamMemberContactInfo } from '#/types'
import { Table, UserSubmissionSelect } from '#/components'
import { connect } from 'react-redux'
import { updateTeamMemberContactInfoRow } from '#/actions/pages'
import Select from 'react-select'

type Props = {
    updateTeamMemberContactInfoRow: typeof updateTeamMemberContactInfoRow,
    rows: TableRows<TeamMemberContactInfo>
}

class RiskAssessmentTable extends React.Component<Props> {

    render() {
        const columns: TableColumn[] = [
            {
                displayName: '',
                key: 'active',
                input: (value, onChange) => <input value={value} onChange={onChange} />
            }, {
                displayName: 'Potential Threat',
                key: 'threat',
                input: (value, onChange) => <UserSubmissionSelect options={['Theft of ePHI containing equipment and/or devices']} value={value} onChange={onChange}/>
            }, {
                displayName: 'Likelihood',
                key: 'likelihood',
                input: (value, onChange) => <RiskSelect value={value} onChange={onChange} />
            }, {
                displayName: 'Impact',
                key: 'impact',
                input: (value, onChange) => <RiskSelect value={value} onChange={onChange} />
            }, {
                displayName: 'Risk',
                key: 'risk',
                input: (value, onChange) => <div>{value}</div>
            }
        ]
        return (
            <Table
                columns={columns}
                saveRow={this.props.updateTeamMemberContactInfoRow}
                rows={this.props.rows}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    rows: state.teamMemberContactInfo
})

const mapDispatchToProps = ({
    updateTeamMemberContactInfoRow
})

export default connect(mapStateToProps, mapDispatchToProps)(RiskAssessmentTable)


interface RiskSelectProps {
	onChange: Function,
	value: number,
}
const RiskSelect = (props: RiskSelectProps) => {
	const options = [
		{ value: 1, label: 'Very Low'},
		{ value: 2, label: 'Low'},
		{ value: 3, label: 'Moderate'},
		{ value: 4, label: 'High'},
		{ value: 5, label: 'Very High'},
	]
	return (
		<Select
			options={options}
			onChange={(newValue) => props.onChange(newValue)}
			value={options[props.value - 1]}
		/>
	)
}