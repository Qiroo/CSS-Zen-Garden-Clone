function Design(props) {
  return (
    <li>
      <a href={props.href} class="design-name">
        {props.name}
      </a>{" "}
      by{" "}
      <a href={props.href2} class="designer-name">
        {props.author}
      </a>
    </li>
  );
}

export default Design;
