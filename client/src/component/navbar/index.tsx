export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src="/logo/logo.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
      <h1 className="navbar__title">Vite + React</h1>
    </nav>
  )
}