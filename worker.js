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
    if (u.pathname === "/interview/slot" && req.method === "POST") {
      try {
        const b = await req.json(), p = await auth(b.token, env), no = String(b.no || "");
        if (!p) return json({ ok: false, why: "로그인이 만료됐어요. 다시 로그인해 주세요." }, 401);
        if (!no.startsWith("E") || b.sg !== (await stamp(no, Number(b.t), env))) return json({ ok: false, why: "확인할 수 없는 수험번호예요" }, 400);
        const cfg = guilds(env).find((g) => g.k === Number(no[1]) - 1), sv = cfg && p.servers.find((s) => s.id === cfg.id);
        if (!sv) return json({ ok: false, why: "해당 서버에 가입되어 있지 않아요" }, 403);
        const text = String(b.text || "").trim().slice(0, 300);
        if (text.length < 2) return json({ ok: false, why: "가능한 날짜와 시간을 적어 주세요" }, 400);
        if (env.EXAMS) {
          const key = "iv:" + no, r = await env.EXAMS.get(key, "json");
          if (r && !r.res) { r.slots = text; r.slotAt = Date.now(); if (r.status === "wait") r.status = "sched"; await env.EXAMS.put(key, JSON.stringify(r)); }
        }
        const ok = await dmUsers(adminIds(cfg), env, `📅 **면접 일정 신청**\n응시자: <@${p.id}> (@${p.user}) · 서버 닉네임: ${sv.nick || p.gn || p.user}\n서버: ${cfg.name} · 수험번호 **${no}**\n가능한 시간: ${text}`);
        return json(ok ? { ok: true } : { ok: false, why: "관리자에게 알림을 보내지 못했어요" }, ok ? 200 : 502);
      } catch (e) { return json({ ok: false, why: "서버 오류가 났어요" }, 500); }
    }
    if (u.pathname === "/admin/iv/list" && req.method === "POST") {
      try {
        const b = await req.json(), p = await auth(b.token, env);
        if (!p || !(p.adm || []).length) return json({ ok: false, why: "관리자 권한이 없어요" }, 403);
        if (!env.EXAMS) return json({ ok: false, why: "저장소(EXAMS)가 연결되지 않았어요. 연결하면 면접 목록을 쓸 수 있어요." }, 501);
        const ks = (await env.EXAMS.list({ prefix: "iv:", limit: 200 })).keys;
        const all = (await Promise.all(ks.map((k) => env.EXAMS.get(k.name, "json")))).filter(Boolean);
        return json({ ok: true, list: all.filter((r) => p.adm.some((a) => a.k === r.g)).sort((x, y) => y.at - x.at) });
      } catch (e) { return json({ ok: false, why: "서버 오류가 났어요" }, 500); }
    }
    if (u.pathname === "/admin/iv/set" && req.method === "POST") {
      try {
        const b = await req.json(), p = await auth(b.token, env);
        if (!env.EXAMS) return json({ ok: false, why: "저장소(EXAMS)가 연결되지 않았어요" }, 501);
        const key = "iv:" + String(b.no || ""), r = p && (await env.EXAMS.get(key, "json"));
        if (!p || !r || !(p.adm || []).some((a) => a.k === r.g)) return json({ ok: false, why: "권한이 없거나 기록이 없어요" }, 403);
        if (Array.isArray(b.scores) && b.scores.length === 5) r.ev = { s: b.scores.map((x) => Math.min(5, Math.max(0, Number(x) || 0))), memo: String(b.memo || "").slice(0, 500), by: p.user, at: Date.now() };
        let dm = null;
        if (b.act === "pass" || b.act === "fail") {
          if (r.res) return json({ ok: false, why: "이미 결과를 처리했어요" }, 409);
          const msg = String(b.msg || "").slice(0, 300);
          r.res = { v: b.act, by: p.user, at: Date.now() };
          r.status = b.act;
          dm = await dmUsers([r.uid], env, b.act === "pass" ? `🎉 **면접 합격!** (${r.srv})\n수고하셨어요. 관리자가 확인한 뒤 임원 역할을 부여해요.\n수험번호: ${r.no}${msg ? "\n💬 " + msg : ""}` : `📋 **면접 결과 안내** (${r.srv})\n아쉽지만 이번 면접은 합격하지 못했어요. 수고하셨어요.\n수험번호: ${r.no}${msg ? "\n💬 " + msg : ""}`);
        }
        await env.EXAMS.put(key, JSON.stringify(r));
        return json({ ok: true, rec: r, dm });
      } catch (e) { return json({ ok: false, why: "서버 오류가 났어요" }, 500); }
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
        if (env.EXAMS && ti === 2 && meta.pass) {
          const key = "iv:" + no;
          if (!(await env.EXAMS.get(key))) await env.EXAMS.put(key, JSON.stringify({ no, uid: p.id, user: p.user, nick: sv.nick || p.gn || p.user, g: cfg.k, srv: cfg.name, score: Number(meta.score) || 0, n: Number(meta.n) || 0, status: "wait", slots: "", slotAt: 0, ev: null, res: null, at: Date.now() }));
        }
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
