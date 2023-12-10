"use client";
import { ConfigProvider, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import { useTheme } from "next-themes";

export default function Antd({ children }) {
  const { resolvedTheme } = useTheme();
  const antdTheme = resolvedTheme === "dark" ? [theme.darkAlgorithm, theme.compactAlgorithm] : null;

  return (
    <ConfigProvider
      locale={zhCN}
      theme={light}
    >
      {children}
    </ConfigProvider>
  );
}
const light = {
  token: {
      colorPrimary: "#ea7411",//品牌色
      colorInfo: "#ea7411",//用于表示操作信息的 Token 序列
      borderRadius: 16,//基础组件的圆角大小
      colorBgMask: "rgba(0, 0, 0, 0.75)",//浮层的背景蒙层颜色，用于遮罩浮层下面的内容，
      colorIcon: "var(--shiki-color)",//控制弱操作图标的颜色
      colorIconHover: "var(--theme-color)",//控制弱操作图标在悬浮状态下的颜色
  },

  components: {
      Modal: {
          contentBg: 'var(--background-color-antd)',  //内容区域背景色
          footerBg: 'var(--background-color-antd)',  //底部区域背景色
          headerBg: 'var(--background-color-antd)',  //顶部背景色
          titleColor: 'var(--shiki-color)',    //标题字体颜色
          titleFontSize: 16,                //标题字体大小
          titleLineHeight: 3             //标题行高
      },
  },
};

const dark = {
  token: {
      colorPrimary: "#ea7411",//品牌色
      colorInfo: "#ea7411",//用于表示操作信息的 Token 序列
      borderRadius: 16,//基础组件的圆角大小
      colorBgMask: "rgba(0, 0, 0, 0.75)",//浮层的背景蒙层颜色，用于遮罩浮层下面的内容，
      colorIcon: "var(--shiki-color)",//控制弱操作图标的颜色
      colorIconHover: "var(--theme-color)",//控制弱操作图标在悬浮状态下的颜色
  },

  components: {
      Modal: {
          contentBg: 'var(--background-color-antd)',  //内容区域背景色
          footerBg: 'var(--background-color-antd)',  //底部区域背景色
          headerBg: 'var(--background-color-antd)',  //顶部背景色
          titleColor: 'var(--shiki-color)',    //标题字体颜色
          titleFontSize: 16,                //标题字体大小
          titleLineHeight: 3             //标题行高
      },
  },
  algorithm: "dark",
};
