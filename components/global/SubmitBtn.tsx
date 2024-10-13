"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface SubmitBtnProps {
  text: string;
  loadingText?: string;
}

const SubmitBtn = ({ loadingText, text }: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-fit capitalize dark:bg-zinc-600 dark:hover:bg-zinc-700 text-zinc-50 font-semibold"
    >
      {pending ? (
        <span className="flex gap-2">
          <Loader2 className="animate-spin" />
          {loadingText ? loadingText + "..." : ""}
        </span>
      ) : (
        <>{text}</>
      )}
    </Button>
  );
};

export default SubmitBtn;
