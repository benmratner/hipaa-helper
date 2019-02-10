import styles from './styles'

const BackUpPlan = (practiceName: string, dateAdopted: Date) => ({
    content: [
        {
            text: 'DATA BACK-UP PLAN',
            style: 'header'
        },
        `It is the policy of the practice to routinely make retrievable duplicate copies (back-ups) of electronic Protected Health Information (ePHI) on a regular basis using one of the following options:\n\n`,
        {
            ul: [
                `Automatically, (daily) in-office to encrypted portable hard drive and to an encrypted workstation.`,
                `Manually, in-office by the practice Security Officer (daily, weekly, etc.).`
            ]
        },
        {
            text: [
                `Back-up media are stored on-/off-site by `,
                { text: practiceName, bold: true },
                `. Addresses and phone numbers are listed in the team directory.`,
                `\n\n`
            ]
        },
        `The practice tests its data back-up procedures periodically to ensure that exact copies of confidential data can be retrieved and made available as well as whenever computer hardware or software are modified.`,
        {
            text: [
                'Date Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
    ],
    styles
})

export default BackUpPlan