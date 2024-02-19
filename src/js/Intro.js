import Summary from "./intro/Summary";
import Preamble from "./intro/Preamble";
import TimeDisplay from "./TimeDisplay";

function Intro() {
  return (
    <section class="intro" id="zen-intro">
      <Summary />
      <Preamble />
    </section>
  );
}

export default Intro;
