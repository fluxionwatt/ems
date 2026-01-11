// .vitepress/sidebar.ts
import type { DefaultTheme } from 'vitepress'
import directory from './directory.json'

// 对应 directory.json 里的节点结构
interface DirNode {
  title: string
  path?: string
  collapsed?: boolean
  children?: DirNode[]
}

/**
 * 把一个目录节点转换为 VitePress 的 SidebarItem
 * VitePress 默认主题里：
 * - 没子节点时：{ text, link }
 * - 有子节点时：{ text, items, collapsed?, link? }
 */
function mapNode(node: DirNode, base: string): DefaultTheme.SidebarItem {
  const hasChildren = Array.isArray(node.children) && node.children.length > 0

  // 处理路径：
  // - "./" 表示当前语言首页
  // - 其他 path 直接拼到 base 后面
  let link: string | undefined
  if (node.path) {
    if (node.path === './') {
      link = base
    } else {
      const clean = node.path.replace(/^\.\//, '')
      link = `${base}${clean}`
      if (!link.startsWith('/')) {
        link = '/' + link
      }
    }
  }

  if (!hasChildren) {
    // 叶子节点
    return link
      ? { text: node.title, link }
      : { text: node.title }
  }

  // 有子节点：用 items（不是 children，这是 VuePress 和 VitePress 最大区别之一）
  const item: DefaultTheme.SidebarItem = {
    text: node.title,
    collapsed: node.collapsed ?? true,
    items: node.children!.map((child) => mapNode(child, base)),
  }

  if (link) {
    ;(item as any).link = link
  }

  return item
}

/**
 * 构建某个语言下的 sidebar（数组形式）
 */
function buildSidebar(nodes: DirNode[], base: string): DefaultTheme.Sidebar {
  return nodes.map((node) => mapNode(node, base))
}

// 约定：
// - 中文文档路径前缀：'/'（默认根）
// - 英文文档路径前缀：'/en/'
export const sidebarCn: DefaultTheme.Sidebar = buildSidebar(
  (directory as any).cn,
  '/zh_CN/'
)

export const sidebarEn: DefaultTheme.Sidebar = buildSidebar(
  (directory as any).en,
  '/en_US/'
)