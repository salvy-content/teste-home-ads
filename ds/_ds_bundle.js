/* @ds-bundle: {"format":4,"namespace":"SalvyDesignSystem_372857","components":[],"sourceHashes":{"ui_kits/dashboard/Primitives.jsx":"17364db5b894","ui_kits/dashboard/Sidebar.jsx":"d640782642da","ui_kits/dashboard/TopBar.jsx":"4528bb864505"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SalvyDesignSystem_372857 = window.SalvyDesignSystem_372857 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/dashboard/Primitives.jsx
try { (() => {
const {
  useState
} = React;
const COLORS = {
  brand100: '#F7F5F2',
  brand200: '#F4F2EE',
  brand300: '#EDE9E2',
  gray50: '#F9F9F9',
  gray100: '#EFEFEF',
  gray200: '#DAD8D8',
  gray300: '#CBCBCB',
  gray400: '#A8A3A3',
  gray500: '#807A7A',
  gray600: '#4F4A4A',
  gray700: '#373737',
  gray800: '#232323',
  blue100: '#D9E4F2',
  blue500: '#538BC5',
  blue600: '#2F5D8D',
  blue700: '#203F60',
  green100: '#E0EBD6',
  green600: '#3E7440',
  green700: '#325332',
  red100: '#F8D6D8',
  red600: '#AC1E21',
  red700: '#8E141C',
  yellow100: '#F6F1CB',
  yellow600: '#8F6619',
  yellow700: '#6D4D13',
  magenta100: '#F7DAEA',
  magenta700: '#8B1865'
};
const SHADOW = {
  xs: '0px 1px 2px 0px rgba(16,24,40,0.05)',
  c1: '-8px -8px 24px 0 rgba(255,255,255,0.5), 8px 8px 24px 0 rgba(29,41,57,0.15)',
  c05: '-8px -8px 24px 0 rgba(255,255,255,0.5), 8px 8px 24px 0 rgba(35,35,35,0.05)',
  c2: '-8px -8px 24px 0 rgba(255,255,255,0.5), 8px 8px 32px 0 rgba(29,41,57,0.24)',
  featured: '-2.56px -2.56px 7.68px 0 rgba(255,255,255,0.5), 2.56px 2.56px 7.68px 0 rgba(35,35,35,0.09)'
};

// --- Icon (Lucide via CDN alternative: inline simple SVG) ---
const Icon = ({
  d,
  size = 18,
  stroke = 1.8,
  fill,
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill || 'none',
  stroke: fill ? 'none' : 'currentColor',
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: style
}, Array.isArray(d) ? d.map((p, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: p
})) : /*#__PURE__*/React.createElement("path", {
  d: d
}));
const ICONS = {
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  laptop: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16',
  users: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  invoice: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M8 13h8M8 17h5',
  saas: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  settings: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h-.01a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2v-.01a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2h.01a2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2v.01a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'],
  bell: ['M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0'],
  search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M21 21l-4.35-4.35'],
  chevronRight: 'M9 18l6-6-6-6',
  chevronDown: 'M6 9l6 6 6-6',
  plus: ['M12 5v14', 'M5 12h14'],
  menu: ['M3 12h18', 'M3 6h18', 'M3 18h18'],
  more: ['M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', 'M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', 'M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
  check: 'M20 6L9 17l-5-5',
  shield: 'M12 2L3 7v6c0 5 3.8 9.3 9 11 5.2-1.7 9-6 9-11V7l-9-5z',
  download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  copy: ['M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1']
};

// --- Button ---
const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  icon,
  onClick,
  disabled,
  style
}) => {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizeMap = {
    'extra-small': [8, 14, 12],
    small: [10, 16, 14],
    medium: [10, 18, 16],
    large: [12, 20, 18]
  };
  const [py, px, fs] = sizeMap[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: `${py}px ${px}px`,
    borderRadius: 8,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: fs,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
    border: '1px solid transparent'
  };
  const variants = {
    primary: {
      background: disabled ? COLORS.gray100 : COLORS.gray800,
      color: disabled ? COLORS.gray300 : COLORS.gray50,
      borderColor: disabled ? COLORS.gray100 : COLORS.gray800,
      boxShadow: press ? 'inset -8px -8px 16px 0 rgba(234,236,240,0.05), inset 8px 8px 16px 0 rgba(0,0,0,0.5)' : hover && !disabled ? SHADOW.c2 : 'none'
    },
    secondary: {
      background: '#fff',
      color: COLORS.gray800,
      borderColor: COLORS.gray200,
      boxShadow: press ? 'inset -8px -8px 16px 0 rgba(255,255,255,0.5), inset 8px 8px 16px 0 rgba(29,41,57,0.16)' : hover ? SHADOW.c2 : 'none'
    },
    tertiary: {
      background: hover ? COLORS.gray100 : 'transparent',
      color: COLORS.gray800,
      borderColor: 'transparent',
      boxShadow: 'none'
    },
    destructive: {
      background: COLORS.red600,
      color: '#F9EFEF',
      borderColor: 'transparent',
      boxShadow: hover ? SHADOW.c2 : 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    d: ICONS[icon],
    size: fs
  }), children);
};

