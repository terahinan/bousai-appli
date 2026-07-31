const roles = [
  "町民",
  "自主防災組織",
  "町会長",
  "避難所運営委員会委員",
  "鍵保管者",
  "総務班班長",
  "被災者管理班班長",
  "情報広報班班長",
  "施設管理班班長",
  "救護班班長",
  "食料物資班班長",
  "衛生班班長",
  "ボランティア班班長"
];

// startMin: 地震発生から何分後に始めるか
// endMin: 何分後までに終える目安か
// まずはサンプルです。実際の地域マニュアルに合わせて書き換えてください。
const tasks = [
  {
    id: "resident-001",
    role: "町民",
    startMin: 0,
    endMin: 5,
    title: "身の安全を確保する",
    detail: "机の下に入る、頭を守る、倒れやすい家具・ガラス・ブロック塀から離れる。",
    note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
    id: "resident-002",
    role: "町民",
    startMin: 5,
    endMin: 10,
    title: "火の元を確認する",
    detail: "揺れがおさまってから、コンロ・ストーブなどの火を確認する。",
    note: "危険を感じる場合は無理に近づかない。"
  },
  {
    id: "resident-003",
    role: "町民",
    startMin: 5,
    endMin: 15,
    title: "家族のけがを確認する",
    detail: "家族の安否、けが、閉じ込めの有無を確認する。",
    note: "大きなけががある場合は、周囲に助けを求める。"
  },
  {
    id: "resident-004",
    role: "町民",
    startMin: 10,
    endMin: 20,
    title: "出口を確保する",
    detail: "玄関・窓・勝手口など、避難できる出口を確認する。",
    note: "割れたガラスや落下物に注意する。"
  },
  {
    id: "resident-005",
    role: "町民",
    startMin: 15,
    endMin: 30,
    title: "正確な情報を確認する",
    detail: "ラジオ、防災無線、自治体情報、町会連絡などで状況を確認する。",
    note: "SNSの未確認情報だけで判断しない。"
  },
  {
    id: "resident-006",
    role: "町民",
    startMin: 20,
    endMin: 45,
    title: "近隣の安否を確認する",
    detail: "自分の安全を確保したうえで、隣近所に声をかける。",
    note: "救助が必要な人を見つけたら、一人で無理をせず周囲に知らせる。"
  },
  {
    id: "resident-007",
    role: "町民",
    startMin: 30,
    endMin: 60,
    title: "避難の必要性を判断する",
    detail: "火災、建物被害、津波・土砂災害の危険などを確認し、避難するか判断する。",
    note: "自宅が危険な場合は、ためらわず避難する。"
  },
  {
    id: "resident-008",
    role: "町民",
    startMin: 45,
    endMin: 90,
    title: "避難時の持ち物を確認する",
    detail: "水、薬、眼鏡、携帯、充電器、貴重品、靴、防寒具などを確認する。",
    note: "荷物を増やしすぎず、両手が使えるようにする。"
  },
  {
    id: "resident-009",
    role: "町民",
    startMin: 60,
    endMin: 120,
    title: "地域の集合場所または避難所へ向かう",
    detail: "安全な道を通り、地域で決められた集合場所または避難所へ移動する。",
    note: "ブロック塀、電線、倒壊家屋、浸水箇所に近づかない。"
  },
  {
    id: "resident-010",
    role: "町民",
    startMin: 120,
    endMin: 360,
    title: "避難所・町会の指示を確認する",
    detail: "受付、安否確認、生活ルール、支援情報を確認する。",
    note: "高齢者、子ども、障害のある人、けが人への配慮を忘れない。"
  },

  {
    id: "jishu-001",
    role: "自主防災組織",
    startMin: 0,
    endMin: 10,
    title: "自身と家族の安全を確保する",
    detail: "まず自分と家族の安全を確認し、活動できる状態か判断する。",
    note: "活動者自身が被災している場合は無理をしない。"
  },
  {
    id: "jishu-002",
    role: "自主防災組織",
    startMin: 10,
    endMin: 30,
    title: "参集可否を確認する",
    detail: "連絡手段が使える場合、メンバー同士で参集可能か確認する。",
    note: "電話が混雑している場合は、決められた連絡手段を使う。"
  },
  {
    id: "jishu-003",
    role: "自主防災組織",
    startMin: 30,
    endMin: 60,
    title: "地域内の被害状況を確認する",
    detail: "火災、倒壊、けが人、避難困難者の有無を確認する。",
    note: "確認範囲と担当者を決め、二次災害に注意する。"
  },
  {
    id: "jishu-004",
    role: "自主防災組織",
    startMin: 45,
    endMin: 90,
    title: "初期消火・救出救護の要否を判断する",
    detail: "消火器や救助資機材が使える状況か確認する。",
    note: "危険が大きい場合は消防等へ通報し、無理な救助はしない。"
  },
  {
    id: "jishu-005",
    role: "自主防災組織",
    startMin: 60,
    endMin: 120,
    title: "町会長・避難所側へ状況を共有する",
    detail: "被害、救助要請、避難者数、支援が必要な人の情報を整理して共有する。",
    note: "個人情報の扱いには注意する。"
  },
  {
    id: "jishu-006",
    role: "自主防災組織",
    startMin: 120,
    endMin: 360,
    title: "避難誘導と見守りを継続する",
    detail: "避難所への誘導、高齢者等の見守り、危険箇所の共有を行う。",
    note: "長時間活動になるため、交代と休憩を考える。"
  },

  {
    id: "chair-001",
    role: "町会長",
    startMin: 0,
    endMin: 15,
    title: "自身と家族の安全を確保する",
    detail: "まず自身と家族の安全を確認し、町会対応ができる状態か判断する。",
    note: "町会長自身が危険な場合は代理者への引き継ぎを考える。"
  },
  {
    id: "chair-002",
    role: "町会長",
    startMin: 15,
    endMin: 45,
    title: "主要メンバーと連絡を取る",
    detail: "副会長、自主防災組織、避難所関係者、鍵保管者などと連絡を試みる。",
    note: "連絡不能者がいても、可能な範囲で次へ進める。"
  },
  {
    id: "chair-003",
    role: "町会長",
    startMin: 30,
    endMin: 90,
    title: "町内の概況を把握する",
    detail: "火災、倒壊、けが人、避難者数、要支援者の概況を集める。",
    note: "詳細よりも、まず大きな危険と支援要否を優先する。"
  },
  {
    id: "chair-004",
    role: "町会長",
    startMin: 60,
    endMin: 120,
    title: "避難所開設状況を確認する",
    detail: "避難所が開いているか、受付体制、鍵、施設状況を確認する。",
    note: "開設できない場合の代替場所も確認する。"
  },
  {
    id: "chair-005",
    role: "町会長",
    startMin: 120,
    endMin: 360,
    title: "行政・避難所・町内への情報連携を行う",
    detail: "必要な支援、避難者状況、危険箇所、物資要望などを整理して伝える。",
    note: "情報は時刻付きで記録する。"
  },

  {
    id: "key-001",
    role: "鍵保管者",
    startMin: 0,
    endMin: 20,
    title: "自身と家族の安全を確保する",
    detail: "安全を確認し、鍵を持って移動できるか判断する。",
    note: "危険な場合は代理者へ連絡する。"
  },
  {
    id: "key-002",
    role: "鍵保管者",
    startMin: 20,
    endMin: 60,
    title: "避難所の鍵を持って参集する",
    detail: "決められた場所へ鍵を持って向かう。",
    note: "移動中の危険箇所に注意する。"
  },
  {
    id: "key-003",
    role: "鍵保管者",
    startMin: 45,
    endMin: 90,
    title: "施設開錠と開設担当への引き継ぎ",
    detail: "施設を開け、避難所運営担当へ鍵と状況を引き継ぐ。",
    note: "建物の安全確認なしに無理に入らない。"
  },

  {
    id: "soumuhan-001",
    role: "総務班班長",
    startMin: 30,
    endMin: 90,
    title: "避難所運営メンバーの参集状況を確認する",
    detail: "各班長・委員の参集可否を確認し、役割分担を仮決めする。",
    note: "不在者がいる前提で、代替担当を決める。"
  },
  {
    id: "soumuhan-002",
    role: "総務班班長",
    startMin: 60,
    endMin: 180,
    title: "受付・記録・連絡体制を整える",
    detail: "避難者受付、安否確認、記録用紙、行政連絡の流れを整える。",
    note: "紙でも運用できるようにしておく。"
  }
];

