import * as React from 'react';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import documents from '#/documents'
import { PracticeNameInput, RiskAssessmentTable, Table } from '#/components';
import logo from '#/images/hippo-logo.png'

import './App.css';
import { connect } from 'react-redux';
import { RiskAssessmentRow } from '#/types';

const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;

interface Props {
	riskAssessment: RiskAssessmentRow[]
}

interface State {
	iframeSrc: string,
	practiceName: string,
}

class App extends React.Component<Props, State> {

	state = {
		iframeSrc: '',
		practiceName: '',
	}

	openPdf = (generator: any) => {
		const pdfDocGenerator = pdfMake.createPdf(generator);
		(pdfDocGenerator as any).getDataUrl((dataUrl: string) => {
			this.setState({iframeSrc: dataUrl});
		});
	}

	openSecurityManagementPolicy = () => {
		const securityManagementPolicy = documents.securityManagementPolicy(this.state.practiceName, 'September 29, 2018');
		this.openPdf(securityManagementPolicy)
		// pdf.createPdf(docDefinition).download();
	}

	openRiskAssement = () => {
		const doc = documents.riskAssessment(this.props.riskAssessment);
		this.openPdf(doc);
	}

	openHardwareList = () => {

		const hardwareList = documents.hardwareInventory([{
			name: 'Computer',
			location: 'desk',
			type: 'laptop',
			os: 'Windows 10 64-bit',
			ram: '16 GB',
			cpu: 'Intel i7-6567U 3.3 Ghz',
			storage: '512 GB',
			serialNo: '123456',
			purchasedDate: '03/2017',
			cost: '$1,099'
		}]);
		this.openPdf(hardwareList)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to HIPAA Helper</h1>
				</header>
				<PracticeNameInput />
				<button onClick={this.openSecurityManagementPolicy}>Open Security Management Policy</button>
				<Table />
				<button onClick={this.openHardwareList}>Open Hardware Inventory</button>
				<RiskAssessmentTable />
				<button onClick={this.openRiskAssement}>Open Risk Assement</button>
				{this.state.iframeSrc &&
					<div id='iframeContainer'>
						<iframe src={this.state.iframeSrc} className='pdf-preview'/>
					</div>
				}
			</div>
		);
	}
}

const MapStateToProps = (state) => ({
	riskAssessment: state.riskAssessment
})

export default connect(MapStateToProps)(App)
