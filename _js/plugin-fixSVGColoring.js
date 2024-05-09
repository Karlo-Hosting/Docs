// force inline color for left side border.
function fixSVGColoringPlugin(hook, vm) {
  hook.doneEach(() => {
    const notices = document.querySelectorAll('.alert.callout');
    notices.forEach((notice) => {
      const noticeType = notice.attributes.class.value.split(' ').pop();
      notice.setAttribute('style', `border-left-color: var(--notice-${noticeType}-border-color) !important`);

      const noticeIcon = notice.firstElementChild.firstElementChild;
      const noticeIconCss = getComputedStyle(noticeIcon);
      const noticeColor = noticeIconCss.getPropertyValue(`--notice-${noticeType}-color`).replace('#', '%23');
      const editNoticeIconContent = noticeIconCss.backgroundImage.replace(/fill='([^']+?)'/gm, `fill='${noticeColor}'`);
      noticeIcon.setAttribute('style', `background-image: ${editNoticeIconContent};`);
    });
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [fixSVGColoringPlugin, ...($docsify.plugins || [])];
