import Explanation from "./main/Explanation";
import Participation from "./main/Participation";
import Benefits from "./main/Benefits";
import Requirements from "./main/Requirements";
import Footer from "./Footer";

function Main() {
  return (
    <div class="main supporting" id="zen-supporting" role="main">
      <Explanation />
      <Participation />
      <Benefits />
      <Requirements />
      <Footer />
    </div>
  );
}

export default Main;
