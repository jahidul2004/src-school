import { Outlet } from "react-router-dom";
import NavBar from "../shared/navabr/NavBar";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* NabBar */}
            <NavBar></NavBar>
            {/* NabBar end */}

            {/* Outlet */}
            <Outlet></Outlet>
            {/* Outlet end */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer end */}
        </div>
    );
};

export default MainLayout;