import styles from './styles'

const TechnicalSecurityMechanismsPolicy = (dateAdopted: Date) => ({
    content: [
        {
            text: 'TECHNICAL SECURITY MECHANISMS POLICY',
            style: 'header'
        },
        `It is the policy of the practice to utilize all reasonable and appropriate technical security mechanisms on electronic information systems that maintain ePHI in the practice, including but not limited to:`,
        {
            ul: [
                `Access Controls to allow access only to those persons or software programs that have been granted access rights including but not limited to:`,
                {
                    ul: [
                        `Unique User Identification: assigning each workforce member a username and password.`,
                        `Emergency Access Procedures: appropriate safeguards to ensure appropriate emergency access to ePHI.`,
                        `Automatic Logoff: electronic procedures that terminate sessions on practice workstations after a predetermined period of inactivity.`
                    ]
                },
                `Encryption and Decryption, as reasonable and appropriate to the practice.`,
                `Audit Controls to record and examine activity in information systems that contain or use electronic protected health information.`,
                `Integrity Controls to protect ePHI from improper alteration or destruction including but not limited to:`,
                {
                    ul: [
                        `Mechanisms to authenticate ePHI.`,
                        `Person or entity authentication to verify that a person or entity seeking access to ePHI is the one claimed.`,
                        `Transmission securit ymeasures to guard against unauthorized access to ePHI that is being transmitted over an electronic communications network, addressing, as reasonable and appropriate to the practice, including but not limited to:`,
                        {
                            ul: [
                                `Integrity controls to ensure that electronically transmitted ePHI is not improperly modified without detection until disposed of.`,
                                `Encryption of ePHI whenever deemed appropriate.`
                            ]
                        }
                    ]
                }
            ]
        },
        {
            text: [
                'Date Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
        `Relevant Forms: TECHNICAL SECURITY MECHANISMS LOG, PRACTICE ePHI ACCESS LOG, TASK SPECIFIC ePHI ACCESS LOG, TEAM MEMBER TERMINATION CHECKLIST`
    ],
    styles
})

export default TechnicalSecurityMechanismsPolicy