import { IRouteComponentProps } from 'umi'

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return <div className="wrapper">
    <header>
      <p>header</p>
    </header>
    <main>
      <div className="content">
        <div className="container">
          {children}
        </div>
        <footer>
          {/* 通用底部 */}
        </footer>
      </div>
    </main>
  </div>
}
