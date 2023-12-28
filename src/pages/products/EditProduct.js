import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect} from "react";
import {editProduct, getProductById} from "../../redux/services/productService";

function EditProduct() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector(state => state.products.product);
    useEffect(() => {
        dispatch(getProductById(id))
    },[])

    const edit = (values) => {
        dispatch(editProduct(values)).then(() => navigate("/products/home"))
    }

    return(
        <>
            <h1>Edit Product</h1>
            <Formik
                initialValues={
                    product
                }enableReinitialize={true}
                onSubmit={edit}
            >
                <Form>
                    <Field name={"title"} placeholder={"title"} type={"text"}/>
                    <Field name={"price"} placeholder={"price"} type={"text"}/>
                    <Field name={"description"} placeholder={"description"} type={"text"}/>
                    <button type={"submit"}>Thêm Mới</button>
                </Form>
            </Formik>
        </>
    )
}
export default EditProduct;