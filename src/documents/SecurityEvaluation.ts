import styles from './styles'

const SecurityEvaluation = (dateCompleted) => ({
    content: [
        {
            text: 'PERIODIC HIPAA SECURITY EVALUATION LOG',
            style: 'header'
        },
        `\n`,
        {
            table: {
                headerRows: 1,
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            text: 'ASSESSMENT',
                            style: 'tableHeader',
                        },
                        {
                            text: 'RESULT',
                            style: 'tableHeader'

                        }
                    ],
                    [
                        {
                            text: `Review and update ePHI security documentation periodically, as needed, or in response to environmental or operational changes affecting the security of the practice.`,
                            style: 'tableItem',
                            alignment: 'center'
                        },
                        {}
                    ],
                    [
                        {
                            text: `Test and, if warranted, revise the Practice Contingency (Emergency) Plan, as appropriate.`,
                            style: 'tableItem',
                            alignment: 'center'
                        },
                        {}
                    ],
                    [
                        {
                            text: `Review team job changes to ensure access authorized to each workforce member remains appropriate to their job responsibilities.`,
                            style: 'tableItem',
                            alignment: 'center'
                        },
                        {}
                    ],
                    [
                        {
                            text: `User IDs and passwords for any team members who have terminated employment with the practice are checked to ensure such passwords and IDs have been removed from the system by attempting to enter the system with those IDs/passwords.`,
                            style: 'tableItem',
                            alignment: 'center'
                        },
                        {}
                    ],
                    [
                        {
                            text: `Periodically assess the overall physical security needs of the practice, including but not limited to facility location, layout, design, and construction and periodically assess any need for and reasonableness of stronger or different entry door locks, alarm systems, and anti-intrusion devices.`,
                            style: 'tableItem',
                            alignment: 'center'
                        },
                        {}
                    ]
                ]

            }
        },
        `\n`,
        {
            text: `* This evaluation should be completed on a regular basis – at least annually or in response to environmental or operational changes that affect the practice’s handling of ePHI.`,
            italics: true
        },
        `\n\n`,
        {
            text: [
                'Date evaluation completed: ',
                {text: dateCompleted, bold: true}
            ]
        },
    ],
    styles
})

export default SecurityEvaluation