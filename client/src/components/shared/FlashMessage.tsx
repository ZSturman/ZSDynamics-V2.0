import { useEffect } from 'react';

interface FlashMessageProps {
  flashMessage?: {
    message?: string;
    type?: string;
    active?: boolean;
  };
  clearFlashMessage: () => void;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ flashMessage, clearFlashMessage }) => {
  useEffect(() => {
    if (flashMessage?.message) {
      const timer = setTimeout(() => {
        clearFlashMessage();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [flashMessage, clearFlashMessage]);

  return (
    <div
      className={`flash-message ${flashMessage?.type} ${flashMessage?.active ? "" : "hidden"} ${
        flashMessage?.type
      }`}
    >
      <p>{flashMessage?.message}</p>
      <p>{flashMessage?.type}</p>
    </div>
  );
};

export default FlashMessage;
