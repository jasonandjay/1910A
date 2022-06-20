import { IRouteComponentProps } from 'umi'

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return <div>
    <p>header</p>
    {children}
    <p>footer</p>
  </div>
  // return children
}
