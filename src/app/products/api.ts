import { IProduct, IProductRequest } from "@/interfaces/products.interface";
const url = 'http://localhost:3000/products'

export async function getProducts():Promise<IProduct[]> {
    const response = await fetch(url)
    const json = await response.json()
    return json

}
export async function createProduct(data: IProductRequest){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    console.log(response)
    if (!response.ok) {
        throw new Error('Erro ao cadastrar o produto');
      }
    
      const responses  = await response.json();
      return responses;
      
    
}
