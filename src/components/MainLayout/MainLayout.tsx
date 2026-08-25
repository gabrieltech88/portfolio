import Header from "@/components/Header/Header.tsx";
import {Outlet} from "react-router";
import Footer from "@/components/Footer/Footer.tsx";

function MainLayout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer  />
        </>
    )
}

export default MainLayout;