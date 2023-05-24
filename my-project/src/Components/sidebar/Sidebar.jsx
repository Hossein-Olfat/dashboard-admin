import { Initial_Parts } from "./Initial_Parts";
import { Part } from "./Part";
function Sidebar() {
  return (
    <aside className=" bg-[#F6F8F9] mr-4 sticky h-[calc(100vh-68px)] rounded-t-lg px-4 py-5 flex-grow">
      <section className=" h-full">
        {Initial_Parts.map((Eachpart) => {
          return (
            <Part
              key={Eachpart.title}
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
