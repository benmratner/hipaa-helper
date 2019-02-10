import styles from './styles'

const PracticeContingencyPlan = (dateAdopted: Date) => ({
    content: [
        {
            text: 'PRACTICE CONTINGENCY PLAN',
            style: 'header'
        }, 
        [
            `(Emergency Mode Operation and Disaster Recovery Plan)`,
            `\n\n`,
            `In the event that operation of the practice is jeopardized because electronic Protected Health Care Information (ePHI) is lost or substantially impaired (due to catastrophic computer system malfunction, physical damage to the practice, or other factors), it is the policy of the practice to restore practice operations within a reasonable period. The practice Security Officer will be responsible for:`,
        ],
        {
            ul: [
                `Reloading and restoring operating programs and practice files.`,
                `Employee contact and coordination. Employee contact list is appended to this manual.`,
                `Contacting appropriate emergency response agencies as needed. Emergency contact list is appended to this manual.`,
                `Patient contact and scheduled appointment coordination through our online patient contact system.`,
                `Vendor and business partner contact.`,
                `Coordination of deliveries.`,
                `Contact with computer hardware or software vendor or programming consultant to secure new hardware or software or restore operation of the system.`,
                `Securing, if necessary, a temporary work site with all necessary equipment (including computers) and utilities (including telephones) and coordinating the move of team and equipment to that location.`,
                `Maintaining the availability of such a temporary practice location or practice to which patients can be referred through, for example, an agreement with a nearby practice having compatible operating software on which practice records can be accessed and through which operations (e.g., billing and ordering) can be continued in the normal manner.`,
                `Documenting all security incidents and the practice’s response and maintaining the documentation with the practice’s HIPAA Security Records (See Privacy and Security Incident Form).`,
            ]
        },
        {
            text: [
                'Date Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        }
    ],
    styles
})

export default PracticeContingencyPlan