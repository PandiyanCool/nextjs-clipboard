"use client"

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const textToCopy = `You need to copy this text`;
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>{textToCopy}</div>
        <button onClick={copyToClipboard}>
          {isCopied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </main>
  );
}
