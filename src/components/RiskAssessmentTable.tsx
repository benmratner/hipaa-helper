import * as React from 'react';
import { Button, Table } from 'reactstrap';
import Select from 'react-select';

interface Row {
	active: boolean,
	threat: string,
	likelihood: 1 | 2 | 3 | 4 | 5 | null,
	impact: 1 | 2 | 3 | 4 | 5 | null,
	risk: number | null,
}

interface State {
	rows: Row[],
}

class RiskAssessmentTable extends React.Component<any, State> {

	state = {
		rows: [
			{
				active: true,
				threat: 'Theft of ePHI containing equipment and/or devices',
				likelihood: null,
				impact: null,
				risk: null,
			}
		]
	}

	onCheck = (index: number) => {
		console.log(index)
		this.setState({
			rows: [
				...this.state.rows.slice(0, index),
				{...this.state.rows[index], active: !this.state.rows[index].active},
				...this.state.rows.slice(index + 1)
			]
		});
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
						<td>Date</td>
					</tr>
				</thead>
				<tbody>
					{this.state.rows.map((row, i) =>
						<TableRow
							key={i}
							index={i}
							onCheck={this.onCheck}
							{...row}
						/>
					)}
				</tbody>
			</Table>
		);
	}
}

export default RiskAssessmentTable;

interface RowProps {
	onCheck: Function,
	index: number,
}

const TableRow = (props: RowProps & Row) => {
	return (
		<tr>
			<td><Button onClick={() => props.onCheck(props.index)} active={props.active}/>{props.active ? 'active' : 'not active'}</td>
			<td>{props.threat}</td>
			{/*<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>*/}
		</tr>
	)
}

interface SelectProps {
	onChange: Function,
	value: 1 | 2 | 3 | 4 | 5 | null,
}
const RiskSelect = (props: SelectProps) => {
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

		/>
	)
}