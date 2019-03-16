import styles from './styles'

type Args = {
    incidentType: string,
    incidentDate: Date,
    damage: string,
    employeesInvolved: string,
    initialActionTaken: string,
    remedyImplemented: string,
    remedyDate: Date,
    reportedDate: Date,
    personReporting: string,
    location: string,
    followupAction: string
}

const SecurityIncidentReport = (args: Args) => ({
    content: [
        {
            text: 'REPORT OF PRIVACY/SECURITY INCIDENT',
            style: 'header'
        },
        `\n`,
        {
            table: {
                widths: ['*', '*'],
                body: [
                    [
                        {
                            colSpan: 2,
                            text: [
                                { text: `I. Instructions: `, bold: true },
                                { italics: true, text: `This form shall be used to report any acts or omissions that result in (1) the attempted or successful unauthorized access, use, disclosure, modification, or destruction of information or (2) interference with system operations in an information system.` }
                            ]
                        },
                        {},
                    ],
                    [
                        {
                            text: [
                                { text: `II. Type of Incident: `, bold: true },
                                args.incidentType
                            ]
                        },
                        {
                            text: [
                                { text: `III. Date & Time of Incident: `, bold: true },
                                args.incidentDate
                            ]
                        }
                    ],
                    [
                        {
                            colSpan: 2,
                            text: [
                                { text: `IV. Procedure or System Compromised/Damage Caused: `, bold: true },
                                args.damage
                            ]
                        },
                        {},
                    ],
                    [
                        {
                            colSpan: 2,
                            text: [
                                { text: `V. Employee(s) Involved: `, bold: true },
                                args.employeesInvolved
                            ]
                        },
                        {},
                    ],
                    [
                        {
                            text: [
                                { text: `VI. Initial Action Taken: `, bold: true },
                                args.initialActionTaken
                            ]
                        },
                        {
                            text: [
                                { text: `VII. Remedy Implemented: `, bold: true },
                                args.remedyImplemented
                            ]
                        }
                    ],
                    [
                        {
                            colSpan: 2,
                            text: [
                                { text: `VIII. Remedy Date: `, bold: true },
                                args.remedyDate
                            ]
                        },
                        {},
                    ],
                    [
                        {
                            colSpan: 2,
                            text: [
                                { text: `IX. Date Reported to Privacy/Security Officer: `, bold: true },
                                args.reportedDate
                            ]
                        },
                        {},
                    ],
                    [
                        {
                            stack: [
                                {
                                    text: [
                                        { text: `X. Person Reporting: `, bold: true },
                                        args.initialActionTaken
                                    ]
                                },
                                `_____________________________`,
                                `Signature`
                            ]
                        },
                        {
                            stack: [
                                {
                                    text: [
                                        { text: `XI. Work Location: `, bold: true },
                                        `(If more than one office)`
                                    ]
                                },
                                args.location
                            ]
                        }
                    ],
                ]
            }

        }
    ],
    styles
})

export default SecurityIncidentReport