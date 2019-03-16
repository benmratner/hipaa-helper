import * as React from 'react'
import { connect } from 'react-redux'
import Table from '#/components/Table'
import { HardwareInventoryItem, TableColumn, TableRows } from '#/types'
import { updateHardwareInventoryRow } from '#/actions/pages'

type Props = {
    rows: TableRows<HardwareInventoryItem>,
    updateHardwareInventoryRow: typeof updateHardwareInventoryRow
}

const HardwareInventoryTable = (props: Props) => {
    const columns: TableColumn[] = [
        {
            displayName: 'Hardware',
            key: 'name',
            input: (value, onChange) => <input value={value} onChange={onChange} />
        },
        {
            displayName: 'Location in Office',
            key: 'location',
            input: (value, onChange) => <input value={value} onChange={onChange} />
        },
        {
            displayName: 'Type of Hardware',
            key: 'type',
            input: (value, onChange) => <input value={value} onChange={onChange} />
        },
        {
            displayName: 'Operating System, Hardware Size, RAM & CPU Capacity',
            key: 'hardwareDetails',
            input: (value, onChange) => <input value={value} onChange={onChange} />
        },
        {
            displayName: 'Serial Number',
            key: 'serialNo',
            input: (value, onChange) => <input value={value} onChange={onChange} />
        },
        {
            displayName: 'Date Purchased',
            key: 'datePurchased',
            input: (value, onChange) => <input value={value} onChange={onChange} />
        },
        {
            displayName: 'Cost',
            key: 'cost',
            input: (value, onChange) => <input value={value} onChange={onChange} />
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