import React from "react";
import '../component-design/header.css'

function Header() {
  return (
    <header class="header-login-signup">

    <div class="header-limiter">

        <h1><a href="index.html">Biodata<span> Diri</span></a></h1>

        <nav>
            <a class="cool-link" href="index.html">Home</a>
            <a class="cool-link" href="index.html#about">About Me</a>
            <a class="cool-link" href="index.html#menu">Contact</a>

        </nav>


    </div>

</header>
  );
}
export default Header;