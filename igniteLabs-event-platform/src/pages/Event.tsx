import { Header } from "../componentes/Header";
import { SideBar } from "../componentes/SideBar";
import { Video } from "../componentes/video";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className= "flex flex-1">
        <Video />
        <SideBar />
      </main>
    </div>
  )
}