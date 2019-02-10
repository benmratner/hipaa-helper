import styles from './styles'

const ClearinghouseStatement = (practiceName: string, dateAdopted: Date) => ({
    content: [
        {
            text: 'STATEMENT REGARDING HEALTHCARE CLEARINGHOUSE FUNCTION',
            style: 'header'
        }, 
        {
            text: [
                `The dental practice of`,
                { text: practiceName, bold: true},
                `does not operate an information clearing house and therefore meets the HIPAA’s Security Regulation requirement for “Isolating Health Care Clearinghouse Function” by either not using the services of a health care clearinghouse or isolates such services by relating them solely to an outside clearinghouse.`,
                `\n\n\n`
            ]
        },
        {
            text: [
                'Date Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
    ],
    styles
})

export default ClearinghouseStatement