import styles from './styles'
import { HardwareInventoryItem, TableRow } from '#/types';


const HardwareInventory = (items: TableRow<HardwareInventoryItem>[]) => ({
    content: [
        {
            text: 'COMPUTER HARDWARE INVENTORY\n',
            style: 'header',
        },
        {
            table: {
                headerRows: 1,
                body: [
                    [
                        {
                            text: 'Hardware',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Location in Office',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Type of Hardware',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Operating System, Storage Size, RAM & CPU Capacity',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Serial Number',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Date Purchased',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Cost',
                            style: 'tableHeader'
                        }
                    ],
                    ...items.map(item => [
                        {
                            text: item.values.name,
                            style: 'tableItem'
                        }, {
                            text: item.values.location,
                            style: 'tableItem'
                        }, {
                            text: item.values.type,
                            style: 'tableItem'
                        }, 
                        // {
                        //     text: `${item.values.os}, ${item.values.storage}, ${item.values.ram}, ${item.values.cpu}`,
                        //     style: 'tableItem'
                        // }, 
                        ``,
                        {
                            text: item.values.serialNo,
                            style: 'tableItem'
                        }, {
                            text: item.values.datePurchased,
                            style: 'tableItem'
                        }, {
                            text: `$${parseFloat(item.values.cost).toFixed(2)}`,
                            style: 'tableItem'
                        }
                    ])
                ],
            }
        },
    ],
    styles
})

export default HardwareInventory
        
