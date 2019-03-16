import styles from './styles'
import { Address } from '#/types'
import { addressToString } from '#/utils'

type Args = {
    name: string,
    date: Date,
    address: Address,
    employeeId: string,
    software: string,
    employeeUserId: string,
    practiceName: string,

}

const PasswordAuthForm = (args: Args) => ({
    content: [
        {
            text: 'PASSWORD AUTHORIZATION FORM',
            style: 'header'
        },
        `\n`,
        {
            text: [
                `Name: `,
                { text: args.name, bold: true },
                `Date: `,
                { text: args.date, bold: true },
            ]
        },
        `\n`,
        {
            text: [
                `Address: `,
                addressToString(args.address)
            ]
        },
        `\n`,
        {
            text: [
                `Employee ID: `,
                args.employeeId
            ]
        },
        `\n`,
        {
            text: [
                `Organizational Software: `,
                args.software
            ]
        },
        `\n`,
        {
            text: [
                `Employee User ID: `,
                args.employeeUserId
            ]
        },
        `\n`,
        {
            text: [
                `I agree that I will comply with all privacy, security and confidentiality policies and procedures set in place during my entire employment or association with `,
                { text: args.practiceName, bold: true }
            ]
        },
        `\n`,
        {
            text: [
                `If I, at any time, knowingly or inadvertently breach privacy, security and/or patient confidentiality policies, and procedures, or become aware of any breach of patient information, I agree to notify the Privacy Officer and/or Security Officer of `,
                { text: args.practiceName, bold: true },
                `immediately. In addition, I understand that a breach of privacy, security or patient confidentiality policies may result in suspension or termination of my employment or position at `,
                { text: args.practiceName, bold: true },
                `.`
            ]
        },
        `\n`,
        `Upon termination of my employment or association for any reason, or at any time upon request, I agree to return any and all patient confidential information in my possession. This agreement is not a contract for continued employment.`,
        `\n\n`,
        { text: `Employee Signature: ________ Date: _______`, italics: true },
        { text: `Privacy/Security Officer Signature:   ________ Date: ________`, italics: true }


    ],
    styles
})

export default PasswordAuthForm