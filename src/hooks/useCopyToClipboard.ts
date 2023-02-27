/* eslint-disable no-unused-vars */
import { useState } from 'react';

type CopiedValue = string | null;
type CopyFunction = (text: string) => Promise<boolean>;
type ResetFunction = () => void;

function useCopyToClipboard(): [CopiedValue, CopyFunction, ResetFunction] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFunction = async (text: string) => {
    if (!navigator?.clipboard) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  const resetCopy = () => {
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  return [copiedText, copy, resetCopy];
}

export default useCopyToClipboard;
