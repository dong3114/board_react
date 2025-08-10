import MainHeader from "../../layouts/Header";
import "./MainLayout.css"

export default function MainLayout({ children }) {
    return (
        <div className="layout-wrapper">
            <MainHeader />
            <main className="layout-main">{children}</main>
            {/**  푸터 */}
        </div>

    )
}