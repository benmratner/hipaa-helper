import styles from './styles'
import { EmergencyContact } from '#/types'
import { formatPhoneNumber } from '#/utils'

const EmergencyContactList = (contacts: EmergencyContact[]) => ({
    content: [
        {
            text: 'EMERGENCY CONTACT LIST',
            style: 'header'
        },
        `\n\n`,
        ...contacts.map(contact => (
            {
                columns: [
                    {
                        width: '10%',
                        text: []
                    },
                    {
                        width: '*',
                        text: `${contact.name}:`,
                        alignment: 'right',
                        marginRight: 10,
                        marginBottom: 5
                    },
                    {
                        width: '*',
                        text: formatPhoneNumber(contact.phone)
                    },
                    {
                        width: '10%',
                        text: []
                    }
                ]
            }
        ))
    ],
    styles
})

export default EmergencyContactList