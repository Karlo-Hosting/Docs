function logoLinkPlugin(hook, vm) {
  hook.doneEach(() => {
    const element = document.querySelector('a.app-name-link');
    if (element.href.endsWith('/#/')) return;
    return element.href = `${element.href}#/`;
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [logoLinkPlugin, ...($docsify.plugins || [])];
