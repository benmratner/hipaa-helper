import styles from './styles'

const SecurityOfficer = (practiceName: string, officerName: string, dateAdopted: Date) => ({
    content: [
        {
            text: 'SECURITY OFFICER\n\n',
            style: 'header',
        },
        {
            text: [
                `The dental practice of `,
                {text: practiceName, bold: true},
                `hereby appoints`,
                {text: officerName, bold: true},
                `as Security Officer with duties to include:`,
                '\n\n\n',
            ],
            style: 'paragraph',
        },
        {
            ul: [
                {
                    text: `Developing and managing administrative processes, including policies and procedures.`
                }, {
                    text: `Working with team responsible for physical security, including security consultants and vendors.`
                }, {
                    text: `Maintaining records documenting the practice’s rationale for its security policies and procedures,
                    the policies and procedures themselves, and related forms and records.`
                }, {
                    text: `Coordinating policy and procedure development, internal complaint processing, and enforcement
                    with the practice Privacy Officer.`
                }, {
                    text: `Collaborating with the practice regarding the analysis and resolution of joint security and privacy
                    issues that arise.`
                }, {
                    text: `Communicating with all members of the workforce, to include providing training, selecting
                    controls, and describing the risk analysis to the practice team and management.`
                }
            ]
        },
        {
            text: [
                'Date Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        }
    ],
    styles
})

export default SecurityOfficer