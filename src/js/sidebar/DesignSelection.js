import Design from "./Design";

function DesignSelection() {
  return (
    <div class="design-selection" id="design-selection">
      <h3 class="select">Select a Design:</h3>
      <nav role="navigation">
        <ul>
          <Design
            index="1"
            href="/221/"
            name="Mid Century Modern"
            href2="http://andrewlohman.com/"
            author="Andrew Lohman"
          />{" "}
          <Design
            index="2"
            href="/220/"
            name="Garments"
            href2="http://danielmall.com/"
            author="Dan Mall"
          />{" "}
          <Design
            index="3"
            href="/219/"
            name="Steel"
            href2="http://steffen-knoeller.de"
            author="Steffen Knoeller"
          />{" "}
          <Design
            index="4"
            href="/218/"
            name="Apothecary"
            href2="http://trentwalton.com"
            author="Trent Walton"
          />{" "}
          <Design
            index="5"
            href="/217/"
            name="Screen Filler"
            href2="http://elliotjaystocks.com/"
            author="Elliot Jay Stocks"
          />{" "}
          <Design
            index="6"
            href="/216/"
            name="Fountain Kiss"
            href2="http://jeremycarlson.com"
            author="Jeremy Carlson"
          />{" "}
          <Design
            index="7"
            href="/215/"
            name="A Robot Named Jimmy"
            href2="http://meltmedia.com/"
            author="meltmedia"
          />{" "}
          <Design
            index="8"
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
