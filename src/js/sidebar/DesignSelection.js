import Design from "./Design";

function DesignSelection() {
  return (
    <div class="design-selection" id="design-selection">
      <h3 class="select">Select a Design:</h3>
      <nav role="navigation">
        <ul>
          <Design
            href="/221/"
            name="Mid Century Modern"
            href2="http://andrewlohman.com/"
            author="Andrew Lohman"
          />{" "}
          <Design
            href="/220/"
            name="Garments"
            href2="http://danielmall.com/"
            author="Dan Mall"
          />{" "}
          <Design
            href="/219/"
            name="Steel"
            href2="http://steffen-knoeller.de"
            author="Steffen Knoeller"
          />{" "}
          <Design
            href="/218/"
            name="Apothecary"
            href2="http://trentwalton.com"
            author="Trent Walton"
          />{" "}
          <Design
            href="/217/"
            name="Screen Filler"
            href2="http://elliotjaystocks.com/"
            author="Elliot Jay Stocks"
          />{" "}
          <Design
            href="/216/"
            name="Fountain Kiss"
            href2="http://jeremycarlson.com"
            author="Jeremy Carlson"
          />{" "}
          <Design
            href="/215/"
            name="A Robot Named Jimmy"
            href2="http://meltmedia.com/"
            author="meltmedia"
          />{" "}
          <Design
            href="/214/"
            name="Verde Moderna"
            href2="http://www.mezzoblue.com/"
            author="Dave Shea"
          />{" "}
        </ul>
      </nav>
    </div>
  );
}

export default DesignSelection;
