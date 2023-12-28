import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductById} from "../../redux/services/productService";

export default function DetailProduct() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector(({products}) =>{ return products.product});
    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    return (
        <>
            <h1>Detail Product</h1>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p><button onClick={()=> navigate("/products/home")}>Back</button></p>
        </>
    )

}
