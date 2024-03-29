import TimeDisplay from "../TimeDisplay";

function Summary() {
  return (
    <div class="summary" id="zen-summary" role="article">
      <TimeDisplay />
      <br />
      <p>
        A demonstration of what can be accomplished through{" "}
        <abbr title="Cascading Style Sheets">CSS</abbr>-based design. Select any
        style sheet from the list to load it into this page.
      </p>
      <p>
        Download the example{" "}
        <a
          href="/examples/index"
          title="This page's source HTML code, not to be modified."
        >
          html file
        </a>{" "}
        and{" "}
        <a
          href="/examples/style.css"
          title="This page's sample CSS, the file you may modify."
        >
          css file
        </a>
      </p>
    </div>
  );
}

export default Summary;
