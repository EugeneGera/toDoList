import { Header } from "@/common/Header";
import { SwitchTheme } from "@/common/SwitchTheme";
import { TaskList } from "@/common/TaskList";

export default function Home() {
  return (
    <div className="grid mx-20 my-10 gap-y-10">
    <Header />
    <TaskList />
    <SwitchTheme/>
  </div>
  );
}
