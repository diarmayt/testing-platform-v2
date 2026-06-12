
function useAdminNav() {
  const { t } = useLang();
  return {
    items: [
      { id: 'overview', label: t('Обзор', 'Шолу'), icon: Icons.grid, href: 'admin-dashboard.html' },
      { id: 'tests', label: t('Банк тестов', 'Тест банкі'), icon: Icons.fileText, href: 'admin-tests.html' },
      { id: 'candidates', label: t('Кандидаты', 'Кандидаттар'), icon: Icons.users, href: 'admin-candidates.html' },
      { id: 'journal', label: t('Журнал', 'Журнал'), icon: Icons.clipboard, href: 'admin-journal.html' },
      { id: 'stats', label: t('Статистика', 'Статистика'), icon: Icons.barChart, href: 'admin-stats.html' },
      { id: 'staff', label: t('Сотрудники', 'Қызметкерлер'), icon: Icons.settings, href: 'admin-staff.html' },
      { id: 'profile', label: t('Профиль', 'Профиль'), icon: Icons.user, href: 'admin-profile.html' },
    ],
    bottom: [
      { id: 'support', label: t('Поддержка', 'Қолдау'), icon: Icons.help },
      { id: 'logout', label: t('Выйти', 'Шығу'), icon: Icons.logOut, danger: true },
    ],
  };
}

function AdminShell({ active, children }) {
  const { t } = useLang();
  const nav = useAdminNav();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const sidebar = React.createElement(Sidebar, {
    items: nav.items, active, bottomItems: nav.bottom,
    onNavigate: (id) => {
      const item = nav.items.find(x => x.id === id);
      if (item && item.href) window.location.href = item.href;
      if (id === 'logout') window.location.href = 'login.html';
    },
    userBlock: React.createElement('div', null,
      React.createElement('div', { style: { fontFamily: 'var(--font-heading)', fontSize: 15, fontWeight: 700, lineHeight: 1.3 } }, t('Оценка квалификации', 'Біліктілікті бағалау')),
      React.createElement('div', { style: { fontSize: 12, color: 'var(--muted)', marginTop: 2 } }, 'IT Qualification Board'),
    ),
  });

  return React.createElement('div', { style: { minHeight: '100dvh', display: 'flex', flexDirection: 'column' } },
    React.createElement(SattiHeader, { variant: 'admin', avatarInitials: 'ИО' }),
    React.createElement('div', { style: { flex: 1, display: 'flex' } },
      React.createElement('div', { className: 'admin-sidebar' }, sidebar),
      React.createElement('main', { style: { flex: 1, minWidth: 0 } }, children),
    ),
    React.createElement(SattiFooter, null),
    React.createElement('style', null, '@media (max-width: 860px){ .admin-sidebar{ display:none; } }'),
  );
}

Object.assign(window, { useAdminNav, AdminShell });
