import { useParams } from "react-router";

const Product = () => {
    const id = useParams();
    console.log(id);

    return (<>
        Product
    </>)
};

export default Product;