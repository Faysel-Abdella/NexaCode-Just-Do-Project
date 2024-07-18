import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  FontFamily,
  Image,
  ImageUpload,
  List,
  Underline,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

const Editor = ({ initialData = "" }: { initialData?: string }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "bold",
            "italic",
            "underline",
            "fontFamily",
            "|",
            "mention",
            "|",
            "imageUpload",
            "|",
            "bulletedList",
            "numberedList",
          ],
        },
        plugins: [
          Essentials,
          Bold,
          Italic,
          Mention,
          Paragraph,
          Undo,
          Underline,
          FontFamily,
          Image,
          ImageUpload,
          List,
        ],
        licenseKey: "",

        initialData: initialData,
      }}
    />
  );
};

export default Editor;
