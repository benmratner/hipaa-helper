import { HardwareInventoryItem, RiskAssessmentRow, TableRow, TableRows, TeamMemberContactInfo } from '#/types'
import { RiskAssessment as RiskAssessmentInit } from '#/initialStates'

type PageActions = 
| UpdatePracticeName
| UpdateRiskAssessment
| UpdateTeamMemberContactInfoRow
| UpdateHardwareInventoryRow

const UPDATE_PRACTICE_NAME = 'UPDATE_PRACTICE_NAME'
const UPDATE_RISK_ASSESSMENT = 'UPDATE_RISK_ASSESSMENT'
const UPDATE_TEAM_MEMBER_CONTACT_INFO_ROW = 'UPDATE_TEAM_MEMBER_CONTACT_INFO_ROW'
const UPDATE_HARDWARE_INVENTORY_ROW = 'UPDATE_HARDWARE_INVENTORY_ROW'


type UpdatePracticeName = {
    type: 'UPDATE_PRACTICE_NAME',
    name: string
}

type UpdateRiskAssessment = {
    type: 'UPDATE_RISK_ASSESSMENT',
    table: RiskAssessmentRow[]
}

type UpdateTeamMemberContactInfoRow = {
    type: 'UPDATE_TEAM_MEMBER_CONTACT_INFO_ROW',
    row: TableRow<TeamMemberContactInfo>,
    rowId: string
}

type UpdateHardwareInventoryRow = {
    type: 'UPDATE_HARDWARE_INVENTORY_ROW',
    row: TableRow<HardwareInventoryItem>,
    rowId: string
}

export const updatePracticeName = (name: string): UpdatePracticeName => ({
    type: UPDATE_PRACTICE_NAME,
    name
})

export const updateRiskAssessment = (table: RiskAssessmentRow[]) => ({
    type: UPDATE_RISK_ASSESSMENT,
    table
})

export const updateTeamMemberContactInfoRow = (row: TableRow<TeamMemberContactInfo>, rowId: string) => ({
    type: UPDATE_TEAM_MEMBER_CONTACT_INFO_ROW,
    row,
    rowId
})

export const updateHardwareInventoryRow = (row: TableRow<HardwareInventoryItem>, rowId: string) => ({
    type: UPDATE_HARDWARE_INVENTORY_ROW,
    row,
    rowId
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
    },
    teamMemberContactInfo: (state: TableRows<TeamMemberContactInfo> = {}, action: PageActions): TableRows<TeamMemberContactInfo> => {
        switch (action.type) {
            case UPDATE_TEAM_MEMBER_CONTACT_INFO_ROW:
                return {
                    ...state,
                    [action.rowId]: action.row
                }
            default: 
                return state

        }
    },
    hardwareInventory: (state: TableRows<HardwareInventoryItem> = {}, action: PageActions): TableRows<HardwareInventoryItem> => {
        switch (action.type) {
            case UPDATE_HARDWARE_INVENTORY_ROW:
            return {
                ...state,
                [action.rowId]: action.row
            }
        default: 
            return state
        }
    }
}