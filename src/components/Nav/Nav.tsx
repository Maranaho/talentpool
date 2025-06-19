import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export const Nav = () => {
  const navigate = useNavigate()
  
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/sign-in')
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li>
          <Link to="/documents">Documents</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/agent">Agent</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  )
}