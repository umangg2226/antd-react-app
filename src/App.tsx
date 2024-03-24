import './App.css'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom'
import { AppLayout, CenterContent, ErrorFallbackRoot } from './components'
import { ConfigProvider } from 'antd'
import { useDarkMode } from './context/DarkMode'
import { lightTheme, darkTheme } from './theme'
import { Spin } from 'antd'
import { componentLoader } from './utils'
import { ErrorBoundary } from 'react-error-boundary'

interface RouteWrapperProps extends RouteProps {
  component: React.ComponentType<any>
  layout: React.ComponentType<any>
}

const Team = lazy(() => componentLoader(() => import('./pages/team')))

const UnderConstruction = lazy(() =>
  componentLoader(() => import('./pages/under-construction'))
)

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Suspense
            fallback={
              <CenterContent>
                <Spin />
              </CenterContent>
            }
          >
            <Component {...props} />
          </Suspense>
        </Layout>
      )}
    />
  )
}

const App: React.FC = () => {
  const { darkMode } = useDarkMode()

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <ErrorBoundary FallbackComponent={ErrorFallbackRoot}>
        <BrowserRouter>
          <Switch>
            <RouteWrapper exact path='/' component={Team} layout={AppLayout} />
            <RouteWrapper
              exact
              path='*'
              component={UnderConstruction}
              layout={AppLayout}
            />
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    </ConfigProvider>
  )
}

export default App
