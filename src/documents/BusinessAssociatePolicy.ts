import styles from './styles'

const BusinessAssociatePolicy = (dateAdopted: Date) => ({
    content: [
        {
            text: 'BUSINESS ASSOCIATE AGREEMENT POLICY',
            style: 'header'
        },
        `\n\n`,
        `Business Associate contracts are in place with all business associates who create, receive, maintain, or transmit ePHI. Satisfactory assurances have been obtained from business associates that they will appropriately safeguard information. A definition as to what constitutes satisfactory assurances has been developed and documented. In cases where Business Associate contracts are not applicable, other arrangements are made between organizations and the business associate to keep data confidential.`,
        `\n\n\n\n\n`,
        {
            text: [
                'Date Policy Adopted: ',
                {text: dateAdopted, bold: true}
            ]
        },
        `\n\n\n\n`,
        `Relevant Forms: SAMPLE BUSINESS ASSOCIATE AGREEMENT`
    ],
    styles
})

export default BusinessAssociatePolicy