const roleSelect = document.getElementById("roleSelect");
const quakeTimeInput = document.getElementById("quakeTimeInput");
const elapsedText = document.getElementById("elapsedText");
const summaryText = document.getElementById("summaryText");
const taskCount = document.getElementById("taskCount");
const taskList = document.getElementById("taskList");
const upcomingList = document.getElementById("upcomingList");
const timelineList = document.getElementById("timelineList");
const timelineScale = document.getElementById("timelineScale");
const timelineNow = document.getElementById("timelineNow");
const resetChecksButton = document.getElementById("resetChecksButton");

const STORAGE_PREFIX = "bousai-earthquake-v2";

function pad(n) {
  return String(n).padStart(2, "0");
}

function toDatetimeLocalValue(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatElapsed(minutes) {
  if (minutes < 0) return "未来の時刻です";
  if (minutes < 60) return `${minutes}分経過`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h < 24) return `${h}時間${m > 0 ? m + "分" : ""}経過`;
  const d = Math.floor(h / 24);
  const rh = h % 24;
  return `${d}日${rh > 0 ? rh + "時間" : ""}経過`;
}

function formatRange(start, end) {
  return `${formatTimePoint(start)}〜${formatTimePoint(end)}`;
}

function formatTimePoint(min) {
  if (min < 60) return `${min}分`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (m === 0) return `${h}時間`;
  return `${h}時間${m}分`;
}

