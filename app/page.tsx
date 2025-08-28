import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <header></header>
        <div className="cube-container">
          <div className="cube">
            <Image className="cube-face cube-front" src="/dice1.png" alt="주사위눈금1_이미지" width={120} height={120} />
            <Image className="cube-face cube-back" src="/dice2.png" alt="주사위눈금2_이미지" width={120} height={120} />
            <Image className="cube-face cube-right" src="/dice3.png" alt="주사위눈금3_이미지" width={120} height={120} />
            <Image className="cube-face cube-left" src="/dice4.png" alt="주사위눈금4_이미지" width={120} height={120} />
            <Image className="cube-face cube-top" src="/dice5.png" alt="주사위눈금5_이미지" width={120} height={120} />
            <Image className="cube-face cube-bottom" src="/dice6.png" alt="주사위눈금6_이미지" width={120} height={120} />
          </div>
        </div>
      </div>
    </>
  );
}
