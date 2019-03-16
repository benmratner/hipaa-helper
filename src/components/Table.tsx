import * as React from 'react'
import { Button, Table as ReactTable } from 'reactstrap'
import { generateUID } from '#/utils'
import { TableColumn, TableRows } from '#/types'

type Props = {
	columns: TableColumn[],
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

	componentDidUpdate () {
		// TODO: update rows in local state when rows in redux update
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
								<td>
								{col.input(
									this.state.rows[rowKey].values[col.key],
									val => this.editRow(rowKey, col.key, val)
								)}
								</td>
							))}
							{
								i === Object.keys(this.state.rows).length - 1
									? <td><Button onClick={this.addRow}>Add Row</Button></td>
									: <td><Button onClick={() => this.deleteRow(rowKey)}>Delete Row</Button></td>
							}
							<td><Button onClick={() => this.props.saveRow(this.state.rows[rowKey], rowKey)}>Save</Button></td>
						</tr>
					))}
				</tbody>
			</ReactTable>
		)
	}

}

export default Table