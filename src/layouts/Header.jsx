import 'bootstrap/dist/css/bootstrap.min.css';

export default function DefaultHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="#">
        <i className="bi bi-bluesky fs-3"></i>
      </a>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">글작성</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">F & Q</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}