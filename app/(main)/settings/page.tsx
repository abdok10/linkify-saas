"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { settingSchema } from "@/lib/zodSchemas";
import { useFormState } from "react-dom";
import { SettingActions } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [lastResult, action] = useFormState(SettingActions, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: settingSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <div className="px-5 flex flex-col gap-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-zinc-400">update you profile informations</p>
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
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              key={fields.name.key}
              name={fields.name.name}
              defaultValue={"abdo"}
              placeholder="John Doe"
            />
            <p className="text-red-500 text-sm">{fields.name.errors}</p>
          </div>
          <div className="space-y-1 flex flex-col">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value="abdo@gmail.com" disabled />
          </div>
          {/* <div className="space-y-1">
            <Label htmlFor="password">password</Label>
            <Input
              id="password"
              key={fields.password.key}
              name={fields.password.name}
              defaultValue={fields.password.initialValue}
              placeholder="********"
            />

            <p className="text-red-500 text-sm">{fields.password.errors}</p>
          </div> */}

          <Button
            type="submit"
            className="w-full sm:w-28 dark:bg-zinc-700 dark:hover:bg-zinc-800 text-zinc-50 mt-4"
          >
            Save now
          </Button>
        </form>
      </Card>
    </div>
  );
}
