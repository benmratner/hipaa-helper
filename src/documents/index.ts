import { RiskAssessmentRow, SoftwareInventoryRow } from '#/types';

interface hardwareInventoryItem {
	name: string,
	location: string,
	type: string,
	os: string,
	ram: string,
	cpu: string,
	storage: string,
	serialNo: string,
	purchasedDate: string,
	cost: string,
}

const styles = {
	header: {
		fontSize: 11,
		bold: true,
		alignment: 'center'
	},
	paragraph: {
		fontSize: 11,
		alignment: 'left',
		fontFamily: 'Arial',
	},
	tableHeader: {
		fontSize: 10,
		bold: true,
		alignment: 'center',
	}
}

const tableHelpers = {
	hardwareInventory: (items: hardwareInventoryItem[]) => {
		let table = {
			headerRows: 1,
			body: [
				[{
					text: 'Hardware',
					style: 'tableHeader'
				},
				{
					text: 'Location in Office',
					style: 'tableHeader'
				},
				{
					text: 'Type of Hardware',
					style: 'tableHeader'
				},
				{
					text: 'Operating System, Hardware Size, RAM & CPU Capacity',
					style: 'tableHeader'
				},
				{
					text: 'Serial Number',
					style: 'tableHeader'
				},
				{
					text: 'Date Purchased',
					style: 'tableHeader'
				},
				{
					text: 'Cost',
					style: 'tableHeader'
				}]
			],
		}

		items.forEach(item => {
			const row = [
				{
					text: item.name,
					style: 'tableItem',
				},
				{
					text: item.location,
					style: 'tableItem',
				},
				{
					text: item.type,
					style: 'tableItem',
				},
				{
					text: `${item.os}, ${item.ram}, ${item.cpu}, ${item.storage}`,
					style: 'tableItem',
				},
				{
					text: item.serialNo,
					style: 'tableItem',
				},
				{
					text: item.purchasedDate,
					style: 'tableItem',
				},
				{
					text: item.cost,
					style: 'tableItem',
				},
			]
			table.body.push(row);
		})
		console.log(table)

		return table;
	},
	riskAssessment: (items: RiskAssessmentRow[]) => {

	}
}

const documents = {
	securityManagementPolicy: (practiceName: string, date: string) => ({
		content: [
			{
				text: 'SECURITY MANAGMENT POLICY\n\n',
				style: 'header',
			},
			{
				text: [
					`The dental practice of `,
					{text: practiceName, bold: true},
					`, in compliance with the federal Health Insurance Portability and Accountability Act (HIPAA) Security Regulation, hereby establishes a security program of administrative, physical, and technical steps to ensure the confidentiality, integrity, and accessibility of the electronic Protected Health Information (ePHI) received, generated, maintained, processed, transmitted, or otherwise used by the practice, meeting all standards and addressing or meeting all specifications of the regulation, with special attention to security risks determined to pose the greatest threat to the ePHI in the practice as determined by a formal risk analysis. The practice also hereby establishes and implements measures sufficient to reduce risks and vulnerabilities to a reasonable and appropriate level with specific measures taken to meet each of the indicated standards and address or meet each of the indicated specifications documented on the following pages.`,
					'\n\n\n',
				],
				style: 'paragraph',
			},
			{
				text: [
					'Date Policy Adopted: ',
					{text: date, bold: true}
				]
			}
		],
		styles
	}),
	hardwareInventory: (items: hardwareInventoryItem[]) => ({
		content: [
			{
				text: 'COMPUTER HARDWARE INVENTORY\n',
				style: 'header',
			},
			{
				table: tableHelpers.hardwareInventory(items),
			},
		],
		styles
	}),
	softwareInventory: (items: SoftwareInventoryRow) => ({
		pageOrientation: 'landscape',
		content: [
			{
				text: 'RISK ASSESSMENT',
				style: 'header',
			},
			{

			}
		],
		styles
	}),
	riskAssessment: (items: RiskAssessmentRow[]) => ({
		pageOrientation: 'landscape',
		content: [
			{
				text: 'COMPUTER SOFTWARE INVENTORY',
				style: 'header',
			},
			{
				text: [
					`\nPlace a check mark on the `,
					{text: `Possible Threats`, bold: true},
					` that apply to your practice. Score the `,
					{text: `Likelihood`, bold: true},
					{text: `Impact`, bold: true},
					` on the following scale: Very low (1), Low (2), Moderate (3), High (4), Very high (5). Multiply `,
					{text: `Likelihood`, bold: true},
					` by `,
					{text: `Impact`, bold: true},
					` to determine a `,
					{text: `Risk`, bold: true},
					` score.\nRank your liabilities according to this score and develop protocols to protect against them accordingly. Make note of the appropriate actions taken from the list of possible actions. Add more possible threats as they are identified.`,
					`\n\n\n\n`,
				],
				style: 'paragraph',
				alignment: 'center',
			},
			{
				table: {
					headerRows: 1,
					widths: ['*', 'auto', 'auto', 'auto', '*'],
					body: [
						[{
							text: 'POTENTIAL THREAT',
							style: 'tableHeader'
						},
						{
							text: 'Likelihood',
							style: 'tableHeader'
						},
						{
							text: 'Impact',
							style: 'tableHeader'
						},
						{
							text: 'Risk',
							style: 'tableHeader'
						},
						{
							text: 'Actions Taken/Date',
							style: 'tableHeader'
						}],
						...items
						.slice()
						.sort((a, b) => b.risk - a.risk)
						.map(item => 
							[{
								text: item.threatName,
								style: 'tableItem'
							},
							{
								text: item.likelihood,
								style: 'tableItem'
							},
							{
								text: item.impact,
								style: 'tableItem'
							},
							{
								text: item.risk,
								style: 'tableItem'
							},
							{
								text: item.actionsTaken.reduce((actionString, action, i) => {
									if (action.action){
										console.log(action)
										if (i < 0){
											return `${actionString}, ${action.action}: ${action.date}`
										}
										return `${action.action}: ${action.date}`
									}
									return ''
								}, ''),
								style: 'tableItem'
							}
						]
						)
					],
				}
			},
			{
				text: 'Actions Taken',
				style: 'header',
			},
			{
				columns: [
					{
						ol: [
							'Unique User ID',
							'Emergency Access',
							'Automatic Logoff',
							'Authentication',
							'Encryption'
						],
						width: '33%'
					}, {
						start: 6,
						ol: [
							'Emergency Operation Plan',
							'Access Controls',
							'Audit Controls',
							'Data Integrity',
							'Data Backup'
						],
						width: '33%'
					}, {
						start: 11,
						ol: [
							'Disaster Recovery Plan',
							'Alarm System',
							'Video Cameras',
						],
						width: '33%'
					}
				]
			}
		],
		styles
	})

}

export default documents;