import styles from './styles'

const SecurityIncidentPolicy = (dateAdopted: Date) => ({
    content: [
        {
            text: 'PRIVACY AND SECURITY INCIDENT (BREACH) RESPONSE AND REPORTING POLICY',
            style: 'header'
        },
        `\n\n`,
        `“Privacy or Security incident” means the attempted or successful unauthorized access, use, disclosure, modification, or destruction of information or interference with system operations in an information system. Incidents may include, but are not limited to:`,
        {
            ul: [
                `Accidental user error.`,
                `Improper use of access privileges.`,
                `Employee access for the purpose of damaging or stealing information.`,
                `Physical breach.`,
                `External breach to illegally access information.`,
                `Technical breach impacting operations or compromising systems or information.`
            ]
        },
        `\n\n`,
        `It is the policy of the practice to:`,
        {
            ul: [
                `Require each workforce member to report a privacy or security incident to the Privacy and/or Security Officer immediately upon discovery of the incident or the suspicion of such an incident. The purpose of the reporting of an incident is to allow for mitigating any damage that may have occurred and repairing or correcting the cause of the incident to assure the incident does not recur. Examples of incidents that shall be reported are:`,
                {
                    type: 'circle',
                    ul: [
                        `Attempts to gain unauthorized access to files, systems, or data.`,
                        `Unwanted disruption or denial of service.`,
                        `Unauthorized use or access of a system fo rtransmission, processing, or storage, exploitation tool placement, or degradation of data.`,
                        `Changes to system hardware, firmware, and/or usage of software characteristics without the knowledge, instruction, or consent of the Privacy or Security Officer.`,
                        `Discovery of malicious code, which includes, but is not limited to, worms, viruses, Trojans, web defacement, etc.`,
                        `Any breach of the computing environment that has the potential to spread outside of the practice’s immediate control.`
                    ]
                },
                `If the incident was accidental or the result of workforce negligence, the Privacy and/or Security Officer may determine that re-education on privacy and security procedures is necessary for the Workforce. If the incident was caused by a computer/information system “breakdown” and cannot be corrected by the practice technical expert, outside technical expertise will be sought. The practice will continually upgrade the system privacy and security software upon recommendation of the system manufacturer/provider.`,
                `Document all privacy or security incidents. Whenever an incident occurs, the Privacy and/or Security Officer shall be responsible for the completion of a Report of Privacy or Security Incident form or other applicable documentation. The form shall be kept by the practice for at least six (6) years or until all questions and/or legal actions are completed, whichever is later.`,
                `Sanction workforce members for failure to comply or ensure compliance with the reporting of privacy or security incident requirements, which may result in disciplinary action up to, and including dismissal (see Sanction Policy).`,
                `Require at regularly scheduled intervals of not less than once per year the Privacy and/or Security Officer to review the incident reports associated with compliance with the HIPAA’s Privacy and Security Rules to determine the existence of incident patterns, outliers, or unusual behavior related to access and security and take corrective actions if necessary.`,
                `Require, in the event a Business Associate reports a security incident, the Business Associate to complete an incident report including its actions to remedy the problem. Failure to report and/or remedy the problem may give rise to a breach of the Business Associate Agreement.`
            ]
        },
        {
            text: [
                '\n\nDate Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
        `Relevant Forms: REPORT OF PRIVACY/SECURITY INCIDENT`
    ],
    styles
})

export default SecurityIncidentPolicy