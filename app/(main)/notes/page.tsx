import { getAllNotes } from "@/actions/notes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { File } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

const NotesPage = async () => {
  const notes = await getAllNotes();

  return (
    <section className="px-5 space-y-10">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Notes</h1>
          <p className="text-zinc-400">Here you can see and create new notes</p>
        </div>
        <Link href="/notes/new">
          <Button className="">Create a new note</Button>
        </Link>
      </div>

      {notes.length > 0 ? (
        <div className="grid grid-cols-12 gap-4 ">
          {notes.map((note) => (
            <Card
              key={note.id}
              className="col-span-12 md lg:col-span-6 xl:col-span-4 2xl:col-span-3 h-[300px] flex flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <CardTitle>{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {note.content.slice(0, 200)}
                    {note.content.length > 200 ? "..." : ""}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="flex justify-between items-center">
                <CardDescription>
                  {format(note.createdAt, "EEE,dd MMM yyyy")}
                </CardDescription>
                <Link href={`/notes/${note.id}`}>
                  <Button variant="secondary">Read more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="w-full min-h-[400px] flex flex-col justify-center items-center rounded-md p-8 text-center animate-in fade-in-50">
          <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center">
            <File className="size-10 text-primary" />
          </div>

          <CardTitle className="my-2">
            You don{"'"}t have any notes created
          </CardTitle>
          <CardDescription className="mb-8 mt-2 max-w-sm mx-auto">
            You currently don{"'"}t have any notes, please create some so that
            you can see them right here.
          </CardDescription>

          <Button
            className="bg-zinc-700 hover:bg-zinc-800 font-semibold text-zinc-50"
            asChild
          >
            <Link href="/notes/new">Create a new Note</Link>
          </Button>
        </Card>
      )}
    </section>
  );
};
export default NotesPage;
