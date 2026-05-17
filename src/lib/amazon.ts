// ─────────────────────────────────────────────
// Amazon アソシエイト設定
// TAG を自分のアソシエイトIDに変更してください
// 例: "yourname-22"
// ─────────────────────────────────────────────
export const ASSOCIATE_TAG = 'YOUR_TAG-22';

/** ゲームタイトルでAmazon.co.jpを検索するURL */
export function amazonSearchUrl(title: string): string {
  const q = encodeURIComponent(title);
  return `https://www.amazon.co.jp/s?k=${q}&tag=${ASSOCIATE_TAG}`;
}

/** ASIN指定の商品ページURL */
export function amazonProductUrl(asin: string): string {
  return `https://www.amazon.co.jp/dp/${asin}?tag=${ASSOCIATE_TAG}`;
}

/** キーワード検索URL */
export function amazonKeywordUrl(keyword: string): string {
  const q = encodeURIComponent(keyword);
  return `https://www.amazon.co.jp/s?k=${q}&tag=${ASSOCIATE_TAG}`;
}

// ── カテゴリ別商品リンク ───────────────────────────

/** VRヘッドセット (ASIN指定) */
export const VR_PRODUCTS = [
  {
    asin: 'B0C6NP3QS9',
    name: 'Meta Quest 3',
    note: '128GB',
    price: '¥74,800〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0C6NP3QS9.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B0BHHJ7Z3R',
    name: 'PlayStation VR2',
    note: 'PS5専用',
    price: '¥79,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0BHHJ7Z3R.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B099VMT8VZ',
    name: 'Meta Quest 2',
    note: '128GB（旧世代）',
    price: '¥39,900〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B099VMT8VZ.09.LZZZZZZZ.jpg',
  },
];

/** Steamギフトカード（検索） */
export const STEAM_GIFT_CARDS = [
  {
    label: 'Steam ¥1,000',
    keyword: 'Steam ウォレットコード 1000',
    icon: '💳',
  },
  {
    label: 'Steam ¥3,000',
    keyword: 'Steam ウォレットコード 3000',
    icon: '💳',
  },
  {
    label: 'Steam ¥5,000',
    keyword: 'Steam ウォレットコード 5000',
    icon: '💳',
  },
];

/** PCゲームコントローラー（ASIN指定） */
export const PC_CONTROLLERS = [
  {
    asin: 'B08DF26PNG',
    name: 'Xbox ワイヤレス コントローラー',
    note: 'PC/Xbox対応',
    price: '¥7,678〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B08DF26PNG.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B0CWH38FY2',
    name: 'DualSense ワイヤレスコントローラー',
    note: 'PS5/PC対応',
    price: '¥9,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0CWH38FY2.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B0B9GTJZGB',
    name: 'GameSir T4 Kaleid',
    note: 'PC専用 有線',
    price: '¥3,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0B9GTJZGB.09.LZZZZZZZ.jpg',
  },
];

/** ゲーミングマウス */
export const GAMING_MICE = [
  {
    asin: 'B09FFDHXM4',
    name: 'Logicool G PRO X SUPERLIGHT 2',
    note: '60g 超軽量ワイヤレス',
    price: '¥16,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B09FFDHXM4.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B08KFTZHL1',
    name: 'Razer DeathAdder V2',
    note: '20000DPI 有線',
    price: '¥4,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B08KFTZHL1.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B09GK3PF8H',
    name: 'Logicool G304',
    note: 'ワイヤレス エントリー',
    price: '¥3,480〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B09GK3PF8H.09.LZZZZZZZ.jpg',
  },
];

/** ゲーミングヘッドセット */
export const GAMING_HEADSETS = [
  {
    asin: 'B09MJ68P2D',
    name: 'SteelSeries Arctis Nova 7',
    note: 'ワイヤレス 2.4GHz',
    price: '¥17,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B09MJ68P2D.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B0BCJXZ8Z6',
    name: 'HyperX Cloud III',
    note: '有線 DTS対応',
    price: '¥9,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0BCJXZ8Z6.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B09HCLTQVV',
    name: 'Logicool G733',
    note: 'ワイヤレス 軽量278g',
    price: '¥11,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B09HCLTQVV.09.LZZZZZZZ.jpg',
  },
];

/** ゲーミングモニター */
export const GAMING_MONITORS = [
  {
    asin: 'B09VCJ84MH',
    name: 'ASUS TUF Gaming VG27AQL3A',
    note: '27型 IPS 180Hz QHD',
    price: '¥34,800〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B09VCJ84MH.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B08L6XMGJ4',
    name: 'LG 27GP950-B',
    note: '27型 Nano IPS 144Hz 4K',
    price: '¥54,800〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B08L6XMGJ4.09.LZZZZZZZ.jpg',
  },
  {
    asin: 'B0C15RB1G3',
    name: 'MSI Optix G244F',
    note: '24型 IPS 170Hz FHD',
    price: '¥19,800〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0C15RB1G3.09.LZZZZZZZ.jpg',
  },
];

/** PCゲーミングガジェット（ホーム向け混在バナー用） */
export const HOME_GADGETS = [
  {
    asin: 'B09GK3PF8H',
    name: 'Logicool G304 ワイヤレスマウス',
    note: 'PCゲーム入門にも',
    price: '¥3,480〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B09GK3PF8H.09.LZZZZZZZ.jpg',
    category: 'マウス',
  },
  {
    asin: 'B0BCJXZ8Z6',
    name: 'HyperX Cloud III ヘッドセット',
    note: '有線 7.1ch対応',
    price: '¥9,980〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0BCJXZ8Z6.09.LZZZZZZZ.jpg',
    category: 'ヘッドセット',
  },
  {
    asin: 'B08DF26PNG',
    name: 'Xbox ワイヤレス コントローラー',
    note: 'PC/Xbox両対応',
    price: '¥7,678〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B08DF26PNG.09.LZZZZZZZ.jpg',
    category: 'コントローラー',
  },
  {
    asin: 'B0C15RB1G3',
    name: 'MSI Optix G244F ゲーミングモニター',
    note: '170Hz FHD 24型',
    price: '¥19,800〜',
    img: 'https://images-na.ssl-images-amazon.com/images/P/B0C15RB1G3.09.LZZZZZZZ.jpg',
    category: 'モニター',
  },
];
