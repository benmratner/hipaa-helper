import styles from './styles'
import { SoftwareInventoryRow } from '#/types';


const SoftwareInventory = (items: SoftwareInventoryRow[]) => ({
    pageOrientation: 'landscape',
    content: [
        {
            text: 'RISK ASSESSMENT',
            style: 'header',
        },
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', 'auto', 'auto', 'auto'],
                body: [
                    [
                        {
                            text: 'Software Title and Version',
                            style: 'tableHeader'
                        }, {
                            text: 'Serial/Product ID Number',
                            style: 'tableHeader'
                        }, {
                            text: 'No. of Licenses/ License Numbers',
                            style: 'tableHeader'
                        }, {
                            text: 'Date Purchased',
                            style: 'tableHeader'
                        }, {
                            text: 'Date of Last Update',
                            style: 'tableHeader'
                        }, {
                            text: 'Cost',
                            style: 'tableHeader'
                        }
                    ],
                    ...items.map(item => [
                        {
                            text: item.name,
                            style: 'tableItem'
                        }, {
                            text: item.serialNo,
                            style: 'tableItem'
                        }, {
                            text: item.licenseCount,    //TODO: figure out how to display this
                            style: 'tableItem'
                        }, {
                            text: item.datePurchased,
                            style: 'tableItem'
                        }, {
                            text: item.dateUpdated,
                            style: 'tableItem'
                        }, {
                            text: item.cost,
                            style: 'tableItem'
                        }
                    ])
                ]
            }
        }
    ],
    styles
})

export default SoftwareInventory