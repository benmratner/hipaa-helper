import * as React from 'react'
import { Table as ReactTable } from 'reactstrap'
import { generateUID } from '#/utils'
import { TableRows } from '#/types'


type Props = {
	columns: {
		displayName: string,
		key: string,
		input: any
	}[],
	saveRow: Function,
	rows?: TableRows<any>
}

type State = {
	rows: TableRows<any>
}

class Table extends React.Component<Props, State> {

	state = {
		rows: {}
	}

	componentDidMount () {
		if (this.props.rows && Object.values(this.props.rows).length > 0) {
			this.setState({
				rows: this.props.rows
			})
		} else {
			this.setState({
				rows: {
					0: this.getEmptyRow()
				}
			})
		}
	}

	getEmptyRow = () => {
		let row = {
			values: {},
			createdAt: new Date()
		}
		this.props.columns.forEach((col, i) => {
			row.values[col.key] = ''
		})
		return row
	}

	addRow = () =>  {
		this.setState({
			rows: {
				...this.state.rows, 
				[generateUID()]: this.getEmptyRow()
			}
		})
	}

	deleteRow = (rowIndex: string) => {
		let newRows = {...this.state.rows}
		delete newRows[rowIndex]
		this.setState({ rows: newRows })
	}

	editRow = (rowIndex: string, key: string, value: any) => {
		const val = value.target ? value.target.value : value
		this.setState({
			rows: {
				...this.state.rows,
				[rowIndex]: {
					...this.state.rows[rowIndex],
					values: {
						...this.state.rows[rowIndex].values,
						[key]: val
					}
				}
			}
		})
	}

	render() {
		return (
			<ReactTable responsive striped>
				<thead>
					<tr>
						{this.props.columns.map((col, i) => (
							<td key={i}>{col.displayName}</td>
						))}
						<td />
						<td />
					</tr>
				</thead>
				<tbody>
					{Object.keys(this.state.rows).map((rowKey, i) => (
						<tr key={rowKey}>
							{this.props.columns.map(col => (
								<td>{col.input(val => this.editRow(rowKey, col.key, val))}</td>
							))}
							{
								i === Object.keys(this.state.rows).length - 1
									? <td onClick={this.addRow}>Add Row</td>
									: <td onClick={() => this.deleteRow(rowKey)}>Delete Row</td>
							}
							<td><a onClick={() => this.props.saveRow(this.state.rows[rowKey], rowKey)}>Save</a></td>	
						</tr>
					))}
				</tbody>
			</ReactTable>
		)
	}

}

export default Table;