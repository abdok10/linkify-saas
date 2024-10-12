"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-fit dark:bg-zinc-700 dark:hover:bg-zinc-800 text-zinc-50 mt-4"
    >
      {pending ? (
        <span className="flex gap-2">
          <Loader2 className="animate-spin" />
          Creating...
        </span>
      ) : (
        "Create"
      )}
    </Button>
  );
};

export default SubmitBtn;
