function DesignArchives() {
  return (
    <div class="design-archives" id="design-archives">
      <h3 class="archives">Archives:</h3>
      <nav role="navigation">
        <ul>
          <li class="next">
            <a href="/214/page1">
              Next Designs <span class="indicator">›</span>
            </a>
          </li>
          <li class="viewall">
            <a
              href="/pages/alldesigns/"
              title="View every submission to the Zen Garden."
            >
              View All Designs{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DesignArchives;
