import * as React from 'react'
import { Button, Table } from 'reactstrap'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateRiskAssessment } from '#/actions/pages'
import { RiskAssessmentRow } from '#/types'

interface Props {
	riskAssessmentTable: RiskAssessmentRow[],
	updateRiskAssessment: typeof updateRiskAssessment
}

class RiskAssessmentTable extends React.Component<Props> {

	onValueChange = (index: number, valueName: string, newValue: boolean | number) => {
		const { riskAssessmentTable } = this.props
		const currRow = riskAssessmentTable[index]
		let risk = currRow.risk
		if (typeof newValue === 'number'){
			if ((valueName  === 'likelihood' && currRow.impact)){
				risk = newValue * currRow.impact
			} else if (valueName  === 'impact' && currRow.likelihood) {
				risk = newValue * currRow.likelihood
			}
		}
		if (valueName === 'actionsTaken') {

		}
		this.props.updateRiskAssessment([
			...riskAssessmentTable.slice(0, index),
			{ ...riskAssessmentTable[index], [valueName]: newValue, risk },
			...riskAssessmentTable.slice(index + 1)
		])
	}

	onActionChange = (rowIndex: number, actionIndex: number, newAction: {action?: number, date?: Date}) => {
		const { riskAssessmentTable } = this.props
		let actions = riskAssessmentTable[rowIndex].actionsTaken

		this.props.updateRiskAssessment([
			...riskAssessmentTable.slice(0, rowIndex),
			{ ...riskAssessmentTable[rowIndex], actionsTaken: [
				...actions.slice(0, actionIndex),
				{...actions[actionIndex], ...newAction},
				...actions.slice(actionIndex + 1),
			]},
			...riskAssessmentTable.slice(rowIndex + 1),
		])
	}

	render() {
		return (
			<Table>
				<thead>
					<tr>
						<td />
						<td>Potential Threat</td>
						<td>Likelihood</td>
						<td>Impact</td>
						<td>Risk</td>
						<td>Actions Taken</td>
					</tr>
				</thead>
				<tbody>
					{this.props.riskAssessmentTable.map((row, i) =>
						<TableRow
							key={i}
							index={i}
							handleValueChange={this.onValueChange}
							handleActionChange={this.onActionChange}
							{...row}
						/>
					)}
				</tbody>
			</Table>
		)
	}
}

const mapStateToProps = (state) => ({
	riskAssessmentTable: state.riskAssessment
})

const mapDispatchToProps = ({
	updateRiskAssessment
})
export default connect(mapStateToProps, mapDispatchToProps)(RiskAssessmentTable)

interface RowProps {
	handleValueChange: Function,
	handleActionChange: Function,
	index: number,
}

interface SelectOption {
	value: number,
	label: string,
}

const TableRow = (props: RowProps & RiskAssessmentRow) => {
	return (
		<tr>
			<td><Button onClick={() => props.handleValueChange(props.index, 'active', !props.active)} active={props.active}/>{props.active ? 'active' : 'not active'}</td>
			<td>{props.threatName}</td>
			<td>
				<RiskSelect
					onChange={(newValue: SelectOption) => props.handleValueChange(props.index, 'likelihood', newValue.value)}
					value={props.likelihood}
				/>
			</td>
			<td>
				<RiskSelect
					onChange={(newValue: SelectOption) => props.handleValueChange(props.index, 'impact', newValue.value)}
					value={props.impact}
				/>
			</td>
			<td>{props.risk}</td>
			<td>
				{props.actionsTaken.map((action, i) => (
					<>
					<ActionSelect
						key={i}
						onActionChange={(newValue: SelectOption) => props.handleActionChange(props.index, i, {action: newValue.value})}
						onDateChange={(newDate: Date) => props.handleActionChange(props.index, i, { date: newDate })}
						value={action}
					/>
					</>
				))}
				<Button onClick={() => props.handleActionChange(props.index, props.actionsTaken.length, 0, new Date())}>Add new Action</Button>
			</td>
		</tr>
	)
}

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

interface ActionSelectProps {
	onActionChange: Function,
	onDateChange: Function,
	value: { action: number, date: Date }
}

const ActionSelect = (props: ActionSelectProps) => {
	const options = [
		{ value: 1, label: 'Unique User ID'},
		{ value: 2, label: 'Emergency Access'},
		{ value: 3, label: 'Automatic Logoff'},
		{ value: 4, label: 'Authentication'},
		{ value: 5, label: 'Encryption'},
		{ value: 6, label: 'Emergency Operation Plan'},
		{ value: 7, label: 'Access Controls'},
		{ value: 8, label: 'Audit Controls'},
		{ value: 9, label: 'Data Integrity'},
		{ value: 10, label: 'Data Backup'},
		{ value: 11, label: 'Disaster Recovery Plan'},
		{ value: 12, label: 'Alarm System'},
		{ value: 13, label: 'Video Camera'},
	]
	return (
		<>
			<Select
				options={options}
				onChange={(newValue) => { console.log(newValue); props.onActionChange(newValue)}}
				value={options[props.value.action - 1]}
			/>
			<input
				type='date'
				onChange={(e) => props.onDateChange(e.target.value)}
				value={props.value.date ? props.value.date.toString() : ''}
			/>

		</>
	)
}