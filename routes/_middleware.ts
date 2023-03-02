import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 546,
  site: "wedigi",
  domains: ["wedigi.deco.site"],
});