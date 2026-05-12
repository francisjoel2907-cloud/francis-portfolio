import { useEffect, useState } from "react"

import { TYPEWRITER_PHRASES } from "@/data/portfolio"

export default function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex]

    let timeout: ReturnType<typeof setTimeout>

    if (
      !deleting &&
      displayedText.length < currentPhrase.length
    ) {
      timeout = setTimeout(() => {
        setDisplayedText(
          currentPhrase.slice(0, displayedText.length + 1)
        )
      }, 70)
    }

    else if (
      !deleting &&
      displayedText.length === currentPhrase.length
    ) {
      timeout = setTimeout(() => {
        setDeleting(true)
      }, 1800)
    }

    else if (deleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, 40)
    }

    else if (deleting && displayedText.length === 0) {
      setDeleting(false)

      setPhraseIndex((prev) =>
        (prev + 1) % TYPEWRITER_PHRASES.length
      )
    }

    return () => clearTimeout(timeout)
  }, [displayedText, deleting, phraseIndex])

  return (
    <div className="flex items-center gap-1 min-h-[32px]">
      <span className="text-lg md:text-2xl text-[var(--brand)] font-semibold tracking-wide">
        {displayedText}
      </span>

      <span className="w-[2px] h-6 bg-[var(--brand)] animate-pulse rounded-full" />
    </div>
  )
}