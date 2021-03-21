window.onload = function () {
  var browse = navigator.userAgent.toLowerCase();

  if (
    (navigator.appName == "Netscape" && browse.indexOf("trident") != -1) ||
    browse.indexOf("msie") != -1
  ) {
    alert(
      "본 사이트는 Internet Explorer를 지원하지 않습니다.\n다른 브라우저를 이용해주세요."
    );
  }
};
