export interface IUser {
    id: number
    name: string
    email: string

   // address: IAddress
}

/*export interface IAddress {
    street: string
    city: string
    zipcode: string
}*/
export interface IUserRequest {
    name: string
    email: string
    password: string
}