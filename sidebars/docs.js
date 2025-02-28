/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export const docs = {
  collections: {
    type: "category",
    label: "Collections",
    link: {
      type: "doc",
      id: "features/collections",
    },
    items: [
      "features/collections/simple",
      "features/collections/typed",
      "features/collections/query",
      "features/collections/views",
      "features/collections/play-modes",
    ],
  },
  customization: {
    type: "category",
    label: "Customization",
    link: {
      type: "doc",
      id: "customization",
    },
    items: [
      "customization/mode-of-interaction",
      "customization/appearance",
      "customization/date-and-time",
    ],
  },
};
