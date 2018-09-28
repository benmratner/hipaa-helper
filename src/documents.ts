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
		styles: {
			header: {
				fontSize: 11,
				bold: true,
				alignment: 'center'
			},
			paragraph: {
				fontSize: 11,
				alignment: 'left',
				fontFamily: 'Arial',
			}
		}

	})
}

export default documents;