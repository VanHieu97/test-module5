import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addProduct} from "../../redux/services/productService";

export default function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const add = (value) => {
        dispatch(addProduct(value)).then(() =>navigate("/products/home"));
    }

    return(
        <>
            <h1>Create Product</h1>
            <Formik
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                }}
                onSubmit={add}
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