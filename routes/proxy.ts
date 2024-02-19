import { Handlers } from "$fresh/server.ts";

// Add here the scripts you want to proxy
const ALLOWLIST_URLS = ["https://api.sharpspring.com/pubapi/v1.2"];

export const handler: Handlers = {
  GET: async (req) => {
    console.log("🚀 ~ GET: ~ req:", req)
    const url = (new URL(req.url)).searchParams.get("url");

    if (!url || !ALLOWLIST_URLS.includes(url)) {
      return new Response(null, { status: 404 });
    }

    const proxyRequest = new Request(
      url,
      {
        headers: req.headers,
        method: req.method,
        body: req.body,
        redirect: "follow",
      },
    );

    const response = await fetch(proxyRequest);
    const headers = new Headers(response.headers);
    headers.set("access-control-allow-origin", "*");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};