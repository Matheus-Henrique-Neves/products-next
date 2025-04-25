import { IUser } from "@/interfaces/user.interface"

async function carregarUsers():Promise<IUser[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    return json
}

export default carregarUsers