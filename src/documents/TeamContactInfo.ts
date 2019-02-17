import styles from './styles'
import { TableRow, TeamMemberContactInfo } from '#/types';
import { addressToString, formatPhoneNumber } from '#/utils';

const TeamContactInfo = (team: TableRow<TeamMemberContactInfo>[]) => ({
    content: [
        {
            text: 'TEAM CONTACT INFORMATION LIST',
            style: 'header'
        },
        `\n`,
        {
            table: {
                widths: ['*', '*', '*', '*', '*'],
                headerRows: 1,
                body: [
                    [
                        {
                            text: 'Name',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Address',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Home Phone',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Cell Phone',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Spouse',
                            style: 'tableHeader'
                        },
                    ],
                    ...team.map(teamMember => [
                        {
                            text: teamMember.values.name,
                            style: 'tableItem'
                        },
                        {
                            text: addressToString(teamMember.values.address),
                            style: 'tableItem'
                        },
                        {
                            text: teamMember.values.homePhone ? formatPhoneNumber(teamMember.values.homePhone) : '',
                            style: 'tableItem'
                        },
                        {
                            text: teamMember.values.cellPhone ? formatPhoneNumber(teamMember.values.cellPhone) : '',
                            style: 'tableItem'
                        },
                        {
                            text: teamMember.values.spouse,
                            style: 'tableItem'
                        }
                    ])
                ]
            }
        }
    ],
    styles
})

export default TeamContactInfo