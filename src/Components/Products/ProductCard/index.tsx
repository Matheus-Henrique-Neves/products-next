import { IProduct } from "@/interfaces/products.interface"
import Link from "next/link"

export default function ProductCard(props: {product: IProduct}){
    const product = props.product
    return (
        <Link href={`/products/${product.id}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 m-5 shadow">
            <div className="col-span-1">
                <img className="h-32"
                src="https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg" alt="" />
            </div>
            <div className="col-span-3 flex flex-col pl-5">
                <span className="font-lg font-bold">{product.name}</span>
                <span className="font-bold text-red-700">
                    R$ {product.price}
                </span>
            </div>
        </div>
        </Link>
    )
}