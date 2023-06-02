import JoditEditor from "jodit-react";
const editorConfig = {
  buttons: [
    "bold", // Add the "bold" button to the toolbar
    "italic",
    "underline",
    "strikethrough",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "paragraph",
    "undo",
    "redo",
    "|",
    "selectall",
  ],
};
const TextEditor = (props) => {
  return (
    <JoditEditor
      className="bg-gray-200  text-black text-lg font-medium px-4 py-2 rounded-lg"
      config={editorConfig}
      value={props.desc}
      onChange={props.descChangeHandler}
    />
  );
};

export default TextEditor;
