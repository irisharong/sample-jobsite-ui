import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCog } from '@fortawesome/fontawesome-free-solid';
const user = JSON.parse(localStorage.getItem("user"));
const settingsUrl = `/${user.user.role}`;

export const navigation = [
  {
    id: "find-work",
    name: "Find Work",
    icon: <img src="img/icon-menu-1.png" alt="" />,
    path: "/",
    userRole: "contractor",
  },
  {
    id: "find-help",
    name: "Find Help",
    icon: <img src="img/icon-menu-1.png" alt="" />,
    path: "/help",
    userRole: "employer",
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