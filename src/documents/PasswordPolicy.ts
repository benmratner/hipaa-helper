import styles from './styles'

const PasswordPolicy = (practiceName: string, dateAdopted: Date) => ({
    content: [
        {
            text: 'ACCESS TO THE INFORMATION SYSTEM AND ePHI (PASSWORDS)\n\n',
            style: 'header'
        },
        {
            text: [
                {text: practiceName, bold: true},
                `has established this policy to ensure that all team members have appropriate access to ePHI and PHI, and that his or her identity is properly verified before such access can be attempted. This policy also addresses procedures to prevent team members and former team members who will not have access to ePHI and PHI from obtaining it, and for emergency access to the information system.`,
            ]
        },
        {
            text: [
                {text: `\nScope`, bold: true, italics: true},
                `\n\n`,
                `This policy applies to all `,
                {text: practiceName, bold: true},
                ` team members who utilize the electronic information system. It covers key provisions concerning who has access to ePHI and PHI, the level of access they have, protections to ensure proper user identification for access, and emergency access to ePHI and PHI. This policy also addresses the steps to be followed to terminate access to ePHI and PHI when a team member’s authorization to access has ended, such as when employment or membership is terminated.`,
            ]
        },
        {
            text: [
                {text: `\nProcedures`, bold: true, italics: true},
                `\n\n`,
                `Users shall be provided with:`,
            ]
        },
        {
            ol: [
                `Initial access to authorized PHI and ePHI upon hire`,
                `Training that emphasizes employee’s access limits to PHI and ePHI, with clear expectations discussed and explanation of sanction/termination should employee violate access policy`,
                `Increased access as job responsibilities change, and`,
                `Access to different systems and applications as job responsibilities change and new systems and applications are added to the network.`,
            ]
        },
        {
            text: [
                {text: `\nSecurity Password Management`, bold: true, italics: true},
                `\n\n`,
                `To ensure that passwords created and used by `,
                {text: practiceName, bold: true},
                ` to access any network, system or application used to access, transmit, receive or store ePHI is properly safeguarded the following procedures are established:`,
                `\n\n`
            ]
        },
        {
            ol: [
                `All team members who access networks, systems or applications used to access, transmit, receive or store ePHI will be supplied with, or self-select a unique user identification and password to access ePHI.`,
                `All team members must supply a password in conjunction with their unique user identification to gain access to any application or database system used to create, transmit, receive or store ePHI.`,
                `All passwords used to gain access to any network, system or application used to access, transmit, receive or store ePHI must be of sufficient complexity to ensure that it is not easily guessable.`,
                `Team members are responsible for the proper use and protection of their passwords and must adhere to the following guidelines:\n`,
                {
                    type: 'lower-alpha',
                    ol: [
                        `Passwords are only to be used for legitimate access to networks, systems or applications;`,
                        `Passwords must not be inappropriately disclosed to other team members or individuals;`,
                        `Team members must not allow other team members or individuals to use their password;`,
                        `Passwords must not be written down, posted or exposed in an insecure manner such as on a notepad or posted on the workstation; and`,
                        `Login attempts shall be monitored by the system administrator.`,
                    ]
                }
            ]
        },
        {
            text: [
                {text: `\n\n\n\nSecurity Password Structure`, bold: true, italics: true},
                `\n\n`,
                `To ensure that all passwords used to control access to any network, system, application, media or file containing ePHI are secure and not easily guessed, the following procedures are established: `,
                `\n\n`
            ]
        },
        {
            ol: [
                `Passwords must be a minimum of eight characters in length;`,
                `Passwords must incorporate three of the following characteristics:`,
                {
                    type: 'lower-alpha',
                    ol: [
                        `Any lower case letters (a-z);`,
                        `Any upper case letters (A-Z);`,
                        `Any numbers (0-9); and`,
                        `Any punctuation or non-alphanumeric characters found on a standard ASCII keyboard (! @ # $ % ^ & * ( ) _ - + = { } [ ] : ; “ ‘ | \ / ? < > , . ~ \`).`,
                    ]
                },
                `Passwords should not include easily guessed information such as personal information, names, pets, birth dates, etc.; and`,
                `Passwords should not be words found in a dictionary.`
            ]
        },
        {
            text: [
                '\n\nDate Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
        `\n\n\nRelevant Forms: PASSWORD AUTHORIZATION FORM`
    ],
    styles
})

export default PasswordPolicy