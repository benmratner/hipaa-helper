import styles from './styles'

type Args = {
    teamMemberName: string,
    terminationDate: Date,
    position: string,
    initials: string,
    dates: {
        passwordTerminated: Date,
        accountDeactivated: Date,
        keysReturned: Date,
        propertyReturned: Date,
        phiReturned: Date
    }
}

const TerminationChecklist = (args: Args) => ({
    content: [
        {
            text: 'TEAM MEMBER TERMINATION CHECKLIST',
            style: 'header'
        },
        `\n`,
        `This checklist shall be completed by the Information Security Officer upon the termination of a team member for any reason–whether voluntary or involuntary.`,
        `\n`,
        {
            text: [
                `Name of Team Member: `,
                { text: args.teamMemberName, bold: true }
            ]
        },
        `\n`,
        {
            text: [
                `Date of Termination: `,
                { text: args.terminationDate, bold: true },
                `Position: `,
                { text: args.position, bold: true }
            ]
        },
        `\n`,
        {
            widths: ['50%', '30%', '20%'],
            columns: [
                {
                    stack: [
                        { text: `Item`, bold: true },
                        `Network password terminated`,
                        `User accounts deactivated`,
                        `Keys returned`,
                        `All company property returned`,
                        `All PHI and ePHI returned`
                    ]
                },
                {
                    stack: [
                        { text: `Date Completed`, bold: true },
                        args.dates.passwordTerminated,
                        args.dates.accountDeactivated,
                        args.dates.keysReturned,
                        args.dates.propertyReturned,
                        args.dates.phiReturned,
                    ]
                },
                {
                    stack: [
                        { text: `Initials`, bold: true },
                        args.initials,
                        args.initials,
                        args.initials,
                        args.initials,
                        args.initials,
                    ]
                }
            ]
        }
    ],
    styles
})

export default TerminationChecklist