export interface User {
    id: string,
    email: string,
    username: string,
    role: number,
    phoneNumber: string,
    balance: number,
    firstName: string,
    lastName: string,
    gender: number,
    typeOfService?: string, // can be null for normal user/admin
    website?: string, // can be null for normal user/admin
    idnumber: string,
    country: string,
    birthdate: Date
}
