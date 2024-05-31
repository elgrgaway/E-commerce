import styles from "./Footer.module.css";
function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="">
      <ul>
        <li>
          <h5>Exclusive</h5>
          <span>Subscribe</span>
          <p>Get 10% off your first order</p>
          <div className={styles["parent-input"]}>
            <input type="text" placeholder="Enter your email" />
            <img
              loading="lazy"
              className={styles["icon-send"]}
              src="icon-send.svg"
              alt="send icon"
            />
          </div>
        </li>
        <li>
          <h6>Support</h6>
          <a
            target="_blank"
            className={styles.links}
            href="https://www.google.com/maps/search/?api=1&query=111+Bijoy+sarani,+Dhaka,+DH+1515,+Bangladesh"
          >
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </a>

          <a
            target="_blank"
            className={styles.links}
            href="mailto:elgrgaway@gmail.com"
          >
            elgrgaway@gmail.com
          </a>
          <a
            target="_blank"
            className={styles.links}
            href="https://api.whatsapp.com/send?phone=201069116731"
          >
            +201069116731
          </a>
        </li>
        <li>
          <h6>Account</h6>
          <a className={styles.links} href="#">
            My Account
          </a>
          <a className={styles.links} href="#">
            Login / Register
          </a>
          <a className={styles.links} href="#">
            Cart
          </a>
          <a className={styles.links} href="#">
            Wisthlist
          </a>
          <a className={styles.links} href="#">
            Shop
          </a>
        </li>
        <li>
          <h6>Quick Link</h6>
          <a className={styles.links} href="#">
            Privacy Policy
          </a>
          <a className={styles.links} href="#">
            Terms Of Use
          </a>
          <a className={styles.links} href="#">
            FAQ
          </a>
          <a className={styles.links} href="#">
            Contact
          </a>
        </li>
        <li className={styles.download}>
          <h6>Download App</h6>
          <p className=" text-[12px]">Save $3 with App New User Only</p>
          <div className=" flex items-center gap-3">
            <a href="#">
              <img loading="lazy" src="Qrcode 1.png" alt="qrcode pic" />
            </a>
            <div>
              <a href="#">
                <img
                  loading="lazy"
                  src="googleplay.png"
                  alt="google play pic"
                  className=" mb-2"
                />
              </a>
              <a href="#">
                <img loading="lazy" src="appstore.png" alt="appstore pic" />
              </a>
            </div>
          </div>
          <div className="flex gap-6 mt-6 items-center">
            <a href="#">
              <img
                className={styles["footer-icons"]}
                loading="lazy"
                src="facebook.png"
                alt="facebook icon"
              />
            </a>
            <a href="#">
              <img
                className={styles["footer-icons"]}
                loading="lazy"
                src="x.png"
                alt="x icon"
              />
            </a>
            <a href="#">
              <img
                className={styles["footer-icons"]}
                loading="lazy"
                src="insta.png"
                alt="insta icon"
              />
            </a>
            <a href="#">
              <img
                className={styles["footer-icons"]}
                loading="lazy"
                src="linkedin.png"
                alt="linkedin icon"
              />
            </a>
          </div>
        </li>
      </ul>
      <p className={styles["footer-para"]}>
        &copy; Copyright Elgrgawi {date}. All right reserved
      </p>
    </footer>
  );
}
export default Footer;
