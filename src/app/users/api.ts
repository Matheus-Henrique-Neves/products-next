import { IUser, IUserRequest } from "@/interfaces/user.interface"


const apiUrl = 'http://localhost:3000/users'

export async function carregarUsers():Promise<IUser[]> {
    const response = await fetch(apiUrl)
    const json = await response.json()
    /*return json    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()*/
    return json
}
export async function cadastrarUser(data: IUserRequest){
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if(response.status == 201){
        alert('Usuário cadastrado com sucesso!')
    }
}

