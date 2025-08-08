// src/components/MainHeader.jsx
import { Link, NavLink } from "react-router-dom";
import "./MainHeader.css";

export default function MainHeader() {
  return (
    <header className="header-bar">
      <div className="header-inner">
        {/* 왼쪽: 로고 */}
        <div className="nav-left">
          <Link to="/" className="logo" aria-label="홈으로 이동">
            DORAGAZA
          </Link>
        </div>

        {/* 오른쪽: 네비게이션 박스 */}
        <nav className="nav-right" aria-label="Primary">
          <NavLink to="/posts/new" className="nav-item">
            글작성
          </NavLink>
          <NavLink to="/posts" className="nav-item">
            글목록
          </NavLink>
          <NavLink to="/login" className="nav-item nav-cta">
            로그인
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
