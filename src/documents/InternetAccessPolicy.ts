import styles from './styles'

const InternetAccessPolicy = (practiceName: string, dateAdopted: Date) => ({
    content: [
        {
            text: 'POLICY ON INTERNET ACCESS AND USE (INCLUDING EMAIL)\n\n',
            style: 'header'
        },
        {
            text: [
                `Internet access to global electronic information resources on the World Wide Web (www) and through `,
                { text: practiceName, bold: true },
                ` e-mail system is provided by `,
                { text: practiceName, bold: true },
                ` to assist team members in obtaining work-related information ONLY.`,
                `\n\n`,
                `All ePHI transmitted over the Internet will be encrypted. There will be no ePHI sent in emails.`
            ]
        },
        {
            text: [
                { text: `\nScope`, bold: true, italics: true },
                `\n\n`,
                `This policy applies to all `,
                { text: practiceName, bold: true },
                ` team members who have access to the Internet. This policy also applies to all Internet access using `,
                { text: practiceName, bold: true },
                ` equipment, as well as Internet access when personal equipment is used, such as laptops, tablets, PDAs and smart phones.`
            ]
        },
        {
            text: [
                { text: `\nProcedure`, bold: true, italics: true },
                `\n\n`,
                `All Internet data transmission, website use and review, or e-mail that is composed, transmitted or received via `,
                { text: practiceName, bold: true },
                ` computer communications systems is considered to be part of the official records of `,
                { text: practiceName, bold: true },
                `and, as such, is subject to disclosure to law enforcement or other third parties. Consequently, team members will always ensure that the information contained in internet e- mail messages and other transmissions is accurate, appropriate, ethical and lawful.`,
                `\n\n`,
                `The equipment, services and technology provided to access the internet and electronic mail system remain at all times the property of `,
                { text: practiceName, bold: true },
                `. As such, `,
                { text: practiceName, bold: true },
                ` may monitor internet traffic without your knowledge, and retrieve and read any data composed, sent or received through `,
                { text: practiceName, bold: true },
                ` online connections and stored in `,
                { text: practiceName, bold: true },
                `computer systems.`,
                `\n\n`,
                `Data that is composed, transmitted, accessed or received via the Internet or e-mail must not contain content that could be considered discriminatory, offensive, obscene, threatening, harassing, intimidating or disruptive to any employee or other person. Examples of unacceptable content may include, but are not limited to, sexual comments or images, racial slurs, gender-specific comments or any other comments or images that could reasonably offend someone on the basis of race, age, sex, religious or political beliefs, national origin, disability, sexual orientation or any other characteristic protected by law.`,
                `\n\n`,
                `Abuse of Internet access and the e-mail system in violation of the law or `,
                { text: practiceName, bold: true },
                ` policies will result in disciplinary action, up to and including termination of employment. Team members may also be held personally liable for any violations of this policy.`,
                `\n\n`,
                `The following behaviors are examples of actions and activities that are prohibited and can result in disciplinary action:`,
            ]
        },
        {
            ol: [
                `Sending or posting discriminatory, harassing or threatening messages or images;`,
                `Accessing any web sites that are pornographic in nature, including any “adult sites”;`,
                `Using the organization’s time and resources for personal use or pleasure without prior authorization;`,
                `Stealing, using or disclosing someone else’s code or password without authorization;`,
                `Copying, pirating or downloading software and electronic files without permission;`,
                `Sending or posting confidential material, trade secrets or proprietary information outside of the
                organization;`,
                `Sending or posting messages or material that could damage the organization’s image or
                reputation;`,
                `Sending or posting messages that defame or slander other individuals;`,
                `Attempting to break into the computer system of another organization or person;`,
                `Refusing to cooperate with a security investigation;`,
                `Sending or posting chain letter, solicitations or advertisements not related to business purposes
                or activities;`,
                `Using the Internet for political causes or activities, religious activities or any sort of gambling;`,
                `Sending or posting messages that disparage another organization’s products or services;`,
                `Sending anonymous e-mail or text messages;`,
                `All software used to access the Internet shall be configured to use a firewall;`,
                {
                    text: [
                        `Non-business related purchases made over the Internet are prohibited. Business related purchases are subject to `,
                        { text: practiceName, bold: true },
                        ` procurement rules; and`
                    ]
                },
                {
                    text: [
                        `All Sensitive `,
                        { text: practiceName, bold: true },
                        ` material, especially PHI and ePHI, transmitted over external networks must be encrypted.`
                    ]
                },
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

export default InternetAccessPolicy