import * as React from 'react'
import { connect } from 'react-redux'
import { updatePracticeName } from '#/actions/pages'


interface Props {
    practiceName: string,
    updatePracticeName: typeof updatePracticeName
}

const PracticeNameInput = (props: Props) => {
    return (
        <div>
            Practice Name:
            <input
                onChange={e => props.updatePracticeName(e.target.value)}
                value={props.practiceName}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    practiceName: state.practiceName
})

const mapDispatchToProps = {
    updatePracticeName
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticeNameInput)