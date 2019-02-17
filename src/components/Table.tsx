import * as React from 'react'
import { Table as ReactTable } from 'reactstrap'
import { generateUID } from '#/utils'
import { TableRow, TableRows } from '#/types'


type Props = {
	columns: {
		displayName: string,
		input: any
	}[]
}

type State = {
	rows: TableRows
}

class Table extends React.Component<Props, State> {

	state = {
		rows: {}
	}

	componentDidMount () {
		this.setState({
			rows: {
				0: this.getEmptyRow()
			}
		})
	}

	getEmptyRow = (): TableRow => {
		let row: TableRow = {
			values: {},
			createdAt: new Date()
		}
		this.props.columns.forEach((col, i) => {
			row.values[col.displayName] = ''
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
		}, () => console.log(this.state.rows))
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
					</tr>
				</thead>
				<tbody>
					{Object.keys(this.state.rows).map((rowKey, i) => (
						<tr key={rowKey}>
							{this.props.columns.map(col => (
								<td>{col.input(val => this.editRow(rowKey, col.displayName, val))}</td>
							))}
							{
								i === Object.keys(this.state.rows).length - 1
									? <td onClick={this.addRow}>Add Row</td>
									: <td onClick={() => this.deleteRow(rowKey)}>Delete Row</td>
							}	
						</tr>
					))}
				</tbody>
			</ReactTable>
		)
	}

}

export default Table;