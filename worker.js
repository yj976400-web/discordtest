const guilds = (env) => [
  { k: 0, id: env.GUILD1_ID, name: "Stellar Crew", admin: env.GUILD1_ADMIN, r: [env.GUILD1_ROLE_MEMBER, env.GUILD1_ROLE_UPPER, env.GUILD1_ROLE_EXEC] },
  { k: 1, id: env.GUILD2_ID, name: "미친놈들의 아지트", admin: env.GUILD2_ADMIN, r: [env.GUILD2_ROLE_MEMBER, env.GUILD2_ROLE_UPPER, env.GUILD2_ROLE_EXEC] },
].filter((g) => g.id);
const B64 =
  "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";
const B64A =
  "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" +
  "/R+TKRxETBUAAA==";
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
async function dmUsers(ids, env, content) {
  const bot = { Authorization: "Bot " + env.DISCORD_BOT_TOKEN };
  const res = await Promise.all(ids.map(async (uid) => {
    try {
      const dm = await fetch("https://discord.com/api/users/@me/channels", { method: "POST", headers: { ...bot, "Content-Type": "application/json" }, body: JSON.stringify({ recipient_id: uid }) });
      if (!dm.ok) return false;
      const ch = await dm.json();
      return (await fetch(`https://discord.com/api/channels/${ch.id}/messages`, { method: "POST", headers: { ...bot, "Content-Type": "application/json" }, body: JSON.stringify({ allowed_mentions: { parse: [] }, content }) })).ok;
    } catch (e) { return false; }
  }));
  return res.some(Boolean);
}
const adminIds = (cfg) => String(cfg.admin || "").split(/[,\s]+/).filter(Boolean);
const TN = ["회원 시험", "상위 멤버 시험", "임원 시험"];
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
    if (u.pathname === "/request" && req.method === "POST") {
      try {
        const b = await req.json(), p = await auth(b.token, env), ti = Number(b.ti);
        if (!p) return json({ ok: false, why: "로그인이 만료됐어요. 다시 로그인해 주세요." }, 401);
        const gc = guilds(env).find((x) => x.id === b.sid), sv = gc && p.servers.find((s) => s.id === gc.id);
        if (!sv) return json({ ok: false, why: "해당 서버에 가입되어 있지 않아요" }, 403);
        if (!sv.ok[ti]) return json({ ok: false, why: sv.why[ti] || "요청할 수 없는 시험이에요" }, 403);
        if (env.EXAMS) {
          const k = `rq:${p.id}:${gc.k}:${ti}`;
          if (await env.EXAMS.get(k)) return json({ ok: false, why: "이미 요청했어요. 10분 뒤에 다시 요청할 수 있어요." }, 429);
          await env.EXAMS.put(k, "1", { expirationTtl: 600 });
        }
        const link = `${u.origin}/admin?g=${gc.k}&ti=${ti}&to=${p.id}`;
        const ok = await dmUsers(adminIds(gc), env, `🙋 **시험 요청** — ${TN[ti]}\n응시자: <@${p.id}> (@${p.user}) · 서버 닉네임: ${sv.nick || p.gn || p.user}\n서버: ${gc.name}\n👉 수험번호 발급: ${link}`);
        return json(ok ? { ok: true } : { ok: false, why: "관리자에게 알림을 보내지 못했어요. 관리자에게 직접 요청해 주세요." }, ok ? 200 : 502);
      } catch (e) { return json({ ok: false, why: "서버 오류가 났어요" }, 500); }
    }
    if (u.pathname === "/admin/issue" && req.method === "POST") {
      try {
        const b = await req.json(), p = await auth(b.token, env), ti = Number(b.ti), g = Number(b.g);
        if (!p || !(p.adm || []).some((a) => a.k === g)) return json({ ok: false, why: "관리자 권한이 없어요" }, 403);
        const to = String(b.to || "").trim().replace(/^@/, "").toLowerCase();
        if (!(ti >= 0 && ti <= 2) || to.length < 2) return json({ ok: false, why: "입력값을 확인해 주세요" }, 400);
        const min = Math.floor(Date.now() / 60000);
        const no = `${"MUE"[ti]}${g + 1}-${min.toString(36).toUpperCase().padStart(5, "0")}-${await sig6(g, ti, min, to, env)}`, hours = Number(env.EXAM_NO_HOURS || 72);
        let dm = false;
        if (b.dm && /^\d{15,25}$/.test(to)) dm = await dmUsers([to], env, `📝 **수험번호가 발급됐어요**\n서버: ${guilds(env).find((x) => x.k === g).name} · ${TN[ti]}\n수험번호: **${no}** (${hours}시간 유효)\n시험 주소: ${u.origin}`);
        return json({ ok: true, hours, no, dm });
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
