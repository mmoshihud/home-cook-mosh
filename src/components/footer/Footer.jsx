import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-8 bg-amber-900 p-10 text-white">
      <div>
        <Link className="btn-ghost btn text-xl normal-case">
          Home Cook by Mosh
        </Link>
        <p>Providing quality food service since 2023</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link to="/chefs" className="link-hover link">
          Chef
        </Link>
        <Link className="link-hover link">Recipe</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/about-us" className="link-hover link">
          About us
        </Link>
        <Link to="/blog" className="link-hover link">
          Blog
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link-hover link">Terms of use</Link>
        <Link className="link-hover link">Privacy policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
