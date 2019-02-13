import styles from './styles'

const EncryptionPolicy = (practiceName: string, dateAdopted: Date) => ({
    content: [
        {
            text: 'ENCRYPTION AND DECRYPTION OF ePHI',
            style: 'header'
        },
        {
            text: [
                {text: practiceName, bold: true},
                ` is responsible for ensuring the security of all PHI that `,
                {text: practiceName, bold: true},
                ` creates, receives, maintains or transmits under both the Privacy Rule and the Security Rule of HIPAA and the HITECH Act privacy and security requirements.`,
                `\n\n`,
                `Security involves protection of ePHI, PHI and other important `,
                {text: practiceName, bold: true},
                ` information during its transmission and receipt via electronic means such as electronic mail and file, information or software transfers. Encrypting and decrypting electronic information and files during their “transit” is a technical means of ensuring that if the information or files are intercepted or end up in the wrong hands, they cannot be deciphered or interpreted.`,
                `\n\n`,
                `While `,
                {text: practiceName, bold: true},
                `is not legally required to “encrypt” electronic information or files in most cases, `,
                ` is obligated to ensure that ePHI, PHI, and other important patient or `,
                {text: practiceName, bold: true},
                ` information does not fall into the wrong hands or is viewed or used by those who will not have access to it. Thus, it is the policy of `,
                ` to use encryption or decryption techniques wherever possible for both ePHI at rest and ePHI in transmission.`,
                `\n\n`
            ]
        },
        {
            text: [
                {text: `\nScope`, bold: true, italics: true},
                `\n\n`,
                `This policy applies to all `,
                {text: practiceName, bold: true},
                ` team members who are responsible for the manner in which ePHI and other important `,
                {text: practiceName, bold: true},
                ` information is transmitted or received by the `,
                {text: practiceName, bold: true},
                `\n\n`
            ]
        },
        {text: `Procedure`, bold: true, italics: true},
        {
            ol: [
                `The Privacy or Security Officer has, as part of a risk assessment, identified all transmission and reception points for electronic information to determine:`,
                {
                    type: 'lower-alpha',
                    ol: [
                        `Where the information is sent;`,
                        `The type of information that is sent; and`,
                        `The general content of the information to determine if it contains ePHI or other important or
                        confidential information.`
                    ]
                },
            ]
        },
        {
            start: 2,
            ol: [
                `The Privacy or Security Officer has determined that:`,
                {
                    type: 'lower-alpha',
                    ol: [
                        `Encryption and decryption of the information will be implemented based on the type of information, its destination (internal or external) and the risk of improper interception;`,
                        `Encryption and decryption of the information has been implemented when the data is at rest and when it is in transmission outside the corporate firewall;`
                    ]

                },
            ]
        },
        {
            start: 3,
            ol: [
                `Encryption/decryption is implemented; a careful review of all available technology, its features, and the ability to maintain and upgrade the software in the future.`,
                {
                    text: [
                        `At all times `,
                        {text: practiceName, bold: true},
                        ` encryption standards shall meet or exceed the standards outlined in the Breach Notification Final Rule published on January 25, 2013 including the encryption processes of the National Institute of Standards and Technology (NIST) and judged to meet this standard outlined in the final rule.`
                    ]
                }
            ]
        },
        {
            text: [
                '\n\n\nDate Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
        `\n\nRelevant forms: AUTHORIZATION AND CONSENT TO SEND UNENCRYPTED PATIENT INFORMATION BY EMAIL AND OTHER ELECTRONIC MEANS`
    ],
    styles
})

export default EncryptionPolicy