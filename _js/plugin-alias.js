const aliasList = {
  // avoid unnecessary fallback and suppress errors in console
  // TODO: check if needed
  '/.*/_sidebar.md': '/_sidebar.md',
  '/.*/_navbar.md': '/_navbar.md',
};

window.$docsify.alias = {
  ...window.$docsify.alias,
  ...aliasList
}
