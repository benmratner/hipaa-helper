import styles from './styles'

const FacilityControlsPolicy = (dateAdopted: Date) => ({
    content: [
        {
            text: 'FACILITY CONTROLS POLICY',
            style: 'header'
        },
        {
            text: `It is the policy of the practice to:\n\n`,
            style: 'paragraph'
        },
        {
            ul: [
                `Limit physical access to electronic information systems and the facility or facilities in which they are housed while also ensuring that properly authorized access is allowed.`,
                `Safeguard the facility and the equipment therein from unauthorized physical access, tampering, and theft through the use of entry door locks, alarm systems, anti-intrusion devices, and other physical protective measures.`,
                `Periodically assess the overall physical security needs of the practice, including facility location, layout, design, and construction.`,
                `Periodically assess any need for and reasonableness of stronger or different entry door locks, alarm systems, and anti-intrusion devices.`,
                `Adequately confirm the identities of visitors to the practice.`,
                `Locate workforce members in places where they can see and control access to the practice and ensure that only authorized individuals have access to confidential information.`,
                `Repair and modify the physical components of a facility that are related to security (for example, hardware, walls, doors, and locks) as necessary.`,
            ]
        },
        {
            text: [
                'Date Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
        `Relevant Forms: MAINTENANCE RECORD`
    ],
    styles
})

export default FacilityControlsPolicy