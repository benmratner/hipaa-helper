import styles from './styles'
import { HardwareInventoryItem } from '#/types';


const HardwareInventory = (items: HardwareInventoryItem[]) => ({
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
                            text: item.name,
                            style: 'tableItem'
                        }, {
                            text: item.location,
                            style: 'tableItem'
                        }, {
                            text: item.type,
                            style: 'tableItem'
                        }, {
                            text: `${item.os}, ${item.storage}, ${item.ram}, ${item.cpu}`,
                            style: 'tableItem'
                        }, {
                            text: item.serialNo,
                            style: 'tableItem'
                        }, {
                            text: item.datePurchased,
                            style: 'tableItem'
                        }, {
                            text: `$${item.cost.toFixed(2)}`,
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
        
