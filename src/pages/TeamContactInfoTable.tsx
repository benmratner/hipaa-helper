import * as React from 'react'
import Table from '#/components/Table'
import { TableColumn, TableRows, TeamMemberContactInfo } from '#/types'
import { AddressInput } from '#/components'
import { connect } from 'react-redux'
import { updateTeamMemberContactInfoRow } from '#/actions/pages'

type Props = {
    updateTeamMemberContactInfoRow: typeof updateTeamMemberContactInfoRow,
    rows: TableRows<TeamMemberContactInfo>
}

class TeamContactInfo extends React.Component<Props> {

    render() {
        const columns: TableColumn[] = [
            {
                displayName: 'Name',
                key: 'name',
                input: (value, onChange) => <input value={value} onChange={onChange} />
            }, {
                displayName: 'Address',
                key: 'address',
                input: (value, onChange) => <AddressInput value={value} onChange={onChange}/>
            }, {
                displayName: 'Home Phone',
                key: 'homePhone',
                input: (value, onChange) => <input value={value} onChange={onChange} />
            }, {
                displayName: 'Cell Phone',
                key: 'cellPhone',
                input: (value, onChange) => <input value={value} onChange={onChange} />
            }, {
                displayName: 'Spouse',
                key: 'spouse',
                input: (value, onChange) => <input value={value} onChange={onChange} />
            }
        ]
        return (
            <Table
                columns={columns}
                saveRow={this.props.updateTeamMemberContactInfoRow}
                rows={this.props.rows}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    rows: state.teamMemberContactInfo
})

const mapmapDispatchToProps = ({
    updateTeamMemberContactInfoRow
})

export default connect(mapStateToProps, mapmapDispatchToProps)(TeamContactInfo)