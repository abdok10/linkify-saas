"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { noteSchema } from "@/lib/zodSchemas";
import { useFormState } from "react-dom";
import { CreateNoteAction } from "@/actions/notes";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import SubmitBtn from "@/components/global/SubmitBtn";

export default function CreateNotePage() {
  const [lastResult, action] = useFormState(CreateNoteAction, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: noteSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <div className="px-5 flex flex-col gap-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Notes</h1>
        <p className="text-zinc-400">Create your note</p>
      </div>
      <Card className="flex-grow w-full px-8 py-8 ">
        <form
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
          className="flex flex-col gap-y-4"
          noValidate
        >
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              key={fields.title.key}
              name={fields.title.name}
              defaultValue={fields.title.initialValue}
            />
            <p className="text-red-500 text-sm">{fields.title.errors}</p>
          </div>
          <div className="space-y-2 flex flex-col">
            <Label htmlFor="content">Description</Label>
            <Textarea
              id="content"
              rows={6}
              key={fields.content.key}
              name={fields.content.name}
              defaultValue={fields.content.initialValue}
            ></Textarea>
            <p className="text-red-500 text-sm">{fields.content.errors}</p>
          </div>

          <SubmitBtn text="create" loadingText="creating" />
        </form>
      </Card>
    </div>
  );
}
