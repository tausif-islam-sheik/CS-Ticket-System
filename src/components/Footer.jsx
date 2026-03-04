const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-4">
              CS — Ticket System
            </h2>
            <p className="text-gray-400 leading-relaxed">
              CS Ticket System helps teams manage customer requests efficiently.
              Track issues, resolve tickets faster, and improve customer
              satisfaction with a streamlined support workflow.
            </p>
          </div>

          {/* Company */}
          <div>
            <h6 className="footer-title text-white">Company</h6>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="link link-hover">
                  About Us
                </a>
              </li>
              <li>
                <a href="/mission" className="link link-hover">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/contact" className="link link-hover">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="footer-title text-white">Services</h6>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="link link-hover">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="/stories" className="link link-hover">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="/download" className="link link-hover">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h6 className="footer-title text-white">Information</h6>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="link link-hover">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="link link-hover">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/careers" className="link link-hover">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-sm">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              X (Twitter)
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              Facebook
            </a>
            <a
              href="mailto:support@csticketsystem.com"
              className="link link-hover"
            >
              support@csticketsystem.com
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CS — Ticket System. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
