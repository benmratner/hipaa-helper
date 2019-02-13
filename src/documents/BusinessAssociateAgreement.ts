import styles from './styles'

type Address = {
    addressLine1: string,
    addressLine2?: string,
    city: string,
    state: string,
    zip: string
}

export type Args = {
    doctorName: string,
    doctorBusinessAddress: Address, 
    associateName: string, 
    associateBusinessAddress: Address,
    associateServicesType: string,
    associateServicesDescription: string,
    insuranceAmount: number,
    doctorMailingAddress: Address
    associateMailingAddress: Address
    agreementDay: number,
    agreementMonth: string,
    agreementYear: number,
    doctorTitle: string,
    associateTitle: string
}

function addressToString(address: Address): string {
    return `${address.addressLine1}, ${address.addressLine2 ? `${address.addressLine2}, ` : '' }${address.city}, ${address.state} ${address.zip}`
}

function addressToArray(address: Address) {
    const arr = [address.addressLine1]
    if (address.addressLine2){
        arr.push(address.addressLine2)
    }
    arr.push(`${address.city}, ${address.state} ${address.zip}`)
    return arr
}

const BusinessAssociateAgreement = (args: Args) => ({
    content: [
        {
            text: 'BUSINESS ASSOCIATE AGREEMENT',
            style: 'header'
        },
        `\n`,
        {
            text: [
                `This Business Associate Agreement (“BAA”) is made and entered into between `,
                {text: args.doctorName, bold: true},
                `, (DOCTOR), having its principal place of business at `,
                {text: addressToString(args.doctorBusinessAddress), bold: true},
                ` and `,
                {text: args.associateName, bold: true},
                ` (“Business Associate” or “BA”), having its principal place of business at [specify address] `,
                {text: addressToString(args.associateBusinessAddress), bold: true},
            ]
        },
        `\n`,
        `RECITALS:`,
        `\n`,
        `DOCTOR is a dentist and is a “covered entity” within the meaning of the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”), the “Privacy Rule” standards, and the “Security Rule” (Security Standards for the Protection of Electronic Health Information at 45 CFR Part 160 and Part 164, Subparts A and C) for the Security and Privacy of Individually Identifiable Health Information promulgated by the Department of Health and Human Services (“DHHS”) pursuant thereto.`,
        `\n`,
        {
            text: [
                `BA provides [insert type of services] `,
                {text: args.associateServicesType, bold: true},
                ` to DOCTOR, which services necessarily involve the access to, generation of, use of, or disclosure of health information that identifies individual patients (protected health information – “PHI”). Accordingly, BA is a business associate of DOCTOR as defined in the HIPAA Privacy and Security Rule.`
            ]
        },
        `\n`,
        `DOCTOR is obligated by the Privacy and Security Rule to obtain “satisfactory assurances” from its business associates as a precondition to permitting a business associate to access, generate, use, or disclose PHI/ePHI on its behalf or in the course of performing services for it.`,
        `\n`,
        `For the foregoing reasons, DOCTOR and BA desire to enter into an agreement that complies with all the requirements of the Privacy and Security Rule regarding business associate “satisfactory assurances.”`,
        `\n`,
        `NOW THEREFORE, in consideration of the foregoing and continuing obligations and mutual promises contained herein, DOCTOR and BA agree as follows:`,
        `\n`,
        `I. DEFINITION OF TERMS`,
        `\n`,
        `Any terms used in this BAA that are defined in the Privacy and Security Rule shall have the same meaning when used in this BAA as they have in the Privacy and Security Rule.`,
        `\n`,
        `In the event of an inconsistency between the provisions of this Agreement and mandatory provisions of the HIPAA Privacy and Security Rule, as amended, the HIPAA Privacy and Security Rule shall control. Where provisions of this Agreement are different than those mandated in the HIPAA Privacy and Security Rule, but are nonetheless permitted by the HIPAA Privacy and Security Rule, the provisions of this Agreement shall control.`,
        `\n`,
        `The term “Protected Health Information” (PHI) means individually identifiable health information including, without limitation, all information, data, documentation, and materials, including without limitation, demographic, medical, and financial information, that relates to the past, present, or future physical or mental health or condition of an individual, the provision of health care to an individual, or the past, present, or future payment for the provision of health care to an individual, and that identifies the individual. “Protected Health Information” includes without limitation “Electronic Protected Health Information” (ePHI) as defined below.`,
        `\n`,
        `The term “Electronic Protected Health Information” (ePHI) means Protected Health Information, which is transmitted by electronic Media (as defined in the HIPAA Privacy and Security Rule) or maintained in electronic Media.`,
        `\n`,
        `Business Associate acknowledges and agrees that all PHI/ePHI that is created or received by Covered Entity (DOCTOR) and disclosed or made available in any form, including paper record, oral communication, audio recording, and electronic display by DOCTOR or its operating units to Business Associate or is created or received by BA on Doctor’s behalf shall be subject to this Agreement. References in this Agreement to “PHI” shall include “ePHI”.`,
        `\n`,
        `II. OBLIGATIONS OF BUSINESS ASSOCIATE`,
        `\n`,
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            ol: [
                `BA is authorized to access, generate, use, or disclose PHI/ePHI as necessary and appropriate to perform the following services on behalf of or for DOCTOR [insert description of services performed by BA]:`
            ]
        },
        `\n`,
        {text: args.associateServicesDescription, bold: true},
        `\n`,
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            start: 2,
            ol: [
                `Except as otherwise limited in this BAA, BA may also use PHI/ePHI for the proper management and administration of BA or to carry out the legal responsibilities of BA.\n\n`,
                `BA agrees to not use or further disclose PHI/ePHI other than as permitted or required by this BAA or as required by law.\n\n`,
                {
                    text: [
                        `BA agrees to use appropriate administrative, physical, and technical safeguards that reasonably and appropriately protect the confidentiality, integrity, and availability of the electronic PHI that it creates, receives, maintains, or transmits on behalf of the DOCTOR to prevent use or disclosure of PHI/ePHI other than as provided for by this BAA.\n\n`,
                        {italics: true, text: ` Appropriate safeguards include, but are not limited to, safeguards such as locking cabinets or rooms where PHI is housed, using computer passwords or other security measures to prevent unauthorized access to PHI in electronic format, implementing policies and procedures describing authorized access and use for BA’s work force, and human resources policies and procedures to enforce these rules.\n\n`}
                    ]
                }
            ]
        },
        `\n`,
        `III. OBLIGATIONS OF DOCTOR`,
        `\n`,
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            ol: [
                `DOCTOR shall provide BA with the notice of privacy practices that DOCTOR produces in accordance with the Privacy and Security Rule, as well as any changes to such notice.\n\n`,
                `DOCTOR shall notify BA of any restriction to the use or disclosure of PHI/ePHI that DOCTOR has agreed to in accordance with the Privacy and Security Rule.\n\n`,
                `DOCTOR shall not request BA to use or disclose PHI/ePHI in any manner that would not be permissible under the Privacy and Security Rule if done by DOCTOR except for uses of PHI/ePHI for the proper administration and management of BA or as required by law.\n\n`,
            ]
        },
        `\n`,
        `IV. TERM AND TERMINATION`,
        `\n`,
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            ol: [
                `Term. The term of this BAA shall commence upon execution of this Agreement, the Security Rule provisions shall take effect on the general Security Rule compliance date (currently April 20, 2005) and shall continue co-terminously with the term of all services being performed by BA for or on behalf of DOCTOR, unless sooner terminated in accordance with paragraph IV(b) hereof.\n\n`,
                `Termination for Cause. Upon DOCTOR'S knowledge of a material breach by BA, DOCTOR shall, at its sole option, do either of the following:\n\n`,
                {
                    separator: ['(', ')'],
                    ol: [
                        `Provide a 15-day opportunity for BA to cure the breach to DOCTOR’S satisfaction or terminate this BAA and the services relationship with BA if BA does not cure the breach to DOCTOR’S satisfaction, or\n\n`,
                        `Immediately terminate this BAA and the services relationship with BA if DOCTOR determines, in its sole discretion, that cure is not possible.\n\n`
                    ]
                }
            ]
        },
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            start: 3,
            ol: [
                `In addition to the termination for cause provisions stated in paragraph IV(b), this BAA may also be terminated in any of the following circumstances:\n\n`,
                {
                    separator: ['(', ')'],
                    ol: [
                        `The services relationship between BA and DOCTOR is terminated for any reason;\n\n`,
                        `The provisions of the Privacy and Security Rule are amended, modified, or changed such that a BAA such as this is no longer mandated;\n\n`,
                        `By the mutual agreement of DOCTOR and BA, provided that either a new BAA must be substituted or the services relationship between BA and DOCTOR must terminate.\n\n`,
                    ]
                }
            ]
        },
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            start: 4,
            ol: [
                `Effect of Termination.\n\n`,
                {
                    separator: ['(', ')'],
                    ol: [
                        `Except as provided in paragraph (2) of this section, upon termination of this BAA for any reason, BA shall return or destroy all PHI/ePHI received from DOCTOR or created or received by BA on behalf of DOCTOR as directed by DOCTOR. DOCTOR has the sole authority to determine whether PHI/ePHI shall be returned or destroyed and shall have the sole authority to establish the terms and conditions of such return or destruction. This provision shall apply to PHI/ePHI that is in the possession of subcontractors or agents of BA. BA shall retain no copies of PHI/ePHI.\n\n`,
                        `In the event that BA believes that returning or destroying PHI/ePHI is infeasible, BA shall provide to DOCTOR an explanation of the conditions that make return or destruction infeasible. Upon DOCTOR’S concurrence that return or destruction of PHI/ePHI is infeasible, BA shall extend the protections of this Agreement to such PHI/ePHI and limit further uses and disclosures of such PHI/ePHI to those purposes that make the return or destruction infeasible for so long as BA maintains such PHI/ePHI.\n\n`,
                        `If this BAA is terminated and not immediately replaced with a substitute Business Associate Agreement, and if the Privacy and Security Rule at that time continues to mandate the execution of a Business Associate Agreement between covered entities and their Business Associates, then the services relationship between BA and DOCTOR shall immediately terminate in synchronized timing with this BAA.\n\n`
                    ]
                }
            ]
        },
        `\n`,
        `V. GENERAL PROVISIONS`,
        `\n`,
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            ol: [
                `BA shall indemnify DOCTOR for any losses, costs, or expenses that DOCTOR sustains, including fines under HIPAA, as a result of any breach by BA of any of its obligations under this BAA.\n\n`,
                `BA shall maintain during the term of this BAA a policy of errors and omissions or other comparable insurance with an insurer acceptable to DOCTOR in the amount of $___________, covering BA’s obligations under this BAA. The policy of insurance shall name DOCTOR as an additional insured. BA shall furnish to DOCTOR such evidence of this insurance, as DOCTOR deems satisfactory upon the commencement of this BAA. BA shall notify DOCTOR of any threatened or actual cancellation or termination of the insurance coverage at least ten days prior to any such action.\n\n`,
                `BA agrees that the terms and conditions of this BAA shall be construed as a general confidentiality agreement that is binding upon BA even if it is determined that BA is not a Business Associate as that term is used in the Privacy and Security Rule.\n\n`,
                `DOCTOR and BA shall not be deemed to be partners, joint venturers, agents, or employees of each other solely by virtue of the terms and conditions of this BAA.\n\n`,
                `This BAA shall not be modified or amended except by a written document that is signed by both parties. DOCTOR and BA agree to modify or amend this BAA if the Privacy and Security Rule changes in a manner that affects the terms and conditions of this BAA or the obligations of covered entities and/or Business Associates.\n\n`,
                `Any communications between DOCTOR and BA regarding this BAA shall be in writing, whether or not oral communications have also occurred. Such communications shall be sent to the following individuals at the following addresses:\n\n`
            ]
        },
        {
            columns: [
                {
                    width: '20%',
                    text: []
                },
                {
                    width: '30%',
                    stack: [
                        `To DOCTOR:`,
                        ...addressToArray(args.doctorMailingAddress)
                    ]
                },
                {
                    width: '30%',
                    stack: [
                        `To BA:`,
                        ...addressToArray(args.associateMailingAddress)
                    ]
                },
                {
                    width: '20%',
                    text: []
                }
            ]
        },
        `\n`,
        `Written communications may be sent by certified or registered U.S. Mail, receipted courier service, receipted hand delivery, receipted fax, or by receipted email.`,
        `\n`,
        {
			separator: ['(', ')'],
            type: 'lower-alpha',
            start: 7,
            ol: [
                `No waiver of any provision of this Agreement, including this paragraph, shall be effective unless the waiver is in writing and signed by the party making the waiver.\n\n`,
                `This BAA is entered into solely for the benefit of the parties and is not entered into for the benefit of any third party, including, without limitation, any patients of DOCTOR or their legal representatives.\n\n`,
                `This BAA is not assignable or delegable without the express advance written consent of the party not seeking to assign or delegate.\n\n`,
                `This BAA shall be governed by and construed in accordance with the laws of the United States of America and the laws of the state of New York.\n\n`,
                `If any provision of this BAA is determined by a court of competent jurisdiction to be invalid or unenforceable, this BAA shall be construed as though such invalid or unenforceable provision were omitted, provided that the remainder of this BAA continues to satisfy all of the Privacy and Security Rules' requirements for a Business Associate Agreement. If it does not, then the parties shall immediately renegotiate this BAA so that it does comply with the requirements of the Privacy and Security Rule or terminate this BAA and the service relationship between the BA and DOCTOR.\n\n`,
                `This BAA contains the entire agreement between the parties pertaining to this subject matter and supersedes all prior understandings, whether written or oral, regarding the same subject matter.\n\n`,
                `The provisions of this BAA dealing with indemnification, insurance, and the construction of this BAA as a general confidentiality agreement shall survive the termination of this BAA for any reason.\n\n`,
            ]
        },
        `In witness whereof, the parties have executed this Business Associate Agreement on the ${args.agreementDay} day of ${args.agreementMonth}, ${args.agreementYear}`,
        `\n\n`,
        {
            columns: [
                {
                    stack: [
                        `COVERED ENTITY (DOCTOR):\n\n`,
                        `By: ${args.doctorName}`,
                        `Title: ${args.doctorTitle}`
                    ]
                },
                {
                    stack: [
                        `BUSINESS ASSOCIATE:\n\n`,
                        `By: ${args.associateName}`,
                        `Title: ${args.associateTitle}`
                    ]
                }
            ]
        }





    ],
    styles
})

export default BusinessAssociateAgreement