import {
  IconCopy,
  IconLayoutDashboard,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  

  {
    id: uniqueId(),
    title: "Home",
    icon: IconLayoutDashboard,
    href: "/",
  },
  
  {
    id: uniqueId(),
    title: "Set-Up Automation",
    icon: IconCopy,
    href: "/automation",
  },
 
];

export default Menuitems;