// --- StatusBadge ---
const Badge = ({
  variant = 'neutral',
  dot,
  children
}) => {
  const map = {
    neutral: [COLORS.brand200, COLORS.gray700, COLORS.gray500],
    success: [COLORS.green100, COLORS.green700, '#3E7440'],
    info: [COLORS.blue100, COLORS.blue700, COLORS.blue600],
    warning: [COLORS.yellow100, COLORS.yellow700, '#8F6619'],
    danger: [COLORS.red100, COLORS.red700, COLORS.red600],
    new: [COLORS.magenta100, COLORS.magenta700, '#8B1865']
  };
  const [bg, fg, dc] = map[variant] || map.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 9999,
      background: bg,
      color: fg,
      fontSize: 12,
      fontWeight: 500,
      fontFamily: 'Inter, sans-serif'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dc
    }
  }), children);
};

// --- FeaturedIcon ---
const FeaturedIcon = ({
  iconName,
  color = COLORS.blue600,
  size = 48
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    height: size,
    borderRadius: '50%',
    background: '#fff',
    boxShadow: SHADOW.featured,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color,
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement(Icon, {
  d: ICONS[iconName],
  size: size * 0.42,
  stroke: 1.8
}));

// --- Card ---
const Card = ({
  children,
  style,
  shadow = 'c05',
  pad = 20
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#fff',
    borderRadius: 12,
    padding: pad,
    boxShadow: SHADOW[shadow],
    ...style
  }
}, children);
Object.assign(window, {
  COLORS,
  SHADOW,
  ICONS,
  Icon,
  Button,
  Badge,
  FeaturedIcon,
  Card
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
const {
  useState
} = React;
const NavItem = ({
  icon,
  label,
  active,
  collapsed,
  onClick,
  badge
}) => {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: collapsed ? '10px' : '8px 12px',
      borderRadius: 8,
      cursor: 'pointer',
      background: active ? COLORS.brand200 : hover ? COLORS.brand100 : 'transparent',
      color: active ? COLORS.gray800 : COLORS.gray700,
      fontWeight: active ? 500 : 400,
      fontSize: 14,
      transition: 'all 120ms ease',
      justifyContent: collapsed ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS[icon],
    size: 18,
    stroke: 1.8
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap'
    }
  }, label), !collapsed && badge && /*#__PURE__*/React.createElement(Badge, {
    variant: badge.variant
  }, badge.text));
};
const NavSection = ({
  title,
  children,
  collapsed
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 18
  }
}, !collapsed && title && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: COLORS.gray500,
    padding: '0 12px 8px'
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }
}, children));
const Sidebar = ({
  current,
  onNavigate
}) => {
  const [collapsed, setCollapsed] = useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: collapsed ? 72 : 248,
      background: '#fff',
      borderRight: `1px solid ${COLORS.gray100}`,
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      transition: 'width 200ms ease',
      height: '100vh',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: `1px solid ${COLORS.gray100}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: COLORS.gray800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: 16,
      flexShrink: 0
    }
  }, "s"), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: 18,
      color: COLORS.gray800,
      letterSpacing: '-0.01em'
    }
  }, "salvy"), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), !collapsed && /*#__PURE__*/React.createElement("button", {
    onClick: () => setCollapsed(true),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: COLORS.gray500,
      padding: 4,
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.menu,
    size: 16
  }))), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 12px 0',
      padding: '10px 12px',
      borderRadius: 10,
      background: COLORS.brand100,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: COLORS.gray800,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: 13,
      flexShrink: 0
    }
  }, "AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: COLORS.gray800,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Acme Ltda."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: COLORS.gray500
    }
  }, "Admin")), /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.chevronDown,
    size: 14,
    stroke: 2,
    style: {
      color: COLORS.gray500
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 12px'
    }
  }, /*#__PURE__*/React.createElement(NavSection, {
    collapsed: collapsed
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "saas",
    label: "In\xEDcio",
    collapsed: collapsed,
    active: current === 'home',
    onClick: () => onNavigate('home')
  })), /*#__PURE__*/React.createElement(NavSection, {
    title: "Telefonia",
    collapsed: collapsed
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "phone",
    label: "Linhas",
    collapsed: collapsed,
    active: current === 'lines',
    onClick: () => onNavigate('lines')
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "saas",
    label: "eSIMs",
    collapsed: collapsed,
    active: current === 'esims',
    onClick: () => onNavigate('esims'),
    badge: {
      text: 'Novo',
      variant: 'new'
    }
  })), /*#__PURE__*/React.createElement(NavSection, {
    title: "Gest\xE3o",
    collapsed: collapsed
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "laptop",
    label: "Ativos",
    collapsed: collapsed,
    active: current === 'assets',
    onClick: () => onNavigate('assets')
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "users",
    label: "Colaboradores",
    collapsed: collapsed,
    active: current === 'employees',
    onClick: () => onNavigate('employees')
  })), /*#__PURE__*/React.createElement(NavSection, {
    title: "Financeiro",
    collapsed: collapsed
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "invoice",
    label: "Faturas",
    collapsed: collapsed,
    active: current === 'invoices',
    onClick: () => onNavigate('invoices')
  })), /*#__PURE__*/React.createElement(NavSection, {
    title: "Administra\xE7\xE3o",
    collapsed: collapsed
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "settings",
    label: "Configura\xE7\xF5es",
    collapsed: collapsed,
    active: current === 'settings',
    onClick: () => onNavigate('settings')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderTop: `1px solid ${COLORS.gray100}`,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, collapsed ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setCollapsed(false),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: COLORS.gray500,
      padding: 4,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.menu,
    size: 16
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: COLORS.brand300,
      color: COLORS.gray700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: 13,
      fontFamily: 'Inter'
    }
  }, "JS"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: COLORS.gray800,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Julia Souza"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: COLORS.gray500
    }
  }, "julia@acme.com.br")), /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.more,
    size: 16,
    style: {
      color: COLORS.gray500,
      cursor: 'pointer'
    }
  }))));
};
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/TopBar.jsx
try { (() => {
const TopBar = ({
  breadcrumb = []
}) => {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      background: '#fff',
      borderBottom: `1px solid ${COLORS.gray100}`,
      padding: '0 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1,
      minWidth: 0
    }
  }, breadcrumb.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: i === breadcrumb.length - 1 ? COLORS.gray800 : COLORS.gray500,
      fontWeight: i === breadcrumb.length - 1 ? 500 : 400,
      whiteSpace: 'nowrap'
    }
  }, b), i < breadcrumb.length - 1 && /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.chevronRight,
    size: 14,
    stroke: 2,
    style: {
      color: COLORS.gray300
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      background: COLORS.brand100,
      borderRadius: 8,
      width: 280,
      color: COLORS.gray500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.search,
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar colaborador, linha, ativo\u2026",
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      flex: 1,
      fontFamily: 'Inter',
      fontSize: 13,
      color: COLORS.gray800
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono',
      fontSize: 11,
      padding: '2px 6px',
      border: `1px solid ${COLORS.gray200}`,
      borderRadius: 4,
      background: '#fff',
      color: COLORS.gray500
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'transparent',
      border: `1px solid ${COLORS.gray200}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: COLORS.gray700,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ICONS.bell,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 9,
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: COLORS.red600
    }
  })));
};
const PageHeader = ({
  title,
  subtitle,
  actions
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 24,
    marginBottom: 24,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 28,
    color: COLORS.gray800,
    margin: 0,
    letterSpacing: '-0.01em'
  }
}, title), subtitle && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: COLORS.gray600,
    marginTop: 6
  }
}, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 10
  }
}, actions));
window.TopBar = TopBar;
window.PageHeader = PageHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/TopBar.jsx", error: String((e && e.message) || e) }); }

})();
