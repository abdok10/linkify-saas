import { deleteNote, getNote } from "@/actions/notes";
import SubmitBtn from "@/components/global/SubmitBtn";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { EditIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

interface NoteDetailsProps {
  params: { noteId: string };
}

const NoteDetailsPage = async ({ params }: NoteDetailsProps) => {
  const note = await getNote(params.noteId);

  console.log(note);
  return (
    <div className="px-5 flex flex-col gap-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Note Details</h1>
        <p className="text-zinc-400">View, update or delete your note</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{note?.title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-zinc-100">{note?.content}</p>
        </CardContent>

        <CardFooter className="flex justify-between items-center mt-5">
          <CardDescription>
            {format(note!.createdAt, "EEEE,dd MMMM yyyy - hh:mm:ss aa")}
          </CardDescription>
          <div className="space-x-2">
            <Button variant="secondary">
              <Link href={`/notes/edit/${note!.id}`}>
                <EditIcon />
              </Link>
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <TrashIcon />
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your note.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <form
                    action={async () => {
                      "use server";
                      await deleteNote(note!.id);
                    }}
                  >
                    <SubmitBtn text="continue" loadingText="deleting" />
                  </form>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default NoteDetailsPage;
