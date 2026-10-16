const guilds = (env) => [
  { k: 0, id: env.GUILD1_ID, name: "Stellar Crew", admin: env.GUILD1_ADMIN, r: [env.GUILD1_ROLE_MEMBER, env.GUILD1_ROLE_UPPER, env.GUILD1_ROLE_EXEC] },
  { k: 1, id: env.GUILD2_ID, name: "미친놈들의 아지트", admin: env.GUILD2_ADMIN, r: [env.GUILD2_ROLE_MEMBER, env.GUILD2_ROLE_UPPER, env.GUILD2_ROLE_EXEC] },
].filter((g) => g.id);
const B64 =
  "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";
const B64A =
  "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";
const cache = {};
async function page(k) {
  if (!cache[k]) {
    const bin = Uint8Array.from(atob(k === "a" ? B64A : B64), (c) => c.charCodeAt(0));
    cache[k] = await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
  }
  return cache[k];
}
const enc = new TextEncoder();
const b64u = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
async function sign(data, secret) {
  const k = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(await crypto.subtle.sign("HMAC", k, enc.encode(data)));
}
async function auth(tok, env) {
  const [body, sig] = String(tok || "").split(".");
  if (!body || sig !== (await sign(body, env.SESSION_SECRET))) return null;
  const p = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(body.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0))));
  return p.exp < Date.now() ? null : p;
}
const sig6 = async (g, ti, min, bind, env) => (await sign(["no", g, ti, min, bind].join("|"), env.SESSION_SECRET)).replace(/[^A-Za-z0-9]/g, "").slice(0, 6).toUpperCase();
const stamp = async (no, t, env) => (await sign(`start|${no}|${t}`, env.SESSION_SECRET)).slice(0, 16);
async function checkNo(no, p, env) {
  const m = String(no).trim().toUpperCase().match(/^([MUE])(\d)-([0-9A-Z]{5})-([0-9A-Z]{6})$/);
  if (!m) return { why: "수험번호 형식이 올바르지 않아요" };
  const ti = "MUE".indexOf(m[1]), g = Number(m[2]) - 1, min = parseInt(m[3], 36);
  const age = Date.now() - min * 60000;
  if (age < -60000 || age > Number(env.EXAM_NO_HOURS || 72) * 3600e3) return { why: "만료됐거나 유효하지 않은 수험번호예요" };
  for (const bind of [String(p.id), String(p.user).toLowerCase()]) {
    if (m[4] === (await sig6(g, ti, min, bind, env))) return { ti, g, no: m[0] };
  }
  return { why: "이 계정에 발급된 수험번호가 아니에요" };
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
      const hd = new Headers({ Location: to.href });
      hd.append("Set-Cookie", `st=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`);
      hd.append("Set-Cookie", `nx=${u.searchParams.get("next") === "admin" ? "admin" : ""}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`);
      return new Response(null, { status: 302, headers: hd });
    }

    if (u.pathname === "/callback") {
      const st = (req.headers.get("Cookie") || "").match(/st=([^;]+)/)?.[1], nx = (req.headers.get("Cookie") || "").match(/nx=([^;]+)/)?.[1];
      const code = u.searchParams.get("code");
      if (!code || !st || st !== u.searchParams.get("state")) return fail("로그인 확인에 실패했어요. 처음부터 다시 시도해 주세요.");
      const tr = await fetch("https://discord.com/api/oauth2/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ client_id: env.DISCORD_CLIENT_ID, client_secret: env.DISCORD_CLIENT_SECRET, grant_type: "authorization_code", code, redirect_uri: redirect }) });
      if (!tr.ok) return fail("디스코드 로그인에 실패했어요. 다시 시도해 주세요.\n\n원인: " + (await tr.text()).slice(0, 300));
      const { access_token } = await tr.json();
      const h = { Authorization: "Bearer " + access_token };
      const me = await (await fetch("https://discord.com/api/users/@me", { headers: h })).json();
      const servers = [];
      for (const g of guilds(env)) {
        const r = await fetch(`https://discord.com/api/users/@me/guilds/${g.id}/member`, { headers: h });
        if (r.ok) {
          const m = await r.json(), roles = m.roles || [], [rm, ru, re] = g.r;
          const has = (x) => !!x && roles.includes(x), need = (x) => !x || roles.includes(x);
          const hM = has(rm), hU = has(ru), hE = has(re);
          const ok = [!hM && !hU && !hE, need(rm) && !hU && !hE, need(ru) && !hE];
          const why = [ok[0] ? "" : "이미 회원 이상이에요", ok[1] ? "" : hU || hE ? "이미 상위 멤버 이상이에요" : "회원 역할이 필요해요", ok[2] ? "" : hE ? "이미 임원이에요" : "상위 멤버 역할이 필요해요"];
          servers.push({ id: g.id, name: g.name, nick: m.nick || null, ok, why });
        }
      }
      const body = b64u(enc.encode(JSON.stringify({ id: me.id, user: me.username, gn: me.global_name || null, servers, adm: guilds(env).filter((g) => String(g.admin || "").split(/[,\s]+/).includes(me.id)).map((g) => ({ k: g.k, name: g.name })), exp: Date.now() + 3 * 3600 * 1000 })));
      const token = body + "." + (await sign(body, env.SESSION_SECRET));
      return new Response(null, { status: 302, headers: { Location: (nx === "admin" ? "/admin" : "/") + "#s=" + token, "Set-Cookie": "st=; Max-Age=0; Path=/" } });
    }

    if (u.pathname === "/start" && req.method === "POST") {
      try {
        const b = await req.json();
        const p = await auth(b.token, env);
        if (!p) return json({ ok: false, why: "로그인이 만료됐어요. 다시 로그인해 주세요." }, 401);
        const c = await checkNo(b.no, p, env);
        if (!c.no) return json({ ok: false, why: c.why }, 400);
        const gc = guilds(env).find((x) => x.k === c.g), sv = gc && p.servers.find((s) => s.id === gc.id);
        if (!sv) return json({ ok: false, why: "해당 서버에 가입되어 있지 않아요" }, 403);
        if (!sv.ok[c.ti]) return json({ ok: false, why: sv.why[c.ti] }, 403);
        if (env.EXAMS) {
          if (await env.EXAMS.get("u:" + c.no)) return json({ ok: false, why: "이미 사용된 수험번호예요. 관리자에게 새 번호를 요청하세요." }, 409);
          await env.EXAMS.put("u:" + c.no, "1", { expirationTtl: 2592000 });
        }
        const t = Date.now();
        return json({ ok: true, no: c.no, ti: c.ti, sid: gc.id, srv: gc.name, nick: sv.nick, t, sg: await stamp(c.no, t, env) });
      } catch (e) { return json({ ok: false, why: "서버 오류가 났어요. 잠시 후 다시 시도해 주세요." }, 500); }
    }
    if (u.pathname === "/admin/issue" && req.method === "POST") {
      try {
        const b = await req.json(), p = await auth(b.token, env), ti = Number(b.ti), g = Number(b.g);
        if (!p || !(p.adm || []).some((a) => a.k === g)) return json({ ok: false, why: "관리자 권한이 없어요" }, 403);
        const to = String(b.to || "").trim().replace(/^@/, "").toLowerCase();
        if (!(ti >= 0 && ti <= 2) || to.length < 2) return json({ ok: false, why: "입력값을 확인해 주세요" }, 400);
        const min = Math.floor(Date.now() / 60000);
        return json({ ok: true, hours: Number(env.EXAM_NO_HOURS || 72), no: `${"MUE"[ti]}${g + 1}-${min.toString(36).toUpperCase().padStart(5, "0")}-${await sig6(g, ti, min, to, env)}` });
      } catch (e) { return json({ ok: false, why: "서버 오류" }, 500); }
    }
    if (u.pathname === "/submit" && req.method === "POST") {
      try {
        const f = await req.formData();
        const p = await auth(f.get("token"), env);
        if (!p) return json({ ok: false, err: "auth" }, 401);
        const meta = JSON.parse(f.get("meta") || "{}"), file = f.get("file");
        const no = String(meta.no || ""), mm = no.match(/^([MUE])(\d)-/), ti = mm ? "MUE".indexOf(mm[1]) : -1;
        const cfg = mm && guilds(env).find((g) => g.k === Number(mm[2]) - 1), sv = cfg && p.servers.find((s) => s.id === cfg.id);
        if (!sv || !file || file.size > 8e6) return json({ ok: false, err: "bad" }, 400);
        if (meta.sg !== (await stamp(no, Number(meta.t), env))) return json({ ok: false, err: "no" }, 400);
        const bot = { Authorization: "Bot " + env.DISCORD_BOT_TOKEN };
        const sec = Math.max(0, Math.round((Date.now() - Number(meta.t)) / 1000));
        const tag = meta.pass ? (ti === 2 ? "🎤 **면접 필요** — 임원 시험 합격자예요. 면접을 진행해 주세요." : "✅ 합격 — 확인 후 역할을 부여해 주세요.") : "❌ 불합격";
        const content = `📝 **${["회원 시험", "상위 멤버 시험", "임원 시험"][ti]}** 결과 · 수험번호 **${no}**\n${tag}\n응시자: <@${p.id}> (@${p.user}) · 서버 닉네임: ${sv.nick || p.gn || p.user}\n서버: ${cfg.name}\n점수: ${meta.score}/${meta.n} · 인증코드 ${meta.code}\n소요 시간(서버 측정): ${Math.floor(sec / 60)}분 ${sec % 60}초`;
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

    if (u.pathname === "/admin") return new Response(await page("a"), { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
    return new Response(await page("e"), { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
  },
};
