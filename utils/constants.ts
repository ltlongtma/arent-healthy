export const ROUTE = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  RECORDS: "/records",
  LOGIN: "/login",
  REGISTER: "#",
};

export const NAVIGATION = [
  {
    name: "自分の記録",
    icon: "/icons/note.svg",
    route: ROUTE.RECORDS,
  },
  {
    name: "チャレンジ",
    icon: "/icons/challenge.svg",
    route: "/challenge",
  },
  {
    name: "お知らせ",
    icon: "/icons/info.svg",
    route: "/notifications",
  },
];

export const MENU_DROPDOWN = [
  {
    name: " 自分の記録",
    route: ROUTE.RECORDS,
  },
  {
    name: "体重グラフ",
    route: "#",
  },
  {
    name: "目標",
    route: "#",
  },
  {
    name: "選択中のコース",
    route: "#",
  },
  {
    name: "コラム一覧",
    route: "/",
  },
  {
    name: "設定",
    route: "#",
  },
];

export const FOOTER_LINKS = [
  { name: "会員登録", route: "/register" },
  { name: "運営会社", route: "/company" },
  { name: "利用規約", route: "/terms" },
  { name: "個人情報の取扱について", route: "/privacy" },
  { name: "特定商取引法に基づく表記", route: "/legal" },
  { name: "お問い合わせ", route: "/contact" },
];
