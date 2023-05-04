import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer mt-8 bg-amber-900 p-10 text-white">
      <div>
        <Link className="btn-ghost btn text-xl normal-case">
          Home Cook by Mosh
        </Link>
        <p>Providing quality food service since 2023</p>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <Link to="/chefs" class="link-hover link">
          Chef
        </Link>
        <Link class="link-hover link">Recipe</Link>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <Link to="/about-us" class="link-hover link">
          About us
        </Link>
        <Link to="/blog" class="link-hover link">
          Blog
        </Link>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <Link class="link-hover link">Terms of use</Link>
        <Link class="link-hover link">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
