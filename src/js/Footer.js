import iconData from "../icons";

function Footer() {
  return (
    <footer>
      {iconData.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          title={icon.title}
          className={icon.class}
        >
          {icon.title}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
