function ZenResources() {
  const resources = [
    {
      title: "View the source CSS file of the currently-viewed design.",
      link: "/214/214.css",
      text: "View This Design’s CSS",
    },
    {
      title: "Links to great sites with information on using CSS.",
      link: "/pages/resources/",
      text: "CSS Resources",
    },
    {
      title: "A list of Frequently Asked Questions about the Zen Garden.",
      link: "/pages/faq/",
      text: "FAQ",
    },
    {
      title: "Send in your own CSS file.",
      link: "/pages/submit/",
      text: "Submit a Design",
    },
    {
      title: "View translated versions of this page.",
      link: "/pages/translations/",
      text: "Translations",
    },
  ];

  return (
    <div className="zen-resources" id="zen-resources">
      <h3 className="resources">Resources:</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className={index % 2 === 0 ? "odd-background" : ""}>
            <a href={resource.link} title={resource.title}>
              {resource.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ZenResources;
