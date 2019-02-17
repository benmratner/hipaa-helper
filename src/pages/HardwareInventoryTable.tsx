import * as React from 'react'
import { connect } from 'react-redux';
import Table from '#/components/Table';
import { HardwareInventoryItem, TableRows } from '#/types';
import { updateHardwareInventoryRow } from '#/actions/pages'

type Props = {
    rows: TableRows<HardwareInventoryItem>,
    updateHardwareInventoryRow: typeof updateHardwareInventoryRow
}

const HardwareInventoryTable = (props: Props) => {
    const columns = [
        {
            displayName: 'Hardware',
            key: 'name',
            input: (onChange) => <input onChange={onChange} />
        },
        {
            displayName: 'Location in Office',
            key: 'location',
            input: (onChange) => <input onChange={onChange} />
        },
        {
            displayName: 'Type of Hardware',
            key: 'type',
            input: (onChange) => <input onChange={onChange} />
        },
        {
            displayName: 'Operating System, Hardware Size, RAM & CPU Capacity',
            key: 'hardwareDetails',
            input: (onChange) => <input onChange={onChange} />
        },
        {
            displayName: 'Serial Number',
            key: 'serialNo',
            input: (onChange) => <input onChange={onChange} />
        },
        {
            displayName: 'Date Purchased',
            key: 'datePurchased',
            input: (onChange) => <input onChange={onChange} />
        },
        {
            displayName: 'cost',
            key: 'cost',
            input: (onChange) => <input onChange={onChange} />
        }
    ]
    return (
        <Table 
            columns={columns}
            saveRow={props.updateHardwareInventoryRow}
            rows={props.rows}
        />
    )
}
const mapStateToProps = (state) => ({
    rows: state.hardwareInventory
})

const mapDispatchToProps = ({
    updateHardwareInventoryRow
})

export default connect(mapStateToProps, mapDispatchToProps)(HardwareInventoryTable)