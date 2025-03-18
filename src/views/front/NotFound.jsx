import { NavLink } from "react-router";

const NotFound = () => {
    return (<>
        <div className="text-center mt-5">
            <p>此頁面不存在</p>
            <NavLink to="/" className="btn btn-primary">回首頁</NavLink>
        </div>
    </>)
};

export default NotFound;