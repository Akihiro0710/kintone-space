window.onload = function () {
  const paths = location.href.split('/');
  const spaceId = parseInt(paths.pop());
  const type = paths.pop();
  if(type === "space" && spaceId === 31) {
    alert("ここは該当スペースです");
  }
};