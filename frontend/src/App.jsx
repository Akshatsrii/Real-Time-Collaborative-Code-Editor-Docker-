import "./App.css"
import { Editor } from "@monaco-editor/react"
import { MonacoBinding } from "y-monaco"
import { useEffect, useMemo, useRef, useState } from "react"
import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket"

const AVATAR_COLORS = [
  ["#c8f73a", "#0f1a00"],
  ["#7ee8ff", "#001a21"],
  ["#ff7eb6", "#200011"],
  ["#ffca6e", "#201000"],
  ["#b69eff", "#0d0020"],
  ["#6effd4", "#002018"],
]

const LANGUAGES = [
  { label: "JavaScript", value: "javascript", ext: "js" },
  { label: "TypeScript", value: "typescript", ext: "ts" },
  { label: "Python", value: "python", ext: "py" },
  { label: "Rust", value: "rust", ext: "rs" },
  { label: "CSS", value: "css", ext: "css" },
  { label: "JSON", value: "json", ext: "json" },
]

function getAvatarColor(name) {
  let h = 0
  for (let i = 0; i < name.length; i++) h += name.charCodeAt(i)
  return AVATAR_COLORS[h % AVATAR_COLORS.length]
}

function Initials({ name }) {
  const [bg, fg] = getAvatarColor(name)

  return (
    <span className="avatar" style={{ background: bg, color: fg }}>
      {name.slice(0, 2).toUpperCase()}
    </span>
  )
}

export default function App() {
  const [username, setUsername] = useState("")
  const [draft, setDraft] = useState("")
  const [users, setUsers] = useState([])
  const [language, setLanguage] = useState("javascript")
  const [joining, setJoining] = useState(false)

  const editorRef = useRef(null)

  const ydoc = useMemo(() => new Y.Doc(), [])
  const yText = useMemo(() => ydoc.getText("monaco"), [ydoc])

  const handleMount = (editor) => {
    editorRef.current = editor
  }

  const handleJoin = (e) => {
    e.preventDefault()

    const name = draft.trim()

    if (!name) return

    setJoining(true)

    setTimeout(() => {
      setUsername(name)
    }, 500)
  }

  useEffect(() => {
    if (!username || !editorRef.current) return

    const provider = new WebsocketProvider(
      "wss://real-time-collaborative-code-editor-pyms.onrender.com",
      "monaco-room",
      ydoc
    )

    const [color] = getAvatarColor(username)

    provider.awareness.setLocalStateField("user", {
      username,
      color,
    })

    provider.awareness.on("change", () => {
      const states = Array.from(provider.awareness.getStates().values())

      setUsers(
        states
          .map((s) => s.user)
          .filter(Boolean)
      )
    })

    const binding = new MonacoBinding(
      yText,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    )

    return () => {
      binding.destroy()
      provider.disconnect()
    }
  }, [username])

  const langMeta = LANGUAGES.find((l) => l.value === language)

  if (!username) {
    return (
      <div className="join-root">
        <div className="join-noise" />

        <div className={`join-card ${joining ? "joining" : ""}`}>
          <div className="join-eyebrow">
            <span className="join-dot" />
            real-time-collaborative-code-editor-pyms.onrender.com
          </div>

          <h1 className="join-heading">
            <span className="join-bracket">[</span>
            CodeSync
            <span className="join-bracket">]</span>
          </h1>

          <p className="join-sub">
            real-time collaborative editor
          </p>

          <form className="join-form" onSubmit={handleJoin}>
            <div className="join-field">
              <span className="join-prefix">$</span>

              <input
                className="join-input"
                type="text"
                placeholder="enter username"
                autoComplete="off"
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />

              <span className="join-cursor" />
            </div>

            <button
              className="join-btn"
              type="submit"
              disabled={joining}
            >
              {joining ? (
                <span className="join-spinner" />
              ) : (
                <>
                  connect <span className="join-arrow">—›</span>
                </>
              )}
            </button>
          </form>

          <div className="join-hint">
            <kbd>enter</kbd> to join · room: monaco-room
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-root">

      <header className="topbar">
        <div className="topbar-left">
          <span className="topbar-logo">[CS]</span>

          <span className="topbar-sep">/</span>

          <span className="topbar-room">
            monaco-room
          </span>

          <span className="topbar-sep">/</span>

          <span className="topbar-file">
            untitled.{langMeta?.ext ?? "txt"}
          </span>
        </div>

        <div className="topbar-right">
          <div className="online-pill">
            <span className="online-dot" />
            {users.length} online
          </div>

          <select
            className="lang-picker"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {LANGUAGES.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="app-body">

        <aside className="sidebar">
          <div className="sidebar-block">
            <p className="sidebar-label">
              collaborators
            </p>

            <ul className="user-list">
              {users.map((u, i) => (
                <li key={i} className="user-row">
                  <Initials name={u.username} />

                  <div className="user-meta">
                    <span className="user-name">
                      {u.username}

                      {u.username === username && (
                        <span className="you-badge">
                          you
                        </span>
                      )}
                    </span>

                    <span className="user-status">
                      <span className="online-dot sm" />
                      editing
                    </span>
                  </div>
                </li>
              ))}

              {users.length === 0 && (
                <li className="user-empty">
                  connecting…
                </li>
              )}
            </ul>
          </div>

          <div className="sidebar-block sidebar-footer">
            <p className="sidebar-label">session</p>

            <div className="session-rows">
              <div className="session-row">
                <span>room</span>

                <span className="session-val">
                  monaco-room
                </span>
              </div>

              <div className="session-row">
                <span>lang</span>

                <span className="session-val">
                  {langMeta?.label}
                </span>
              </div>

              <div className="session-row">
                <span>user</span>

                <span className="session-val">
                  {username}
                </span>
              </div>
            </div>
          </div>
        </aside>

        <section className="editor-wrap">
          <Editor
            height="100%"
            theme="vs-dark"
            language={language}
            defaultValue={`// ${username} connected · start coding\n`}
            onMount={handleMount}
            options={{
              fontSize: 14,
              fontFamily:
                "'JetBrains Mono', 'Fira Code', monospace",
              fontLigatures: true,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              padding: {
                top: 24,
                bottom: 24,
              },
              lineNumbers: "on",
              cursorBlinking: "smooth",
              smoothScrolling: true,
              renderLineHighlight: "gutter",
              bracketPairColorization: {
                enabled: true,
              },
            }}
          />
        </section>

      </div>
    </div>
  )
}