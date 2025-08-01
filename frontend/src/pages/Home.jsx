import api from "../lib/axios"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"
import NoteCard from "../components/NoteCard"
import { toast, Toaster } from "react-hot-toast"
import NotesNotFound from "../components/NotesNotFound"

const Home = () => {
  const [isRateLimited, setRateLimited] = useState(true)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes")
        setNotes(res.data)
        setRateLimited(false)
      } catch (error) {
        console.log("Error Fetching Notes", error)
        if (error.response?.status === 429) {
          setRateLimited(true)
        } else {
          toast.error("Failed to load notes")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNotes();
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <Toaster />
      {isRateLimited && <RateLimitedUI />}


      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
