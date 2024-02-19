function Design(props) {
  const isOdd = props.index % 2 !== 0;
  const backgroundClass = isOdd ? "" : "even-background";

  return (
    <li className={backgroundClass}>
      <a href={props.href} className="design-name">
        {props.name}
      </a>{" "}
      <a href={props.href2} className="designer-name">
        by {props.author}
      </a>
    </li>
  );
}

export default Design;
