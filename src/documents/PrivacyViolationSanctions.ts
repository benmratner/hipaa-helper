import styles from './styles'

const PrivacyViolationSanctions = (dateAdopted: Date, otherActions: string) => ({
    content: [
        {
            text: 'SANCTIONS FOR VIOLATING PRIVACY AND SECURITY POLICIES AND PROCEDURES',
            style: 'header'
        },
        `\n\n`,
        `Members of the workforce are subject to disciplinary action for violation of policies and procedures. Violations that jeopardize the privacy or security of PHI/ePHI are particularly serious. This seriousness will be reflected in the nature of the disciplinary action, up to and including termination of employment.`,
        {
            ol: [
                `All members of the workforce will be treated fairly and equitably in the imposition of sanctions for privacy and security violations.\n\n\n`,
                `Sanctions will be integrated into the practice’s overall employee discipline policy. This policy will be in writing.\n\n\n`,
                `Disciplinary actions due to breaches of privacy or security of PHI/ePHI will be documented, and the documentation must be retained for 7 (seven) years.\n\n\n`,
                `Disclosure of PHI/ePHI in violation of policy is reportable under the Accounting of Disclosures of Protected Health Information Policy.\n\n\n`,
                `No member of the workforce will be subject to sanctions for a disclosure of PHI/ePHI made in good faith in accordance with the following policies:`,
                {
                    ul: [
                        `Disclosure of protected health information by “whistleblowers”.`,
                        `Disclosures of protected health information by workforce members who are the victims of a crime.`
                    ]
                }
            ]
        },
        {
            start: 6,
            ol: [
                `Disciplinable actions include but are not limited to:`,
                {
                    ul: [
                        `Intentional misuse, destruction, or damage to systems, programs, or files containing patient PHI/ePHI.`,
                        `Intentional misuse, destruction, or damage to systems, programs, or files containing
                        patient PHI/ePHI.`,
                        `Intentional release of patient PHI/ePHI to unauthorized persons or entities.`,
                        `A pattern of failing to follow verification procedures prior to releasing PHI/ePHI to outside persons or entities requesting same.`,
                        `Accessing PHI/ePHI computer files without appropriate authorization.`,
                        `Failure to timely notify Privacy/Security Officer of a known or suspected privacy or security breach.`,
                        `Any negligence or carelessness in handling PHI/ePHI.`,
                        `Use of office computer for personal e-mail or Internet access, which may expose the system to viruses, or access by outside entities.\n\n\n`
                    ]
                }
            ]
        },
        {
            start: 7,
            ol: [
                `Other: ${otherActions}\n\n\n`
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

export default PrivacyViolationSanctions