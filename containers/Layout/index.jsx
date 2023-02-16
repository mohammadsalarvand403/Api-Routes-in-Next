import Footer from "./Footer";
import Header from "./Header";
const Layout = ({children}) => {
    return (  
        <div>
            <Header/>
            <div className="container p-2 xl:max-w-screen-xl mx-auto">
            {children}
            </div>
            <Footer/>
        </div>
    );
}
 
export default Layout;