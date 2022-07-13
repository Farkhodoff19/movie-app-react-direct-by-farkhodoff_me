export default function Header() {
    return (
        <nav>
        <div className="nav-wrapper container">
          <a className="brand-logo" href="#!">React</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#!">Movie</a></li>
          </ul>
        </div>
      </nav>
    )
}