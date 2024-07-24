import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const footerFields = [
  {
    title: 'Customer Support',
    links: [
      { title: 'Contact Us', link: '#' },
      { title: 'Help Centre', link: '#' },
      { title: 'Returns & Exchange', link: '#' },
      { title: 'Gift Cards', link: '#' },
      { title: 'About Marketplace', link: '#' }
    ]
  },
  {
    title: 'Account',
    links: [
      { title: 'My Account', link: '#' },
      { title: 'Order History', link: '#' },
      { title: 'Wishlist', link: '#' },
      { title: 'Newsletter', link: '#' }
    ]
  },
  {
    title: 'Services',
    links: [
      { title: 'Geek Squad', link: '#' },
      { title: 'Monthly Subscriptions', link: '#' },
      { title: 'Gift Cards', link: '#' },
      { title: 'Help', link: '#' }
    ]
  },
  {
    title: 'About Us',
    links: [
      { title: 'Our Story', link: '#' },
      { title: 'Careers', link: '#' },
      { title: 'Press', link: '#' },
    ]
  },
  {
    title: 'Partner With Us',
    links: [
      { title: 'Sell on Store Biz', link: '#' },
      { title: 'Advertise With Us', link: '#' },
      { title: 'Affiliate Program', link: '#' },
    ]
  },
  {
    title: 'Mobile Apps',
    links: [
      { title: 'iOS App', link: '#' },
      { title: 'Android App', link: '#' },
    ]
  },
];

const socialLinks = {
  title: 'Social Links',
  links: [
    { title: 'Facebook', link: '#', icon: <CiFacebook /> },
    { title: 'Twitter', link: '#' , icon: <CiTwitter /> },
    { title: 'Instagram', link: '#', icon: <CiInstagram /> },
    { title: 'LinkedIn', link: '#', icon: <CiLinkedin />  },
  ]
}

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#F1F1F1] py-5 mt-10">
      <div className="flex justify-center gap-y-10 flex-wrap store-biz-container mb-3">
        {footerFields.map((field, index) => (
          <div key={index} className="footer-container">
            <p className="font-bold mb-2">{field.title}</p>
            {field.links.map((link, index) =>  <p key={index}><Link className="text-black font-normal" to={link.link}>{link.title}</Link></p>)}
          </div>
        ))}
        
        <div className="footer-container">
          <p className="font-bold mb-2">{socialLinks.title}</p>
          <div className="flex gap-3 text-3xl">
            {socialLinks.links.map((link,index) => <div key={ `${ index }-${ link.title }` }>{link.icon}</div> )}
          </div>
        </div>
      </div>
      <p className="text-center">&copy; 2024 Store Biz, Pemba Norsang Sherpa</p>
    </footer>
  );
}