/*'use client'
import { useEffect, useState } from "react";
import {carregarUsers,  cadastrarUser } from "./api"
import { IUser } from "@/interfaces/user.interface";
import { useForm } from "react-hook-form";

export default  function Users() {
  const [users,setUsers]=useState<IUser[]>([])
  
  async function carregarDados() {
    const users = await carregarUsers()
    setUsers(users)
  }
  useEffect(()=>{
    carregarDados()
  })

  type Userform{name:string ,email:string,password:string}

    const {register,handleSubmit}=useForm<Userform>()
   
    async function onSubmit(data: Userform){
      const user = await cadastrarUser(data)
      carregarDados()
    }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="NOME"/>
        <input type="text" placeholder="EMAIL" />
        <input type="password" placeholder="SENHA"/>
        <button type="submit">Cadastrar</button>
        </form>
        <h1>Lista de users</h1>
        <ul>
          { users.map((user) => (
            <li key={user.id}>{user.id} - {user.name} | {user.email}</li>
          )) }
        </ul>
      </div>
    );
  }*/
  'use client'
import { useEffect, useState } from "react";
import { cadastrarUser, carregarUsers } from "./api"
import { IUser, IUserRequest } from "@/interfaces/user.interface";
import { useForm } from "react-hook-form";
export default function Users() {
    const [users, setUsers] = useState<IUser[]>([])
    
    async function carregarDados(){
      const users = await carregarUsers()
      setUsers(users)
    }

    useEffect(()=>{
      carregarDados()
    }, [])
    //type UserForm = {name: string, email: string, password: string}
    const {register, handleSubmit} = useForm<IUserRequest>()
    async function onSubmit(data: IUserRequest){
      const user = await cadastrarUser(data)
      carregarDados()
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nome" {...register('name')}/>
          <input type="text" placeholder="Email" {...register('email')}/>
          <input type="password" placeholder="Senha" {...register('password')} />
          <button type="submit">Cadastrar</button>
        </form>
        <hr />
        <h1>Lista de users</h1>
        <ul>
          { users.map((user) => (
            <li key={user.id}>{user.id} - {user.name} | {user.email}</li>
          )) }
        </ul>
      </div>
    );
  }
  