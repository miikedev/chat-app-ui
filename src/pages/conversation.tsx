import { AttachIcon, SendIcon, StickerIcon } from '@/components/icons'
import { Avatar } from '@heroui/avatar'
import { Badge } from '@heroui/badge'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { useEffect, useRef, useState } from 'react'

const Conversation = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey Kyii 👋 How’s it going?", sender: "me" },
    { id: 2, text: "Hi! I’m doing great 😄. How about you?", sender: "friend" },
    { id: 3, text: "Pretty good! Working on a new chat UI layout.", sender: "me" },
    { id: 4, text: "That sounds awesome! 🚀", sender: "friend" },
  ])

  // 👇 Ref to the container that scrolls
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 👇 Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!text.trim()) return
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'me',
    }
    setMessages([...messages, newMessage])
    setText('')
  }

  return (
    <div className="flex flex-col justify-between h-full rounded-lg py-3 sm:p-4 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 pb-2">
        <Badge color="success" content="" placement="bottom-right" shape="circle">
          <Avatar name="Junior" className="w-10 h-10 sm:w-12 sm:h-12" />
        </Badge>
        <div>
          <h1 className="text-sm sm:text-base md:text-lg font-semibold truncate">
            Kyii
          </h1>
          <small className="text-gray-500 text-xs sm:text-sm">
            11 minutes ago
          </small>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto my-3 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === 'me' ? 'self-end items-end' : 'self-start items-start'
            }`}
          >
            <div
              className={`px-3 py-2 rounded-2xl max-w-xs sm:max-w-sm break-words ${
                msg.sender === 'me'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* 👇 Invisible element to scroll into view */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="flex items-center gap-2 pt-2">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write..."
          className="flex-1"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          isIconOnly
          aria-label="Add sticker"
          color="default"
          variant="faded"
          className="border-none"
        >
          <StickerIcon />
        </Button>
        <Button
          isIconOnly
          aria-label="Attach file"
          color="default"
          variant="faded"
          className="border-none"
        >
          <AttachIcon />
        </Button>
        {text.trim().length > 0 && (
          <Button
            isIconOnly
            aria-label="Send message"
            color="primary"
            variant="solid"
            className="border-none"
            onClick={handleSend}
          >
            <SendIcon />
          </Button>
        )}
      </div>
    </div>
  )
}

export default Conversation