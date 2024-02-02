function ZenResources() {
  return (
    <div class="zen-resources" id="zen-resources">
      <h3 class="resources">Resources:</h3>
      <ul>
        <li class="view-css">
          <a
            href="/214/214.css"
            title="View the source CSS file of the currently-viewed design."
          >
            View This Design’s <abbr title="Cascading Style Sheets">CSS</abbr>{" "}
          </a>
        </li>
        <li class="css-resources">
          <a
            href="/pages/resources/"
            title="Links to great sites with information on using CSS."
          >
            <abbr title="Cascading Style Sheets">CSS</abbr> Resources{" "}
          </a>
        </li>
        <li class="zen-faq">
          <a
            href="/pages/faq/"
            title="A list of Frequently Asked Questions about the Zen Garden."
          >
            <abbr title="Frequently Asked Questions">FAQ</abbr>{" "}
          </a>
        </li>
        <li class="zen-submit">
          <a href="/pages/submit/" title="Send in your own CSS file.">
            Submit a Design{" "}
          </a>
        </li>
        <li class="zen-translations">
          <a
            href="/pages/translations/"
            title="View translated versions of this page."
          >
            Translations{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ZenResources;
