import styles from './styles'
import { RiskAssessmentRow } from '#/types'

const RiskAssessment = (items: RiskAssessmentRow[]) => ({
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
                    [
                        {
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
                        }
                    ],
                    ...items
                    .slice()
                    .sort((a, b) => b.risk - a.risk)
                    .map(item => 
                        [
                            {
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

export default RiskAssessment