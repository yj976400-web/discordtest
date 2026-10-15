const guilds = (env) => [
  { id: env.GUILD1_ID, name: "Stellar Crew", admin: env.GUILD1_ADMIN },
  { id: env.GUILD2_ID, name: "미친놈들의 아지트", admin: env.GUILD2_ADMIN },
].filter((g) => g.id);
const B64 =
  "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";
let cache;
async function page() {
  if (!cache) {
    const bin = Uint8Array.from(atob(B64), (c) => c.charCodeAt(0));
    cache = await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
  }
  return cache;
}
const enc = new TextEncoder();
const b64u = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
async function sign(data, secret) {
  const k = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(await crypto.subtle.sign("HMAC", k, enc.encode(data)));
}
const fail = (msg) => new Response(msg, { status: 400, headers: { "Content-Type": "text/plain; charset=utf-8" } });
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json" } });

export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    const redirect = u.origin + "/callback";

    if (u.pathname === "/login") {
      const state = crypto.randomUUID();
      const to = new URL("https://discord.com/oauth2/authorize");
      to.search = new URLSearchParams({ client_id: env.DISCORD_CLIENT_ID, response_type: "code", redirect_uri: redirect, scope: "identify guilds.members.read", state, prompt: "none" });
      return new Response(null, { status: 302, headers: { Location: to.href, "Set-Cookie": `st=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600` } });
    }

    if (u.pathname === "/callback") {
      const st = (req.headers.get("Cookie") || "").match(/st=([^;]+)/)?.[1];
      const code = u.searchParams.get("code");
      if (!code || !st || st !== u.searchParams.get("state")) return fail("로그인 확인에 실패했어요. 처음부터 다시 시도해 주세요.");
      const tr = await fetch("https://discord.com/api/oauth2/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ client_id: env.DISCORD_CLIENT_ID, client_secret: env.DISCORD_CLIENT_SECRET, grant_type: "authorization_code", code, redirect_uri: redirect }) });
      if (!tr.ok) return fail("디스코드 로그인에 실패했어요. 다시 시도해 주세요.");
      const { access_token } = await tr.json();
      const h = { Authorization: "Bearer " + access_token };
      const me = await (await fetch("https://discord.com/api/users/@me", { headers: h })).json();
      const servers = [];
      for (const g of guilds(env)) {
        const r = await fetch(`https://discord.com/api/users/@me/guilds/${g.id}/member`, { headers: h });
        if (r.ok) { const m = await r.json(); servers.push({ id: g.id, name: g.name, nick: m.nick || null }); }
      }
      const body = b64u(enc.encode(JSON.stringify({ id: me.id, user: me.username, gn: me.global_name || null, servers, exp: Date.now() + 3 * 3600 * 1000 })));
      const token = body + "." + (await sign(body, env.SESSION_SECRET));
      return new Response(null, { status: 302, headers: { Location: "/#s=" + token, "Set-Cookie": "st=; Max-Age=0; Path=/" } });
    }

    if (u.pathname === "/submit" && req.method === "POST") {
      try {
        const f = await req.formData();
        const [body, sig] = String(f.get("token") || "").split(".");
        if (!body || sig !== (await sign(body, env.SESSION_SECRET))) return json({ ok: false, err: "auth" }, 401);
        const p = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(body.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0))));
        if (p.exp < Date.now()) return json({ ok: false, err: "expired" }, 401);
        const meta = JSON.parse(f.get("meta") || "{}"), file = f.get("file");
        const sv = p.servers.find((s) => s.id === meta.sid), cfg = guilds(env).find((g) => g.id === meta.sid);
        if (!sv || !cfg || !file || file.size > 8e6) return json({ ok: false, err: "bad" }, 400);
        const bot = { Authorization: "Bot " + env.DISCORD_BOT_TOKEN };
        const dm = await fetch("https://discord.com/api/users/@me/channels", { method: "POST", headers: { ...bot, "Content-Type": "application/json" }, body: JSON.stringify({ recipient_id: cfg.admin }) });
        if (!dm.ok) return json({ ok: false, err: "dm" }, 502);
        const ch = await dm.json();
        const fd = new FormData();
        fd.append("payload_json", JSON.stringify({ allowed_mentions: { parse: [] },
          content: `📝 **${meta.tier}** 결과\n응시자: <@${p.id}> (@${p.user}) · 서버 닉네임: ${sv.nick || p.gn || p.user}\n서버: ${cfg.name}\n점수: ${meta.score}/${meta.n} · ${meta.pass ? "합격" : "불합격"} · 인증코드 ${meta.code}` }));
        fd.append("files[0]", file, "result.png");
        const r = await fetch(`https://discord.com/api/channels/${ch.id}/messages`, { method: "POST", headers: bot, body: fd });
        return json({ ok: r.ok }, r.ok ? 200 : 502);
      } catch (e) { return json({ ok: false, err: "server" }, 500); }
    }

    return new Response(await page(), { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
  },
};
