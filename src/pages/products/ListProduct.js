import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllProduct, removeProduct} from "../../redux/services/productService";
import {Link} from "react-router-dom";

export function ListProduct() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    });

    useEffect(() => {
        dispatch(getAllProduct());
    }, [])
    const deleteProduct = (productId) => {
        const check = window.confirm('Are you sure you want to delete');
        if (check)
        {dispatch(removeProduct(productId));
        }
    }

    return (
        <>
            <h1>List Product</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((item) => (
                        <tr key={item.id}>
                            <td><Link to={"/products/view/"+item.id}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><Link to={"/products/edit/"+item.id}><button>Sửa</button></Link></td>
                            <td><button onClick={()=>{deleteProduct(item.id)}}>Xóa</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}