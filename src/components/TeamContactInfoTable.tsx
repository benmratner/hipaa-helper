import * as React from 'react'
import Table from '#/components/Table';
import { TableRows, TeamMemberContactInfo } from '#/types';
import { AddressInput } from '#/components';
import { connect } from 'react-redux';
import { updateTeamMemberContactInfoRow } from '#/actions/pages'

type Props = {
    updateTeamMemberContactInfoRow: typeof updateTeamMemberContactInfoRow,
    rows: TableRows<TeamMemberContactInfo>
}

class TeamContactInfo extends React.Component<Props> {

    render() {
        const columns = [
            {
                displayName: 'Name',
                key: 'name',
                input: (onChange) => <input onChange={onChange}/>
            }, {
                displayName: 'Address',
                key: 'address',
                input: (onChange) => <AddressInput onChange={onChange}/>
            }, {
                displayName: 'Home Phone',
                key: 'homePhone',
                input: (onChange) => <input onChange={onChange}/>
            }, {
                displayName: 'Cell Phone',
                key: 'cellPhone',
                input: (onChange) => <input onChange={onChange}/>
            }, {
                displayName: 'Spouse',
                key: 'spouse',
                input: (onChange) => <input onChange={onChange}/>
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