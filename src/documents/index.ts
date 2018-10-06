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
					style: 'tableitem',
				},
				{
					text: item.location,
					style: 'tableitem',
				},
				{
					text: item.type,
					style: 'tableitem',
				},
				{
					text: `${item.os}, ${item.ram}, ${item.cpu}, ${item.storage}`,
					style: 'tableitem',
				},
				{
					text: item.serialNo,
					style: 'tableitem',
				},
				{
					text: item.purchasedDate,
					style: 'tableitem',
				},
				{
					text: item.cost,
					style: 'tableitem',
				},
			]
			table.body.push(row);
		})
		console.log(table)

		return table;
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
	riskAssement: () => ({
		pageOrientation: 'landscape',
		content: [
			{
				text: 'RISK ASSESSMENT',
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
					widths: ['*', '*', '*', '*', '*', '*'],
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
						}]
					],
				}
			}
		],
		styles
	})

}

export default documents;