import * as React from 'react'
import Table from '#/components/Table';
import { TableRows } from '#/types';
import { AddressInput } from '#/components';

type State = {
    rows: TableRows
}

class TeamContactInfo extends React.Component<{}, State> {

    render() {
        const columns = [
            {
                displayName: 'Name',
                input: (onChange) => <input onChange={onChange}/>
            }, {
                displayName: 'Address',
                input: (onChange) => <AddressInput onChange={onChange}/>
            }, {
                displayName: 'Home Phone',
                input: (onChange) => <input onChange={onChange}/>
            }, {
                displayName: 'Cell Phone',
                input: (onChange) => <input onChange={onChange}/>
            }, {
                displayName: 'Spouse',
                input: (onChange) => <input onChange={onChange}/>
            }
        ]
        return (
            <Table columns={columns} />
        )
    }
}

export default TeamContactInfo