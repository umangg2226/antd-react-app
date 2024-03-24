import { theme, ThemeConfig } from 'antd'

const bgColor = 'rgba(255, 255, 255, 0.1)'
const textColor = 'rgba(255, 255, 255, 0.7)'
const primaryColorLight = '#322B6A'
const primaryColorDark = '#333'

const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimaryBg: primaryColorLight,
  },
  components: {
    Typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
    Menu: {
      algorithm: true,
      itemSelectedBg: bgColor,
      itemSelectedColor: textColor,
      itemActiveBg: bgColor,
      itemColor: textColor,
      itemHoverBg: bgColor,
      itemHoverColor: textColor,
      borderRadius: 8,
      fontFamily: 'Montserrat, sans-serif',
    },
    Layout: {
      bodyBg: '#F8F8F9',
      headerBg: '#fff',
      headerHeight: 50,
      headerPadding: '0px 24px 0px 0px',
      fontFamily: 'Montserrat, sans-serif',
    },
    Button: {
      algorithm: true,
      fontFamily: 'Montserrat, sans-serif',
    },
    Card: {
      padding: 10,
      fontFamily: 'Montserrat, sans-serif',
    },
    Spin: {
      colorPrimary: primaryColorLight,
    },
  },
}

const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimaryBg: primaryColorDark,
  },
  components: {
    Menu: {
      algorithm: true,
      itemSelectedBg: bgColor,
      itemSelectedColor: textColor,
      itemActiveBg: bgColor,
      itemColor: textColor,
      itemHoverBg: bgColor,
      itemHoverColor: textColor,
      borderRadius: 8,
    },
    Layout: {
      bodyBg: '#444',
      headerBg: '#333',
      headerHeight: 50,
      headerPadding: '0px 24px 0px 0px',
    },
    Button: {
      algorithm: theme.darkAlgorithm,
    },
    Card: {
      colorBgContainer: '#333',
      padding: 10,
    },
    Spin: {
      colorPrimary: '#fff',
    },
    Input: {
      colorBgContainer: '#444',
    },
  },
}

export { lightTheme, darkTheme }
