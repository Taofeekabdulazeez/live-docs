import { Editor } from "@/components/editor/Editor";
import Header from "@/components/header";

export default function Document() {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">This is fake document title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
}
