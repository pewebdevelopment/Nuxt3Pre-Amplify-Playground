import {
  mdiAccountCircle,
  mdiMonitor,
  mdiHelpCircle,
  mdiLock,
  mdiSquareEditOutline,
  mdiTable,
  mdiMenuOpen,
  mdiTelevisionGuide,
  mdiBarcode,
  mdiPalette,
  mdiCardAccountDetailsOutline,
  mdiOpenInNew,
  mdiFormDropdown,
  mdiBallot,
  mdiViewQuilt,
} from "@mdi/js";

export default [
  {
    to: "/",
    icon: mdiMonitor,
    label: "Home",
  },
  {
    to: "/dashboard",
    label: "UI Base",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/prem/tablesListsView",
    label: "Tables & Lists",
    icon: mdiTable,
    updateMark: "warning",
  },

  {
    to: "/prem/FormsView",
    label: "Forms Advanced",
    icon: mdiBallot,
  },

  {
    to: "/prem/uiView",
    label: "UI Advanced",
    icon: mdiViewQuilt,
  },
  {
    to: "/prem/styleView",
    label: "Stylize",
    icon: mdiPalette,
  },
  {
    to: "/prem/pricingView",
    label: "Pricing layout",
    icon: mdiBarcode,
  },
  {
    label: "Dropdown",
    icon: mdiFormDropdown,
    menu: [
      {
        label: "Dropdown item Uno",
      },
      {
        label: "Dropdown item Dos",
      },
    ],
  },
  {
    to: "/prem/profileView",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/pe/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "/pe/register",
    label: "Register",
    icon: mdiSquareEditOutline,
  },
  {
    // Key should be unique for each submenus object
    // It is required for open/close logic
    key: "submenus-1",
    label: "Sub",
    icon: mdiMenuOpen,
    menuSecondary: [
      {
        to: "/profileView",
        label: "Sample RouterLink",
        icon: mdiCardAccountDetailsOutline,
      },
      {
        label: "External link",
        href: "",
        icon: mdiOpenInNew,
        target: "_blank",
      },
      {
        label: "Dropdown",
        icon: mdiFormDropdown,
        menu: [
          {
            label: "Dropdown item One",
          },
          {
            label: "Dropdown item Two",
          },
        ],
      },
      {
        to: "/wb/whiteboard",
        label: "Whiteboard",
        icon: mdiOpenInNew,
      },
    ],
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },
];
