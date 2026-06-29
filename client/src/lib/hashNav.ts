/**
 * Hash 路由导航工具
 * 自动处理 GitHub Pages 子路径问题
 * 
 * 在 GitHub Pages 上部署在 /poliguide/ 子路径时，
 * 链接必须是 /poliguide/#/china 而不是 /#/china
 * 
 * 使用相对 hash 跳转（直接设置 window.location.hash）
 * 可以避免路径问题，因为 hash 变化不会改变 pathname
 */

/**
 * 导航到指定路由
 * 使用方式：navigate('/china') 或 navigate('/')
 */
export function navigate(path: string) {
  window.location.hash = path === '/' ? '#/' : `#${path}`;
}

/**
 * 获取当前路由路径
 */
export function getCurrentPath(): string {
  const hash = window.location.hash;
  if (!hash || hash === '#' || hash === '#/') return '/';
  return hash.slice(1); // 去掉 '#'，得到 '/china'
}

/**
 * 生成 hash 链接的 href 属性值
 * 返回相对于当前页面的 hash 链接，不带域名和路径前缀
 * 例如：hashHref('/china') => '#/china'
 */
export function hashHref(path: string): string {
  return path === '/' ? '#/' : `#${path}`;
}
