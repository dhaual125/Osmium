"use client";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 mt-[500px] text-neutral-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Branding */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" fill="none">
<path d="M5.96579 5.39023C15.8014 3.04527 19.1759 18.8913 9.47525 21.4678C-0.513205 24.1207 -4.0286 7.77246 5.96579 5.39023ZM9.4362 21.0987C15.8201 19.0874 12.4015 4.07978 6.03201 5.73004C-0.694026 7.47168 2.8443 23.1758 9.4362 21.0987Z" fill="white"/>
<path d="M18.0147 8.04426C18.9426 3.75004 28.1432 4.47137 30.0329 7.04967C31.0559 8.58104 29.0838 9.59781 28.2867 8.00168C26.2832 3.99137 20.5352 4.52371 20.5097 8.76381C20.4723 15.1421 30.3309 14.2664 30.6246 18.6742C30.8275 21.7183 26.1406 22.398 23.3247 21.8922C21.0683 21.4868 19.4299 20.3857 18.1412 19.0034L18.4536 18.739C20.0182 20.3609 22.149 21.4948 24.0446 21.4948C26.1279 21.4948 28.0736 20.6253 28.1127 19.0664C28.2408 14.0056 16.9051 13.176 18.0138 8.04604L18.0147 8.04426Z" fill="white"/>
<path d="M42.5985 5.75034C38.8012 5.71396 36.9998 18.4875 36.6084 21.7126H34.1016V5.16477H36.5431V19.3375C37.1085 15.8666 38.7333 4.27043 43.6036 5.07072C46.242 5.50458 46.7472 7.73065 46.7472 9.98689V19.3375C47.248 15.8666 48.9374 4.27043 53.8077 5.07072C56.4461 5.50458 56.9512 7.73065 56.9512 9.98689V21.7126H54.5097V10.3187C54.5097 8.80243 54.6608 5.76897 52.8025 5.75123C49.0919 5.71574 47.2107 17.9605 46.8626 21.7135H44.3056V10.3196C44.3056 8.80332 44.4568 5.76986 42.5985 5.75212V5.75034Z" fill="white"/>
<path d="M62.0082 0C62.9395 0 63.6942 0.788752 63.6942 1.76205C63.6942 2.73535 62.9395 3.5241 62.0082 3.5241C61.077 3.5241 60.3223 2.73535 60.3223 1.76205C60.3223 0.788752 61.077 0 62.0082 0ZM60.7875 5.16549H63.229V21.7133H60.7875V5.16549Z" fill="white"/>
<path d="M71.1964 21.1272C71.8824 21.1343 72.8094 20.5585 73.9155 19.0378C76.7594 15.1295 78.2094 6.39022 78.358 5.16495H80.7995V21.7119H78.358V7.53919C77.706 10.9737 76.3452 16.6449 74.0624 19.6056C72.7381 21.3242 71.3586 21.9985 70.1904 21.8059C67.552 21.3721 67.0469 19.146 67.0469 16.8898V5.16406H69.4884V16.5579C69.4884 18.0742 69.3373 21.1077 71.1956 21.1254L71.1964 21.1272Z" fill="white"/>
<path d="M93.6297 5.75034C89.8325 5.71396 88.031 18.4875 87.6397 21.7126H85.1328V5.16477H87.5743V19.3375C88.1397 15.8666 89.7645 4.27043 94.6348 5.07072C97.2733 5.50458 97.7784 7.73065 97.7784 9.98689V19.3375C98.2793 15.8666 99.9695 4.27043 104.839 5.07072C107.477 5.50458 107.982 7.73065 107.982 9.98689V21.7126H105.541V10.3187C105.541 8.80243 105.692 5.76897 103.834 5.75123C100.123 5.71574 98.2419 17.9605 97.8939 21.7135H95.3369V10.3196C95.3369 8.80332 95.488 5.76986 93.6297 5.75212V5.75034Z" fill="white"/>
<path d="M14.3441 27.8239C25.8665 27.3404 37.389 26.8569 48.9115 26.3742C60.3643 25.8942 71.8163 25.4133 83.2692 24.9333C89.7635 24.661 96.2577 24.3886 102.753 24.1162C102.685 23.5936 102.617 23.0701 102.55 22.5476C92.6948 25.0797 82.6868 26.9624 72.6033 28.1575C62.5851 29.3456 52.4956 29.8726 42.4138 29.7324C36.7005 29.6534 30.9915 29.3571 25.2986 28.8505V30.4475C37.5062 29.8894 49.7137 29.3314 61.9213 28.7742C74.1636 28.2143 86.406 27.6554 98.6492 27.0955C105.52 26.7814 112.392 26.4674 119.263 26.1533C120.242 26.1089 120.248 24.511 119.263 24.5563C107.055 25.1143 94.8477 25.6724 82.6401 26.2296C70.3978 26.7894 58.1554 27.3484 45.9122 27.9082C39.041 28.2223 32.1698 28.5364 25.2986 28.8505C24.3054 28.8957 24.3266 30.3614 25.2986 30.4475C35.4458 31.3498 45.6457 31.577 55.82 31.1227C65.9944 30.6675 76.1425 29.5336 86.1801 27.7397C91.8119 26.7326 97.408 25.5127 102.956 24.0869C103.784 23.874 103.62 22.4819 102.753 22.5183C91.2304 23.0018 79.7079 23.4854 68.1855 23.968C56.7326 24.448 45.2806 24.9289 33.8278 25.4089C27.3335 25.6813 20.8392 25.9537 14.3441 26.226C13.3644 26.2668 13.3593 27.8648 14.3441 27.8231V27.8239Z" fill="#FFA589"/>
</svg></h2>
            <p className="text-sm text-neutral-400 mt-2">
              AI mentor personalised by you for you.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2 text-white">Company</h3>
            <ul className="text-neutral-400 space-y-1">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/content" className="hover:text-white">
                  Content
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://twitter.com/osmium_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 hover:text-white transition" />
            </a>
            <a
              href="https://linkedin.com/company/osmium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 hover:text-white transition" />
            </a>
            <a
              href="https://github.com/osmium-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Osmium. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
