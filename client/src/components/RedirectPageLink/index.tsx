import { Link, To } from "react-router-dom";
import './styles.css'

interface RedirectPageLinkProps {
  redirectTo: To
  redirectPageLinkText: string
}

export function RedirectPageLink({ redirectTo, redirectPageLinkText }: RedirectPageLinkProps) {
  return (
    <Link className="redirect-page-link" to={redirectTo}>
      {redirectPageLinkText}
    </Link >
  )
}