function getElapsedMinutes() {
  const value = quakeTimeInput.value;
  if (!value) return null;
  const quakeTime = new Date(value);
  if (Number.isNaN(quakeTime.getTime())) return null;
  return Math.floor((Date.now() - quakeTime.getTime()) / 60000);
}

function checksKey() {
  const role = roleSelect.value || "";
  const time = quakeTimeInput.value || "no-time";
  return `${STORAGE_PREFIX}:checks:${role}:${time}`;
}

function getChecks() {
  try {
    return JSON.parse(localStorage.getItem(checksKey()) || "{}");
  } catch {
    return {};
  }
}

function saveCheck(taskId, checked) {
  const checks = getChecks();
  checks[taskId] = checked;
  localStorage.setItem(checksKey(), JSON.stringify(checks));
}

function initRoleSelect() {
  roleSelect.innerHTML = roles.map(role => `<option value="${role}">${role}</option>`).join("");
  roleSelect.value = localStorage.getItem(`${STORAGE_PREFIX}:role`) || "町民";
}

function initQuakeTime() {
  const saved = localStorage.getItem(`${STORAGE_PREFIX}:quakeTime`);
  if (saved) {
    quakeTimeInput.value = saved;
  } else {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60000);
    quakeTimeInput.value = toDatetimeLocalValue(thirtyMinutesAgo);
  }
}

function getRoleTasks() {
  return tasks
    .filter(task => task.role === roleSelect.value)
    .sort((a, b) => a.startMin - b.startMin || a.endMin - b.endMin);
}

function statusForTask(task, elapsed, checked) {
  if (checked) return { label: "完了", className: "done" };
  if (elapsed >= task.startMin && elapsed <= task.endMin) return { label: "今やる", className: "now" };
  if (elapsed > task.endMin) return { label: "要確認", className: "overdue" };
  return { label: "予定", className: "" };
}

function renderTasks(elapsed) {
  const checks = getChecks();
  const roleTasks = getRoleTasks();
  const dueTasks = roleTasks.filter(task => elapsed !== null && elapsed >= task.startMin);
  const upcomingTasks = roleTasks.filter(task => elapsed === null || elapsed < task.startMin);

  taskCount.textContent = `${dueTasks.length}件`;

  if (elapsed === null) {
    elapsedText.textContent = "発生時刻を入力してください。";
    summaryText.textContent = "発生時刻を入力すると、今までにやるべきことが表示されます。";
  } else if (elapsed < 0) {
    elapsedText.textContent = "発生時刻が未来になっています。入力を確認してください。";
    summaryText.textContent = "未来の時刻は計算できません。";
  } else {
    elapsedText.textContent = `地震発生から ${formatElapsed(elapsed)} です。`;
    const unchecked = dueTasks.filter(task => !checks[task.id]).length;
    summaryText.textContent = `${roleSelect.value}向けに、現時点までの対象作業を表示しています。未完了は ${unchecked}件 です。`;
  }

  if (elapsed === null || elapsed < 0) {
    taskList.innerHTML = `<div class="empty">発生時刻を正しく入力してください。</div>`;
  } else if (dueTasks.length === 0) {
    taskList.innerHTML = `<div class="empty">まだ表示対象の作業はありません。</div>`;
  } else {
    taskList.innerHTML = dueTasks.map(task => {
      const checked = !!checks[task.id];
      const status = statusForTask(task, elapsed, checked);
      return `
        <article class="task-item ${checked ? "completed" : ""}">
          <div class="task-head">
            <input class="task-check" type="checkbox" data-task-id="${task.id}" ${checked ? "checked" : ""} aria-label="${task.title}を完了" />
            <div>
              <h3 class="task-title">${task.title}</h3>
              <div class="task-meta">
                <span class="pill ${status.className}">${status.label}</span>
                <span class="pill">目安：${formatRange(task.startMin, task.endMin)}</span>
              </div>
              <p class="task-detail">${task.detail}</p>
              ${task.note ? `<p class="task-note">注意：${task.note}</p>` : ""}
            </div>
          </div>
        </article>
      `;
    }).join("");

    document.querySelectorAll(".task-check").forEach(input => {
      input.addEventListener("change", event => {
        saveCheck(event.target.dataset.taskId, event.target.checked);
        renderAll();
      });
    });
  }

  if (upcomingTasks.length === 0) {
    upcomingList.innerHTML = `<div class="empty">この後に予定されている作業はありません。</div>`;
  } else {
    upcomingList.innerHTML = upcomingTasks.slice(0, 8).map(task => `
      <div class="upcoming-item">
        <strong>${formatRange(task.startMin, task.endMin)}</strong>　${task.title}
      </div>
    `).join("");
  }
}

