// 此文件允许您提供自定义 React 组件
// 在 MDX 文件中使用。您可以导入和使用任何 您想要的 React 组件，包括来自其他库。
 
// 在“应用程序”目录中使用 MDX 需要此文件。
export function useMDXComponents(components) {
    return {
      // 允许自定义内置组件，例如添加样式。
      // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
      ...components,
    }
  }