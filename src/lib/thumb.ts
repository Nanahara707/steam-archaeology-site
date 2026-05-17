// Steam の header image URL を appid から生成する
export function getThumb(appid: number): string {
  return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appid}/header.jpg`;
}
