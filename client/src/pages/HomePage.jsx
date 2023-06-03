import NotesList from "../components/NotesList";
import Card from "../components/UI/Card";
import Form from "../components/form/Form";
const HomePage = () => {

  return (
    <div className=" flex flex-col items-center gap-6 font-sans p-4">
      <Card className="w-[100%] md:w-[80%] lg:w-[70%] border-2 border-white">
        <Form />
      </Card>
      <div className=" text-center text-5xl  text-white font-bold">
        Previous notes
      </div>
      <NotesList/>
    </div>
  );
};

export default HomePage;
