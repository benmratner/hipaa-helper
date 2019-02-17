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

export type HardwareInventoryItem = {
	name: string,
	location: string,
	type: string,
	os: string,
	ram: string,
	cpu: string,
	storage: string,
	serialNo: string,
	datePurchased: string,
	cost: number,
}

export type Address = {
    addressLine1: string,
    addressLine2?: string,
    city: string,
    state: string,
    zip: string
}

export type TeamMemberContactInfo = {
	name: string,
	address: Address,
	homePhone?: string,
	cellPhone?: string,
	spouse?: string
}

export type EmergencyContact = {
	name: string,
	phone: string
}

export interface TableRow<T> {
	values: T,
	createdAt: Date
}

export interface TableRows<T> {
	[id: string]: TableRow<T>
}