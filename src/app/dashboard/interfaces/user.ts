export interface User {
    id: string,
    email: string,
    password: string,
    userType: number,
    address: string,
    location: string,
    phoneNumber: string,
    registeredDate: Date,
    typeOfService?: string, // can be null for normal user/admin
    website?: string, // can be null for normal user/admin
    usrImage?: string, // can be null for All
    shopImage?: string // can be null for All
}
