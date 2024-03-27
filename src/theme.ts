import { theme, ThemeConfig } from 'antd'

const lightBackgroundColor = 'rgba(255, 255, 255, 0.1)'
const lightTextColor = 'rgba(255, 255, 255, 0.7)'
const darkPrimaryColor = '#333'
const lightPrimaryColor = '#322B6A'
const bodyBgColorLight = '#F8F8F9'
const bodyBgColorDark = '#444'
const headerBgColorLight = '#fff'
const headerBgColorDark = '#333'
const fontFamily = 'Montserrat, sans-serif'
const borderRadius = 8
const headerHeight = 50
const headerPadding = '0px 24px 0px 0px'
const cardPadding = 10

const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimaryBg: lightPrimaryColor,
    colorPrimary: lightPrimaryColor,
  },
  components: {
    Typography: {
      fontFamily: fontFamily,
    },
    Menu: {
      algorithm: true,
      itemSelectedBg: lightBackgroundColor,
      itemSelectedColor: lightTextColor,
      itemActiveBg: lightBackgroundColor,
      itemColor: lightTextColor,
      itemHoverBg: lightBackgroundColor,
      itemHoverColor: lightTextColor,
      borderRadius: borderRadius,
      fontFamily: fontFamily,
    },
    Layout: {
      bodyBg: bodyBgColorLight,
      headerBg: headerBgColorLight,
      headerHeight: headerHeight,
      headerPadding: headerPadding,
      fontFamily: fontFamily,
    },
    Button: {
      algorithm: true,
      fontFamily: fontFamily,
    },
    Card: {
      padding: cardPadding,
      fontFamily: fontFamily,
    },
    Spin: {
      colorPrimary: lightPrimaryColor,
    },
  },
}

const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimaryBg: darkPrimaryColor,
    colorPrimary: '#666',
  },
  components: {
    Menu: {
      algorithm: true,
      itemSelectedBg: lightBackgroundColor,
      itemSelectedColor: lightTextColor,
      itemActiveBg: lightBackgroundColor,
      itemColor: lightTextColor,
      itemHoverBg: lightBackgroundColor,
      itemHoverColor: lightTextColor,
      borderRadius: borderRadius,
    },
    Layout: {
      bodyBg: bodyBgColorDark,
      headerBg: headerBgColorDark,
      headerHeight: headerHeight,
      headerPadding: headerPadding,
    },
    Button: {
      algorithm: theme.darkAlgorithm,
    },
    Card: {
      colorBgContainer: darkPrimaryColor,
      padding: cardPadding,
    },
    Spin: {
      colorPrimary: '#fff',
    },
    Input: {
      colorBgContainer: bodyBgColorDark,
    },
  },
}

export { lightTheme, darkTheme }
