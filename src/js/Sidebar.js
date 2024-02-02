import DesignArchives from "./sidebar/DesignArchives";
import DesignSelection from "./sidebar/DesignSelection";
import ZenResources from "./sidebar/ZenResources";

function Sidebar() {
  return (
    <aside class="sidebar" role="complementary">
      <div class="wrapper">
        <DesignSelection />
        <DesignArchives />
        <ZenResources />
      </div>
    </aside>
  );
}

export default Sidebar;
