import React from "react";
import '../component-design/footer.css'

function Footer() {
  return (
    <footer class="footer">
    <div class="footer__addr">
        <h1 class="footer__logo">My Biodata</h1>

        <h2>Contact</h2>

        <address>
            email-coba@gmail.com +628 95465 654<br/>
            <a class="footer__btn" href="mailto:example@gmail.com">Email Me</a>
        </address>
    </div>

    <ul class="footer__nav">
        <li class="nav__item">
            <h2 class="nav__title">Media Social</h2>

            <ul class="nav__ul">
                <li>
                    <img class="foto" src="https://www.facebook.com/images/fb_icon_325x325.png" alt=""/>
                    <a href="https://www.facebook.com">Facebook</a>
                </li>

                <li>
                    <img class="foto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" alt=""/>
                    <a href="https://www.instagram.com">Instagram</a>
                </li>

                <li>
                    <img class="foto" src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt=""/>
                    <a href="https://www.whatsapp.com">Whatsapp</a>
                </li>
            </ul>
        </li>

        <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Living Time</h2>

            <ul class="nav__ul nav__ul--extra">
                <li>
                    <p>Normal Day</p>
                    <p>Holiday</p>
                    <p>AM 08:00 - PM 21:00</p>
                    <p>AM 09:00 - PM 16:00</p>
                </li>

            </ul>
            </li>

            <li class="nav__item">
                <h2 class="nav__title">Address</h2>

                <ul class="nav__ul">
                    <li>
                        <p>Programmer street, number 9 London City</p>
                    </li>
                </ul>
            </li>
    </ul>

    <div class="legal">
        <p>&copy; 2022 Something. All rights reserved.</p>

        <div class="legal__links">
            <span>Made by <span class="heart"></span> tim google </span>
        </div>
    </div>
</footer>
  );
}

export default Footer;