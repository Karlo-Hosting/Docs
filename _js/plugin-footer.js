// Edit on Github https://github.com/docsifyjs/docsify/blob/167596be51d8918efa2238a0e12eab14445e4022/docs/index.html#L193C16-L193C16
// footer https://github.com/boopathikumar018/docsify-darklight-theme/blob/master/docs/index.html        
function footerPlugin(hook, vm) {
  const footer = [
    '<footer style="text-align: center; padding-top: 40px;">',
    'Karlo-Hosting &copy; 2024',
    "<br/>",
    'Made with <span style="color: lightcoral">❤</span> by <a href="https://github.com/Karlo-Hosting" target="_blank">@Karlo-Hosting</a> and <a href="https://github.com/Karlo-Hosting/Docs/graphs/contributors" target="_blank">Helpers</a>',
    "</footer>",
  ].join("");

  hook.doneEach(() => {
    const html = document.querySelector('main section article');
    
    // TODO: Look into what this does
    if (/githubusercontent\.com/.test(vm.route.file)) {
      url = vm.route.file
        .replace("raw.githubusercontent.com", "github.com")
        .replace(/\/master/, "/blob/master");
    } else if (/jsdelivr\.net/.test(vm.route.file)) {
      url = vm.route.file
        .replace("cdn.jsdelivr.net/gh", "github.com")
        .replace("@master", "/blob/master");
    } else {
      url =
        "https://github.com/Karlo-Hosting/Docs/blob/main/" +
        vm.route.file;
    }
    const editText = `\n<div style="text-align: right"><a href="${url}" target="_blank">📝 Edit on GitHub</a></div>`;

    const parsed = new DOMParser().parseFromString([editText, footer].join(''), "text/html");
    html.append(parsed.body)
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [footerPlugin, ...($docsify.plugins || [])];
