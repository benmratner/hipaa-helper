import styles from './styles'

const DataControlPolicy = (practiceName: string, dateAdopted: Date) => ({
    content: [
        {
            text: 'DATA, DEVICE AND MEDIA CONTROL POLICY\n\n',
            style: 'header'
        },
        {
            text: [
                {text: practiceName, bold: true},
                ` carefully monitors and regulates the receipt and removal of hardware and electronic media that contain ePHI, PHI and other patient and business information into and out of the facility. These controls pertain to the movement, re-use or disposal of hardware and media within `,
                {text: practiceName, bold: true},
                `  facility.`,
                `\n\n`

            ]
        },
        `It is the policy of the practice to:\n\n`,
        {
            ul: [
                `Document the receipt and removal of hardware and electronic media that contain ePHI into and out of the facility and movement of these items within the facility.`,
                `Require proper disposition of ePHI and/or the hardware or electronic media on which it is stored.`,
                `Remove ePHI from electronic media before the media are made available for reuse.`
            ]
        },
        {text: `\nDisposal\n\n`, bold: true, italics: true},
        {
            ol: [
                {
                    text: [
                        `Sanitizing Hard Disk Drives: All hard disk drives that have been approved by the Privacy or Security Officer for removal and disposal or taken out of active use shall be sanitized so that all programs and data have been removed from the drive.\n`,
                        {text: practiceName, bold: true},
                        ` will follow industry best practices when cleaning off hard drives;\n\n`

                    ]
                },
                {
                    type: 'lower-alpha',
                    ol: [
                        {
                            text: [
                                {text: practiceName, bold: true},
                                ` will destroy hard drives when they will no longer be used.`
                            ]
                        },
                        `No hard drive will be reissued, sold or otherwise discarded. It will be destroyed.`
                    ]
                },
                `All Media on which the PHI is stored or recorded will be destroyed in one of the following ways:`,
                {
                    type: 'lower-alpha',
                    ol: [
                        `Paper, film, or other hard copy media shall be shredded or destroyed such that the PHI cannot be read or otherwise cannot be reconstructed; and`,
                        `Electronic media and tools hard drives have been shredded or destroyed such that the ePHI cannot be read or otherwise cannot be reconstructed.`
                    ]
                },
                `Media Re-Use: All ePHI and other patient and business information shall be removed from any media devices before they are made available for reuse.\n\n`
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

export default DataControlPolicy