// 메모 CRUD — localStorage 기반
// 차후 AI가 메모 기반으로 lesson-data 일괄 수정 시 anchor 정보로 사용됨.

const MEMO_PREFIX = 'suttalog-memo:'
const MEMO_INDEX = 'suttalog-memo-index'

export type StepSnapshot = {
  stepType: string
  word?: string
  pali?: string
  question?: string
  title?: string
  instruction?: string
}

export type Memo = {
  pageId: string         // {lessonId}:{stepIdx}
  lessonId: string
  stepIdx: number
  stepSnapshot: StepSnapshot
  body: string
  createdAt: string      // ISO
  updatedAt: string
}

export function pageIdOf(lessonId: string, stepIdx: number): string {
  return `${lessonId}:${stepIdx}`
}

function readIndex(): string[] {
  try {
    return JSON.parse(localStorage.getItem(MEMO_INDEX) || '[]')
  } catch {
    return []
  }
}

function writeIndex(ids: string[]): void {
  localStorage.setItem(MEMO_INDEX, JSON.stringify(ids))
}

function indexAdd(pageId: string): void {
  const ids = readIndex()
  if (!ids.includes(pageId)) {
    ids.push(pageId)
    writeIndex(ids)
  }
}

function indexRemove(pageId: string): void {
  const ids = readIndex().filter(id => id !== pageId)
  writeIndex(ids)
}

export function getMemo(pageId: string): Memo | null {
  const raw = localStorage.getItem(MEMO_PREFIX + pageId)
  if (!raw) return null
  try {
    return JSON.parse(raw) as Memo
  } catch {
    return null
  }
}

export function hasMemo(pageId: string): boolean {
  return readIndex().includes(pageId)
}

export function saveMemo(
  lessonId: string,
  stepIdx: number,
  body: string,
  snapshot: StepSnapshot,
): Memo {
  const pageId = pageIdOf(lessonId, stepIdx)
  const existing = getMemo(pageId)
  const now = new Date().toISOString()
  const memo: Memo = {
    pageId,
    lessonId,
    stepIdx,
    stepSnapshot: snapshot,
    body,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  }
  localStorage.setItem(MEMO_PREFIX + pageId, JSON.stringify(memo))
  indexAdd(pageId)
  return memo
}

export function deleteMemo(pageId: string): void {
  localStorage.removeItem(MEMO_PREFIX + pageId)
  indexRemove(pageId)
}

export function listMemos(): Memo[] {
  const ids = readIndex()
  const memos: Memo[] = []
  for (const id of ids) {
    const m = getMemo(id)
    if (m) memos.push(m)
  }
  return memos.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

export function countMemos(): number {
  return readIndex().length
}

// AI 일괄 수정용 — page_id, lessonId, stepIdx, snapshot, body 를 그대로 export
export function exportMemosJson(): string {
  const memos = listMemos()
  const payload = {
    exportedAt: new Date().toISOString(),
    app: 'SuttaLog',
    count: memos.length,
    memos,
  }
  return JSON.stringify(payload, null, 2)
}

export function downloadMemosJson(): void {
  const json = exportMemosJson()
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `suttalog-memos-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}
