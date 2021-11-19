import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCog } from '@fortawesome/fontawesome-free-solid';
const user = JSON.parse(localStorage.getItem("user")); console.log(user);
const settingsUrl = user !== null ? `/${user.user.role}` : '';

export const navigation = [
  {
    id: "find-work",
    name: "Find Work",
    icon: <img src="img/icon-menu-1.png" alt="" />,
    path: "/works",
  },
  {
    id: "your-jobs",
    name: "Your Job",
    icon: <img src="img/icon-menu-2.png" alt="" />,
    badge: <span className="badge">9</span>,
    path: "/jobs",

  },
  {
    id: "settings",
    name: "Settings",
    icon: <img src="img/icon-menu-3.png" alt="" />,
    path: settingsUrl,

  }
];