function getTimelineChartStartPx() {
  const styles = getComputedStyle(document.documentElement);
  const labelWidth = parseFloat(styles.getPropertyValue("--timeline-label-width")) || 150;
  const gap = parseFloat(styles.getPropertyValue("--timeline-gap")) || 10;
  // timeline-row には左右 padding 10px があるため、メーターの開始位置に合わせて足します。
  return labelWidth + gap + 10;
}

function setTimelineNowPosition(elapsed, maxMinutes) {
  if (elapsed === null || elapsed < 0) {
    timelineNow.style.display = "none";
    return;
  }
  timelineNow.style.display = "block";
  const chartStartPx = getTimelineChartStartPx();
  const contentWidth = Math.max(
    timelineList.scrollWidth || 0,
    timelineScale.scrollWidth + chartStartPx || 0,
    timelineWrapper.clientWidth || 0
  );
  const chartWidth = Math.max(1, contentWidth - chartStartPx - 10);
  const progress = Math.min(Math.max(elapsed / maxMinutes, 0), 1);
  const nowLeftPx = chartStartPx + chartWidth * progress;
  timelineNow.style.left = `${nowLeftPx}px`;
}

function renderTimeline(elapsed) {
  const checks = getChecks();
  const roleTasks = getRoleTasks();
  const maxTaskEnd = roleTasks.reduce((max, task) => Math.max(max, task.endMin), 360);
  const rawMax = Math.max(maxTaskEnd, elapsed || 0, 360);
  const maxMinutes = Math.min(Math.max(rawMax, 360), 1440); // 6時間〜24時間を表示

  const marks = [0, 30, 60, 180, 360, 720, 1440].filter(m => m <= maxMinutes);
  timelineScale.innerHTML = marks.map(min => {
    const left = (min / maxMinutes) * 100;
    return `<span class="scale-mark" style="left:${left}%">${formatTimePoint(min)}</span>`;
  }).join("");

  if (roleTasks.length === 0) {
    timelineList.innerHTML = `<div class="empty">この立場の作業データがまだありません。</div>`;
    setTimelineNowPosition(elapsed, maxMinutes);
    return;
  }

  timelineList.innerHTML = roleTasks.map(task => {
    const left = Math.max(0, Math.min(task.startMin, maxMinutes)) / maxMinutes * 100;
    const end = Math.max(task.startMin + 5, Math.min(task.endMin, maxMinutes));
    const width = Math.max(2, ((end - task.startMin) / maxMinutes) * 100);
    const checked = !!checks[task.id];
    const status = elapsed === null ? { className: "" } : statusForTask(task, elapsed, checked);
    return `
      <div class="timeline-row">
        <div class="timeline-label">${task.title}</div>
        <div class="timeline-track" title="${formatRange(task.startMin, task.endMin)}">
          <div class="timeline-bar ${status.className || ""}" style="left:${left}%; width:${width}%;"></div>
        </div>
      </div>
    `;
  }).join("");

  setTimelineNowPosition(elapsed, maxMinutes);
}

function renderAll() {
  localStorage.setItem(`${STORAGE_PREFIX}:role`, roleSelect.value);
  localStorage.setItem(`${STORAGE_PREFIX}:quakeTime`, quakeTimeInput.value);
  const elapsed = getElapsedMinutes();
  renderTasks(elapsed);
  renderTimeline(elapsed);
}

function setMinutesAgo(minutes) {
  const date = new Date(Date.now() - minutes * 60000);
  quakeTimeInput.value = toDatetimeLocalValue(date);
  renderAll();
}

initRoleSelect();
initQuakeTime();
renderAll();

roleSelect.addEventListener("change", renderAll);
quakeTimeInput.addEventListener("change", renderAll);
window.addEventListener("resize", renderAll);

resetChecksButton.addEventListener("click", () => {
  if (confirm("この立場・発生時刻のチェック状態をリセットしますか？")) {
    localStorage.removeItem(checksKey());
    renderAll();
  }
});

document.querySelectorAll(".small-button[data-minutes-ago]").forEach(button => {
  button.addEventListener("click", () => {
    setMinutesAgo(Number(button.dataset.minutesAgo));
  });
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}
