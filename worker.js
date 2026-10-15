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
        const content = `📝 **${meta.tier}** 결과\n응시자: <@${p.id}> (@${p.user}) · 서버 닉네임: ${sv.nick || p.gn || p.user}\n서버: ${cfg.name}\n점수: ${meta.score}/${meta.n} · ${meta.pass ? "합격" : "불합격"} · 인증코드 ${meta.code}`;
        const payload = JSON.stringify({ allowed_mentions: { parse: [] }, content });
        const sendTo = async (uid) => {
          const dm = await fetch("https://discord.com/api/users/@me/channels", { method: "POST", headers: { ...bot, "Content-Type": "application/json" }, body: JSON.stringify({ recipient_id: uid }) });
          if (!dm.ok) return false;
          const ch = await dm.json();
          const fd = new FormData();
          fd.append("payload_json", payload);
          fd.append("files[0]", file, "result.png");
          return (await fetch(`https://discord.com/api/channels/${ch.id}/messages`, { method: "POST", headers: bot, body: fd })).ok;
        };
        const ids = String(cfg.admin || "").split(/[,\s]+/).filter(Boolean);
        const res = await Promise.all(ids.map((x) => sendTo(x).catch(() => false)));
        return json({ ok: res.some(Boolean), sent: res.filter(Boolean).length, total: res.length }, res.some(Boolean) ? 200 : 502);
      } catch (e) { return json({ ok: false, err: "server" }, 500); }
    }

    return new Response(await page(), { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
  },
};
