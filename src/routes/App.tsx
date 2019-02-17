import * as React from 'react'
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import documents from '#/documents'
import { PracticeNameInput, RiskAssessmentTable } from '#/components'
import { HardwareInventoryTable, TeamContactInfoTable } from '#/pages'
import logo from '#/images/hippo-logo.png'

import './App.css'
import { connect } from 'react-redux'
import { HardwareInventoryItem,  RiskAssessmentRow, TableRows, TeamMemberContactInfo } from '#/types'

const pdf = pdfMake
pdf.vfs = pdfFonts.pdfMake.vfs

interface Props {
	riskAssessment: RiskAssessmentRow[],
	teamContactInfo: TableRows<TeamMemberContactInfo>,
	hardwareInventory: TableRows<HardwareInventoryItem>,
	practiceName: string
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
			this.setState({iframeSrc: dataUrl})
		})
	}

	openSecurityManagementPolicy = () => {
		const securityManagementPolicy = documents.SecurityManagementPolicy(this.state.practiceName, 'September 29, 2018')
		this.openPdf(securityManagementPolicy)
		// pdf.createPdf(docDefinition).download();
	}

	openRiskAssement = () => {
		const doc = documents.RiskAssessment(this.props.riskAssessment)
		this.openPdf(doc)
	}

	openDocument = (docName: string, ...args: any) => {
		if (documents[docName]){
			const doc = documents[docName](...args)
			this.openPdf(doc)
		}
	}

	openHardwareList = () => {

		// const hardwareList = documents.HardwareInventory([{
		// 	name: 'Computer',
		// 	location: 'desk',
		// 	type: 'laptop',
		// 	os: 'Windows 10 64-bit',
		// 	ram: '16 GB',
		// 	cpu: 'Intel i7-6567U 3.3 Ghz',
		// 	storage: '512 GB',
		// 	serialNo: '123456',
		// 	datePurchased: '2017-03-01',
		// 	cost: 1099
		// }]);
		const hardwareInventory = Object.values(this.props.hardwareInventory)
		const hardwareList = documents.HardwareInventory(hardwareInventory)
		this.openPdf(hardwareList)
	}

	openBusinessAssociateAgreement = () => {
		const address1 = {
			addressLine1: '405 Manila Ave',
			addressLine2: 'Apt 2',
			city: 'Jersey City',
			state: 'NJ',
			zip: '07302'
		}
		const address2 = {
			addressLine1: '7 Morgan Way',
			city: 'Scotch Plains',
			state: 'NJ',
			zip: '07076'
		}
		const address3 = {
			addressLine1: '62 Jefferson Drive',
			city: 'Miami',
			state: 'FL',
			zip: '33101'
		}
		const agreement = documents.BusinessAssociateAgreement({
			doctorName: 'Ben Ratner',
			doctorBusinessAddress: address1,
			associateName: 'Craig Ratner',
			associateBusinessAddress: address2,
			associateServicesType: 'Moral Support',
			associateServicesDescription: 'Telling the doctor that he is really great',
			insuranceAmount: 2000,
			doctorMailingAddress: address1,
			associateMailingAddress: address3,
			agreementDay: 11,
			agreementMonth: 'June',
			agreementYear: 2020,
			doctorTitle: 'Doctor of Espionage Studies',
			associateTitle: 'Doctor of Medical Dentistry',
		})
		this.openPdf(agreement)
	}

	openTeamContactInfoTable = () => {
		// const team = [
		// 	{
		// 		name: 'Ben Ratner',
		// 		address: {
		// 			addressLine1: '405 Manila Ave',
		// 			addressLine2: 'Apt 2',
		// 			city: 'Jersey City',
		// 			state: 'NJ',
		// 			zip: '07302'
		// 		},
		// 		cellPhone: '9084771654'

		// 	},
		// 	{
		// 		name: 'Craig Ratner',
		// 		address: {
		// 			addressLine1: '7 Morgan Way',
		// 			city: 'Scotch Plains',
		// 			state: 'NJ',
		// 			zip: '07076'
		// 		},
		// 		homePhone: '9088895244',
		// 		cellPhone: '9083381644',
		// 		spouse: 'Amy Ratner'
		// 	}
		// ]
		const team = Object.values(this.props.teamContactInfo)
		const teamContactInfo = documents.TeamContactInfo(team)
		this.openPdf(teamContactInfo)
	}

	openEmergencyContacts = () => {
		const contacts = [
			{
				name: 'Local Police Department',
				phone: '8008764889'
			},
			{
				name: 'Local Fire Department',
				phone: '7865622363'
			},
			{
				name: 'NYS Dental Association',
				phone: '8002552100'
			}
		]

		const emergencyContacts = documents.EmergencyContactList(contacts)
		this.openPdf(emergencyContacts)
	}

	render() {
		return (

			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to HIPAA Helper</h1>
				</header>
				<PracticeNameInput />
				<button onClick={() => this.openDocument('SecurityManagementPolicy', this.props.practiceName, '2019-02-02')}>Open Security Management Policy</button>
				<TeamContactInfoTable />
				<button onClick={() => this.openTeamContactInfoTable()}>Open Team Contact Info</button>
				<HardwareInventoryTable />
				<button onClick={this.openHardwareList}>Open Hardware Inventory</button>
				<RiskAssessmentTable />
				<button onClick={this.openRiskAssement}>Open Risk Assement</button>
				<button onClick={() => this.openDocument('EvaluationPolicy')}>Open Evaluation Policy</button>
				<button onClick={() => this.openDocument('PasswordPolicy', 'Practice Name')}>Open Password Policy</button>
				<button onClick={() => this.openDocument('DataControlPolicy', 'Practice Name')}>Open Data Control Policy</button>
				<button onClick={() => this.openDocument('BackUpPlan', 'Practice Name')}>Open Data Back-up Plan</button>
				<button onClick={() => this.openDocument('InternetAccessPolicy', 'Practice Name')}>Open Internet Access Policy</button>
				<button onClick={() => this.openDocument('EncryptionPolicy', 'Practice Name')}>Open Encryption Policy</button>
				<button onClick={() => this.openDocument('PatientAuthorization', 'Practice Name')}>Open Patient Authorization</button>
				<button onClick={() => this.openDocument('SecurityIncidentPolicy', 'Practice Name')}>Open Security Incident Policy</button>
				<button onClick={() => this.openBusinessAssociateAgreement()}>Open Business Associate Agreement</button>
				<button onClick={() => this.openDocument('SecurityEvaluation', 'Practice Name')}>Open Security Evaluation</button>
				<button onClick={() => this.openEmergencyContacts()}>Open Emergency Contact List</button>
				{this.state.iframeSrc &&
					<div id='iframeContainer'>
						<iframe src={this.state.iframeSrc} className='pdf-preview'/>
					</div>
				}
			</div>
		)
	}
}

const MapStateToProps = (state) => ({
	riskAssessment: state.riskAssessment,
	practiceName: state.practiceName,
	teamContactInfo: state.teamMemberContactInfo,
	hardwareInventory: state.hardwareInventory
})

export default connect(MapStateToProps)(App)
