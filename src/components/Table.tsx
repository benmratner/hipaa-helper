import * as React from 'react';
import { Table as ReactTable } from 'reactstrap';

class Table extends React.Component {


	render() {
		return (
			<ReactTable responsive striped>
				<thead>
					<tr>
						<td>Hardware (ex. Lenovo Thinkpad, iPad Pro)</td>
						<td>Location in Office (ex. Doctor's Office, Front Desk)</td>
						<td>Type of Hardware (ex. Laptop, Tablet)</td>
						<td>Operating System (ex. iOS, Windows 10)</td>
						<td>Storage Capacity (Hard Drive Space)</td>
						<td>Amount of RAM</td>
						<td>CPU<br /> (ex. Intel i7- 6567U 3.3 Ghz)</td>
						<td>Serial Number</td>
						<td>Date Purchased</td>
						<td>Cost</td>
					</tr>
				</thead>
			</ReactTable>
		)
	}
}

export default Table;