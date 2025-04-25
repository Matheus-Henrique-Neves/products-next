'use client'
import ProductCard from "@/Components/Products/ProductCard"
import { IProduct, IProductRequest } from "@/interfaces/products.interface"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { createProduct, getProducts } from "../api"

type ProductForm = {
    name: string
    price: number
}

export default function CreateProduct(){
    const [products, setProducts] = useState<IProductRequest[]>([])
    const [listproducts, setlistProducts] = useState<IProduct[]>([])
    const {register, handleSubmit} = useForm<ProductForm>()
    async function findProducts(){
        const listproducts = await getProducts()
        setlistProducts(listproducts)
        
        }
        useEffect(() => {
            findProducts()
        },[])

    function onSubmit(data:ProductForm){
        const NewProduct:IProductRequest={
            ...data,
            price:Number(data.price)
        }
        const NewListProduct=[...products,NewProduct]
        setProducts(NewListProduct)
        createProduct(NewProduct)

    }
    
    return (
        <div className="grid md:grid-cols-2 gap-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register('name')} type="text" placeholder='Nome do produto' />
                <input {...register('price')} type="text" placeholder='Preço' />
                <button type="submit">Cadastrar</button>
            </form>
            <div>
                <b>Lista de produtos</b>

                {products.map((product,key)=>(
                    <p key={key}>{product.name} --- {product.price}</p>
                ))}

            </div>
            <div className="flex flex-wrap justify-around">
                {
                    listproducts.map((product) => (
                        <ProductCard 
                        key={product.id} 
                        product={product} />
                    ))
                }
            </div>
        </div>
    )
}