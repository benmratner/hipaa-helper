import { Address } from './types';

export function addressToString(address: Address): string {
    if (address.addressLine1) {
        return `${address.addressLine1}, ${address.addressLine2 ? `${address.addressLine2}, ` : '' }${address.city}, ${address.state} ${address.zip}`
    }
    return ''
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

export function generateUID() {
    let firstPart: number | string = (Math.random() * 46656) | 0;
    let secondPart: number | string = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}