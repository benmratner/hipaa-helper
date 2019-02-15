import { Address } from './types';

export function addressToString(address: Address): string {
    return `${address.addressLine1}, ${address.addressLine2 ? `${address.addressLine2}, ` : '' }${address.city}, ${address.state} ${address.zip}`
}

export function addressToArray(address: Address) {
    const arr = [address.addressLine1]
    if (address.addressLine2){
        arr.push(address.addressLine2)
    }
    arr.push(`${address.city}, ${address.state} ${address.zip}`)
    return arr
}

export function formatPhoneNumber(number: string) {
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`
}