import styles from './styles'

const PatientAuthorization = (practiceName: string) => ({
    content: [
        {
            text: 'AUTHORIZATION AND CONSENT TO SEND UNENCRYPTED PATIENT INFORMATION BY EMAIL AND OTHER ELECTRONIC MEANS',
            style: 'header'
        },
        {
            text: [
                `\n\n`,
                `Until I tell you in writing to stop, I authorize `,
                {text: practiceName, bold: true},
                ` to transmit patient information relating to my treatment, health, or payment by email or other electronic means, without encryption or special security precautions, to me or someone I designate, or to other health care providers, health plans and others involved in my treatment, payment for my treatment, or `,
                {text: practiceName, bold: true},
                ` health care operations. The patient information that may be emailed may include my x-rays, health history, diagnosis, treatment, and payment records.`,
                `\n\n`,
                `I understand that:`
            ]
        },
        {
            ul: [
                `I do not have to sign this form.`,
                `My treatment, payment, enrollment and eligibility for benefits will not be affected by my
                decision about signing this form.`,
                { 
                    text: [
                        `If I do not sign this form, `,
                        {text: practiceName, bold: true},
                        ` may use other ways to send my information, such as U.S. Mail, or may ask me to send my information to third parties myself.`,
                    ]
                },
                {
                    text: [
                        {text: practiceName, bold: true},
                        ` does not email such sensitive personal information as Social Security number, credit card number, mental health diagnosis, genetic information, alcohol/substance abuse, or positive HIV status unless the patient insists.`
                    ]
                }
            ]
        },
        `\n\n`,
        {
            text: [
                `I can tell you in writing to stop emailing my patient information at any time, but if I do so, this will not affect emails that `,
                {text: practiceName, bold: true},
                ` already sent before receiving my written instructions to stop.`
            ]
        },
        `\n\n`,
        `Patient name (please print)  ______________________________________`,
        `\n\n`,
        `Signature: ______________________________________ Date: ________________`,
        `\n\n\n\n\n\n\n`,
        {text: `Dental Team: Give a copy of this signed form to the patient. Save the original in the patient’s file.`, bold: true}
    ],
    styles
})

export default PatientAuthorization