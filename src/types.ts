export type RiskAssessmentRow = {
	active: boolean,
	threatName: string,
	likelihood: number,
	impact: number,
	risk: number,
	actionsTaken: { action: number, date: Date }[],
}

export type SoftwareInventoryRow = {
    name: string,
    version: string,
    serialNo: string,
    licenseCount: number,
    licenseNumbers: string[]
    datePurchased: Date,
    dateUpdated: Date,
    cost: number
}