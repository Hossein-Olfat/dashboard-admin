import { Initial_Parts } from "./Initial_Parts";
import { Part } from "./Part";
function Sidebar() {
  return (
    <aside className=" bg-[#F6F8F9] mr-4 rounded-t-lg px-4 py-3 flex-grow h-[calc(100vh-68px)] sticky top-[68px]">
      <section className=" h-full">
        {Initial_Parts.map((Eachpart) => {
          return (
            <Part
              key={Eachpart.id}
              title={Eachpart.title}
              Part_Childeren={Eachpart.childeren}
            />
          );
        })}
      </section>
    </aside>
  );
}
export { Sidebar };
