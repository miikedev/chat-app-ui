import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";

interface StickerPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSticker: (sticker: string) => void;
}

const stickers = [
  "😀",
  "😂",
  "🥰",
  "😍",
  "🤗",
  "😉",
  "😎",
  "🤔",
  "😴",
  "😭",
  "😤",
  "🤤",
  "🤗",
  "🤫",
  "🤭",
  "🥳",
  "😇",
  "🤪",
  "😜",
  "😝",
  "🤨",
  "😐",
  "😑",
  "😶",
  "🙄",
  "😏",
  "😪",
  "😮",
  "🤐",
  "😵",
  "🤯",
  "🤠",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤗",
  "🤔",
  "🤭",
  "🤫",
  "🤥",
  "😶‍🌫️",
  "🫠",
  "🤑",
  "🤕",
  "❤️",
  "💛",
  "💚",
  "💙",
  "💜",
  "🖤",
  "🤍",
  "🤎",
  "💔",
  "❤️‍🔥",
  "❤️‍🩹",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "💟",
  "☮️",
  "✝️",
  "☪️",
  "🕉️",
  "☸️",
  "✡️",
  "🔯",
  "🕎",
  "☯️",
  "☦️",
  "🛐",
  "⛎",
  "♈️",
  "♉️",
  "♊️",
  "♋️",
  "♌️",
  "♍️",
  "♎️",
  "♏️",
  "♐️",
  "♑️",
  "♒️",
  "♓️",
  "🆔",
  "⚛️",
  "🉑",
  "☢️",
  "☣️",
  "📴",
  "📳",
  "🈶",
  "🈚️",
  "🈸",
  "🈺",
  "🈷️",
  "✴️",
  "🆚",
  "💮",
  "🉐",
  "㊙️",
  "㊗️",
  "🈴",
  "🈵",
  "🈹",
  "🈲",
  "🅰️",
  "🅱️",
  "🆎",
  "🆑",
  "🅾️",
  "🆘",
  "❌",
  "⭕",
  "🛑",
  "⛔",
  "📛",
  "🚫",
  "✅",
  "❎",
  "💯",
  "🔟",
  "🔢",
  "🔤",
  "🔡",
  "🔠",
  "🆖",
  "🆗",
  "🆙",
  "🆒",
  "🆕",
  "🆓",
  "0️⃣",
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟",
  "🔢",
  "🔤",
  "🔡",
  "🔠",
  "🆖",
  "🆗",
  "🆙",
  "🆒",
  "🆕",
  "🆓",
];

export const StickerPicker: React.FC<StickerPickerProps> = ({
  isOpen,
  onClose,
  onSelectSticker,
}) => {
  const handleStickerClick = (sticker: string) => {
    onSelectSticker(sticker);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-black/20"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sticker Picker */}
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute bottom-16 right-4 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80 max-w-[calc(100vw-2rem)] overflow-hidden"
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="grid grid-cols-8 gap-1 max-h-64 overflow-y-auto overflow-x-hidden">
              {stickers.map((sticker, index) => (
                <Button
                  key={index}
                  isIconOnly
                  className="w-8 h-8 min-w-8 text-lg hover:bg-gray-100 transition-colors"
                  size="sm"
                  variant="light"
                  onPress={() => handleStickerClick(sticker)}
                >
                  {sticker}
                </Button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
