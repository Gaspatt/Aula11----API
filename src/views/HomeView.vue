<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

    <header>
      <img src="../assets/imagens/banner.jpg" alt="" class="imgheader">
    </header>

    <footer>
    <div class="container">
      <div class="row">
        <div class="col" id="company">
          <h1 style="color: rgb(150, 22, 22)  ;">Streaming de TV</h1>
          <p>Imagine um universo digital onde o entretenimento ganha vida na tela de <br>seus dispositivos, um portal para milhares de histórias cativantes, <br> documentários informativos e produções originais aclamadas pela crítica. </p>
          <div class="social">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-local"></i></a>
          </div>
        </div>


        <div class="col" id="services">
          <h2>Catálogo</h2>
          <div class="links">
            <router-link to="/" class="nav-link-mobile">Home</router-link>
            <router-link to="/movies" class="nav-link-mobile">Filmes</router-link>
            <router-link to="/TvDetails" class="nav-link-mobile">Programas de TV</router-link>
          </div>
        </div>

        <div class="col" id="services">
          <h2>Conta</h2>
          <div class="links">
            <router-link to="/LoginView" class="nav-link-mobile">Login</router-link>
            <router-link to="/RegistrarView" class="nav-link-mobile">Cadastro</router-link>
          </div>
        </div>

        <div class="col" id="contact">
          <h2>Contato</h2>
          <div class="contact-details">
            <p>Para dúvidas entre em contato com <br> o número abaixo.</p>
          </div>
          <div class="contact-details">
            <i class="fa fa-phone"></i>
            <p>+55 (47) 98804-2804</p>
          </div>
        </div>
      </div>

    </div>
  </footer>
  </template>

<style scooped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

html, body {
  height: 100%;
  margin: 0;
  background-color: black;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

p .nav-link-mobile {
  font-size: 16px;
}



footer {
  box-shadow: 0 0 70px 5px rgba(1, 1, 1, 0.5);
  background-color: #000000ff;
  width: 100%;
  min-height: 300px;
  position: relative;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  margin-top: 5vh;
  min-width: 250px;
  color: #f2f2f2f2;
  font-family: poppins;
  padding: 0 2rem;
}

.col .logo {
  width: 100px;
  margin-bottom: 25px;
}

.col h2 {
  color: rgb(150, 22, 22);
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
}

.col h2::after {
  content: '';
  height: 3px;
  width: 0px;
  background-color: rgb(150, 22, 22);
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.3s ease;

}

.col h2:hover::after {
  width: 30px
}

.col .social a i {
  color: rgb(63, 63, 63);
  margin-top: 2rem;
  margin-right: 5px;
  transition: 0.3s ease;
}

.col .social a i:hover {
  transform: scale(1.5);
  filter: grayscale(25);
}

.col .links a {
  display: block;
  text-decoration: none;
  color: #f2f2f2;
  margin-bottom: 5px;
  position: relative;
  transition: 0.3s ease;
}

.col .links a::before {
  content: '';
  height: 16px;
  width: 3px;
  position: absolute;
  top: 5px;
  left: -10px;
  background-color: rgb(150, 22, 22);
  transition: 0.5s ease;
  opacity: 0;
}

.col .links a:hover::before {
  opacity: 1;
}

.col .links a:hover {
  transform: translateX(-8px);
  color: rgb(150, 22, 22);
}

.col .contact-details {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.col .contact-details i {
  margin-right: 15px;
}

.row .form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.row .form input {
  background-color: rgb(150, 22, 22);
  border: 0;
  outline: none;
  padding: 14px 20px;
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.form button {
  padding: 14px 20px;
  border: 0;
  border-radius: 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: rgb(150, 22, 22);
}

/* Responsive Design */
@media(max-width:900px) {
  .row {
    flex-direction: column;
  }

  .col {
    width: 100%;
    text-align: left;
    margin-bottom: 25px;
  }
}

@media(max-width:768px) {
  .row {
    flex-direction: column;
  }

  .col {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
  }
}

.imgheader {
  width: 100%;
  margin-top: -5vh;
}

</style>
