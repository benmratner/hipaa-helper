import styles from './styles'

const EvaluationPolicy = (dateAdopted: Date) => ({
    content: [
        {
            text: 'EVALUATION POLICY\n\n',
            style: 'header',
        },
        {
            text: `It is the policy of the practice to periodically:\n\n`,
            style: 'paragraph'
        },
        {
            ul: [
                `Perform a technical and non-technical evaluation based, initially, on the standards implemented under the HIPAA Security rule and, subsequently, in response to environmental or operational changes that affect the security of electronic protected health information.`,
                `Review and update documentation periodically, as needed, or in response to environmental or operational changes.`,
                `Test and, if warranted, revise the Practice Contingency Plan.`,
                `Review Privacy/Security Incident Reports to determine if adequate measurers have been
                taken to prevent similar security breaches in the future.`,
                `Review team job changes at least annually to ensure access authorized to each workforce
                member remains appropriate to their job responsibilities.`,
                `Ensure that user IDs and passwords for any workforce members who have terminated
                employment with the practice have been removed from the system by attempting to enter the system with those passwords and IDs and remove them if they are still recognized by the system.`
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

export default EvaluationPolicy