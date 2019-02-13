import styles from './styles'

const HarmMitigationPolicy = (dateAdopted: Date) => ({
    content: [
        {
            text: 'MITIGATION OF KNOWN HARM FROM AN IMPROPER DISCLOSURE OF PROTECTED HEALTH INFORMATION',
            style: 'header'
        },
        `\n\n`,
        `In order to comply with HIPAA’s Privacy and Security Rules, it is the policy of this office to mitigate known harm from an improper disclosure of Protected Health Information (PHI/ePHI), when it is practicable to do so.`,
        {
            ol: [
                `Whenever we learn of harm caused by an improper disclosure of our protected health information, including electronic Protected Health Information (ePHI), we will take reasonable steps to mitigate the harm. We will take these steps whether the improper disclosure was made by us or by one of our Business Associates.\n\n`,
                `Our Privacy Officer, Security Officer, and/or Public Information Officer will determine what specific steps are appropriate to mitigate particular harm. It is our policy to tailor mitigation efforts to individual harm. Examples of some mitigation steps include:`,
                {
                    type: 'lower-alpha',
                    ol: [
                        `Getting back Protected Health Information that was improperly disclosed.\n\n`,
                        `Preventing further disclosure through agreements with the recipient.`
                    ]
                }
            ]
        },
        {
            start: 3,
            ol: [
                `We do not consider money reparations to be appropriate mitigation.`,
                `If a Business Associate has made the improper disclosure, we will require the Business Associate to cure the problem to our satisfaction or terminate the relationship with the Business Associate.`
            ]
        },
        {
            text: [
                '\n\nDate Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
    ],
    styles
})

export default HarmMitigationPolicy