import { RiskAssessmentRow } from '#/types'
import { RiskAssessment as RiskAssessmentInit } from '#/initialStates'

type PageActions = 
| UpdatePracticeName
| UpdateRiskAssessment

const UPDATE_PRACTICE_NAME = 'UPDATE_PRACTICE_NAME'
const UPDATE_RISK_ASSESSMENT = 'UPDATE_RISK_ASSESSMENT'


type UpdatePracticeName = {
    type: 'UPDATE_PRACTICE_NAME',
    name: string
}

type UpdateRiskAssessment = {
    type: 'UPDATE_RISK_ASSESSMENT',
    table: RiskAssessmentRow[]
}

export const updatePracticeName = (name: string): UpdatePracticeName => ({
    type: UPDATE_PRACTICE_NAME,
    name
})

export const updateRiskAssessment = (table: RiskAssessmentRow[]) => ({
    type: UPDATE_RISK_ASSESSMENT,
    table
})

export const reducers = {
    practiceName: (state: string = '', action: PageActions): string => {
        switch (action.type) {
            case UPDATE_PRACTICE_NAME:
                return action.name
            default:
                return state
        }
    },
    riskAssessment: (state: RiskAssessmentRow[] = RiskAssessmentInit, action: PageActions): RiskAssessmentRow[] => {
        switch (action.type) {
            case UPDATE_RISK_ASSESSMENT:
                return action.table
            default: 
                return state
        }
    }
}