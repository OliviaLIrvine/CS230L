function NavBar() {
    return (
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a href="#" class="narbar-brand">NavBar</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li>
            <a href="#" class="nav-link">About</a>
          </li>
          <li>
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>

      <div class="navbar-nav ml-auto">
        <div class="nav-form">
          <form size="sm" class="form-input mr-sm-2" placeholder="Search"></form>
          <button size="sm" class="my-2 my-sm-0" type="submit">Search</button>
        </div>
      </div>
  </nav>);
}

  export default NavBar;