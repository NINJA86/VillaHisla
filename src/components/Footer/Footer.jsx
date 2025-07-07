import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import EmailInp from '../EmailInp/EmailInp';

function Footer() {
  return (
    <footer className="bg-dark-green text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo & Address */}
        <div>
          <img
            src="https://startersites.io/blocksy/real-estate/wp-content/uploads/2023/05/logo-light.svg"
            alt="Logo"
            className="w-[150px] h-[28px] mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">
            45647 Hermiston Field Bruenberg, Guinea
          </h3>
          <p className="mb-2">
            <strong>Email:</strong> email@company.com
            <br />
            <strong>Phone:</strong> +047-919-2363
          </p>
          <p className="text-sm opacity-80">
            Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque
            nunc in aliquet.
          </p>
        </div>

        {/* Column 2: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Subscribe to newsletter
          </h3>
          <p className="text-sm opacity-80 mb-4">
            Saepe nulla quia. Corporis vero modi consectetur sequi nesciunt.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <EmailInp />
            <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5 hover:text-blue-600 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 - WordPress Theme by{' '}
        <a
          href="https://creativethemes.com"
          className="underline hover:text-white"
        >
          CreativeThemes
        </a>
      </div>
    </footer>
  );
}

export default Footer;
