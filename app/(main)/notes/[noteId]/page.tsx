"use client";

import { useSearchParams } from "next/navigation";

const NoteDetailsPage = () => {
  const params = useSearchParams();
  console.log(params);
  return <div>NoteDetailsPage</div>;
};
export default NoteDetailsPage;
