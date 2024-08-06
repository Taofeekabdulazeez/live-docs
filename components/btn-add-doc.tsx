import { Button } from "./ui/button";

export default function ButtonAddDocument({
  userId,
  email,
}: AddDocumentBtnProps) {
  return (
    <Button type="submit">
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
}
