// Edit on Github https://github.com/docsifyjs/docsify/blob/167596be51d8918efa2238a0e12eab14445e4022/docs/index.html#L193C16-L193C16
// footer https://github.com/boopathikumar018/docsify-darklight-theme/blob/master/docs/index.html        
function logoLinkPlugin(hook, vm) {
  hook.doneEach(() => {
    const element = document.querySelector('a.app-name-link');
    element.href = `${element.href}#/`;
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [logoLinkPlugin, ...($docsify.plugins || [])];
