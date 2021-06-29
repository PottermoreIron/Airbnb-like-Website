export function getImgUrl(url, w, h) {
  if (!h) {
    h = w;
  }
  // 图片url需要指定宽高
  url += `?param=${w}y${h}`;
  return url;
}
export function getPageOffset(pageIndex, pageSize) {
  return (pageIndex - 1) * pageSize;
}
