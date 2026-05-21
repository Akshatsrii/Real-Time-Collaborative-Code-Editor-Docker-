import "./App.css"
import { Editor } from "@monaco-editor/react"
import { MonacoBinding } from "y-monaco"
import { useEffect, useMemo, useRef, useState } from "react"
import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket"

function App() {

  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])

  const editorRef = useRef(null)

  const ydoc = useMemo(() => new Y.Doc(), [])

  const yText = useMemo(() => {
    return ydoc.getText("monaco")
  }, [ydoc])

  const handleMount = (editor) => {
    editorRef.current = editor
  }

  const handleJoin = (e) => {
    e.preventDefault()

    const name = e.target.username.value

    setUsername(name)
  }

  useEffect(() => {

    if (!username || !editorRef.current) return

    const provider = new WebsocketProvider(
      "ws://localhost:1234",
      "monaco-room",
      ydoc
    )

    provider.awareness.setLocalStateField("user", {
      username
    })

    provider.awareness.on("change", () => {

      const states = Array.from(
        provider.awareness.getStates().values()
      )

      const allUsers = states
        .map((state) => state.user)
        .filter(Boolean)

      setUsers(allUsers)
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

  if (!username) {

    return (
      <main className="h-screen w-full bg-gray-950 flex items-center justify-center">

        <form
          onSubmit={handleJoin}
          className="bg-neutral-900 p-6 rounded-lg flex flex-col gap-4 w-[350px]"
        >

          <h1 className="text-white text-3xl font-bold text-center">
            Join Room
          </h1>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="p-3 rounded-lg bg-neutral-800 text-white outline-none"
          />

          <button
            className="p-3 rounded-lg bg-amber-50 text-black font-bold"
          >
            Join
          </button>

        </form>

      </main>
    )
  }

  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-4">

      <aside className="w-[220px] h-full bg-white rounded-lg p-4">

        <h1 className="text-3xl font-bold">
          Users
        </h1>

        <div className="mt-5 flex flex-col gap-3">

          {
            users.map((user, index) => (
              <div
                key={index}
                className="bg-slate-900 text-white p-3 rounded-lg"
              >
                {user.username}
              </div>
            ))
          }

        </div>

      </aside>

      <section className="flex-1 rounded-lg overflow-hidden">

        <Editor
          height="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// Start Coding..."
          onMount={handleMount}
        />

      </section>

    </main>
  )
}

export default App