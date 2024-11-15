export const PERIOD_FILTERS = [
  { id: "day", label: "日" },
  { id: "week", label: "週" },
  { id: "month", label: "月" },
  { id: "year", label: "年" },
];

// Helper function to generate random data within a range
const generateRandomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// Generate data for different time periods
export const generateMockData = (period: string = 'year') => {
  switch (period) {
    case 'day':
      return Array.from({ length: 24 }, (_, i) => ({
        name: `${i}時`,
        bodyWeight: generateRandomValue(40, 120),
        bodyFat: generateRandomValue(5, 50),
      }));

    case 'week':
      const days = ['月', '火', '水', '木', '金', '土', '日'];
      return days.map(day => ({
        name: day,
        bodyWeight: generateRandomValue(40, 120),
        bodyFat: generateRandomValue(5, 50),
      }));

    case 'month':
      return Array.from({ length: 31 }, (_, i) => ({
        name: `${i + 1}日`,
        bodyWeight: generateRandomValue(40, 120),
        bodyFat: generateRandomValue(5, 50),
      }));

    case 'year':
    default:
      const months = [
        "6月", "7月", "8月", "9月", "10月", "11月",
        "12月", "1月", "2月", "3月", "4月", "5月"
      ];
      return months.map(month => ({
        name: month,
        bodyWeight: generateRandomValue(40, 120),
        bodyFat: generateRandomValue(5, 50),
      }));
  }
};
