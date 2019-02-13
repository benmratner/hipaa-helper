import styles from './styles'

const SecurityTrainingPolicy = (dateAdopted: Date) => ({
    content: [
        {
            text: 'SECURITY AWARENESS AND TRAINING POLICY',
            style: 'header'
        },
        `\n\n`,
        `It is the policy of the practice to provide security training for all team members (including management). Training includes protection from malicious software, login monitoring, password protection, vulnerabilities of the practice’s ePHI as identified in the practice’s Risk Analysis, the practice security policies and procedures, and other pertinent topics. The training also emphasizes the need for a “culture of security” in the practice.`,
        {
            ul: [
                `Training is to be provided to all current team members prior to the April 20, 2015 implementation of the HIPAA Security Regulation and logged on the accompanying training chart.`,
                `Training is provided to new team members, including temporary employees, interns, externs, residents, and others with potential access to ePHI within a reasonable time after they join the practice.`,
                `Training updates are provided to all team members periodically and in the event of a major change in the practice environment (new information processing hardware or software, practice move or reconfiguration, security breach).`,
                `All team members must provide signed acknowledgement of the training.`,
                `Security reminders are provided by the practice Security Officer to all team members periodically and/or in the event of any changes that may affect the privacy or security of ePHI in the practice. Such reminders are used to update team members if a security breach or threat is identified or any corrective or preventive action is taken.`
            ]
        },
        `\n\n`,
        {
            text: [
                '\n\nDate Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
        `\n\n\nRelevant Forms: SECURITY AWARENESS TRAINING LOG`
    ],
    styles
})

export default SecurityTrainingPolicy