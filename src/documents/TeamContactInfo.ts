import styles from './styles'
import { TeamMemberContactInfo } from '#/types';
import { addressToString, formatPhoneNumber } from '#/utils';

const TeamContactInfo = (team: TeamMemberContactInfo[]) => ({
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
                            text: teamMember.name,
                            style: 'tableItem'
                        },
                        {
                            text: addressToString(teamMember.address),
                            style: 'tableItem'
                        },
                        {
                            text: teamMember.homePhone ? formatPhoneNumber(teamMember.homePhone) : '',
                            style: 'tableItem'
                        },
                        {
                            text: teamMember.cellPhone ? formatPhoneNumber(teamMember.cellPhone) : '',
                            style: 'tableItem'
                        },
                        {
                            text: teamMember.spouse,
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