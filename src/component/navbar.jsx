import './navbar.css'
function Navbar(){
return(
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand  d-flex p-2" href="#"> <i class="fa-solid fa-building mr-2 text-warning" ></i>          <h1>APEX</h1></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./index2.html">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./index3.html">our services</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Pages
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Feauture</a></li>
                <li><a class="dropdown-item" href="#">Appointment</a></li>
                <li><a class="dropdown-item" href="#">our team</a></li>
                <li><a class="dropdown-item" href="#">Testimontial</a></li>
                <li><a class="dropdown-item" href="#">404 pages</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> contact us</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>


)


}
export default Navbar