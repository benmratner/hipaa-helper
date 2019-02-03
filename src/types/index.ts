export interface RiskAssessmentRow {
	active: boolean,
	threatName: string,
	likelihood: number,
	impact: number,
	risk: number,
	actionsTaken: { action: number, date: Date }[],
}