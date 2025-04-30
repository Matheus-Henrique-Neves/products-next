/*export default async function ProductView({params}:
    {params:Promise<id:string>
    }}) {

        const {id}=await params
        return{
            <div>
            
            <div/>
        }
    
}*/

import { getOneProductById } from "../api"

export default async function ProductView({params}: {
    params: Promise<{id: string}>
}){
    const {id} = await params
    const product = await getOneProductById(id)

    return (
        <div>
            {product?.name} - {product?.price}
        </div>
    )
}