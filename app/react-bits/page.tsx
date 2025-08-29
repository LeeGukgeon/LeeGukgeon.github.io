"use client";
import { useState, useRef } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SplitText from "@/components/TextAnimations/SplitText/SplitText";
import CircularText from "@/components/TextAnimations/CircularText/CircularText";
import TextType from "@/components/TextAnimations/TextType/TextType";
import TextPressure from "@/components/TextAnimations/TextPressure/TextPressure";
import FuzzyText from "@/components/TextAnimations/FuzzyText/FuzzyText";
import FallingText from "@/components/TextAnimations/FallingText/FallingText";
import DecryptedText from "@/components/TextAnimations/DecryptedText/DecryptedText";
import ASCIIText from "@/components/TextAnimations/ASCIIText/ASCIIText";
import VariableProximity from "@/components/TextAnimations/VariableProximity/VariableProximity";
import CountUp from "@/components/TextAnimations/CountUp/CountUp";

export default function Home() {
  const [showAscii, setShowAscii] = useState(false);
  const containerRef = useRef(null);
  console.log(containerRef);
  return (
    <></>
    // <div className="max-w-[1000px] mx-auto">
    //   <h1 className="text-center text-2xl font-bold p-10">React-Bits</h1>
    //   <div className="flex flex-wrap justify-center gap-4">
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Split Text</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <SplitText
    //           text="Hello, Visitor!"
    //           className="text-2xl font-semibold text-center"
    //           delay={100}
    //           duration={2}
    //           ease="elastic.out(1,0.3)"
    //           splitType="chars"
    //           from={{ opacity: 0, y: 40 }}
    //           to={{ opacity: 1, y: 0 }}
    //           threshold={0.1}
    //           rootMargin="-100px"
    //           textAlign="center"
    //         />
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Circular Text</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <CircularText
    //           text="SPINNING*AROUND*COMPONENTS*"
    //           onHover="speedUp"
    //           spinDuration={20}
    //         />
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Type Text</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <TextType
    //           text={[
    //             "Text typing effect",
    //             "for your websites",
    //             "Happy coding!",
    //           ]}
    //           typingSpeed={75}
    //           pauseDuration={1500}
    //           showCursor={true}
    //           cursorCharacter="|"
    //         />
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Text Pressure</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <div style={{ position: "relative", height: "300px" }}>
    //           <TextPressure
    //             text="akaza so sad!"
    //             flex={true}
    //             alpha={false}
    //             stroke={false}
    //             width={true}
    //             weight={true}
    //             italic={true}
    //             textColor="#000000ff"
    //             strokeColor="#ff0000"
    //             minFontSize={36}
    //           />
    //         </div>
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Fuzzy Text</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <FuzzyText
    //           baseIntensity={0.2}
    //           hoverIntensity={0.5}
    //           enableHover={true}
    //           color="#000000ff"
    //           fontSize={36}
    //         >
    //           Electric
    //         </FuzzyText>
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Falling Text</CardTitle>
    //       </CardHeader>
    //       <CardContent className="h-[300px]">
    //         <FallingText
    //           text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
    //           highlightWords={[
    //             "React",
    //             "Bits",
    //             "animated",
    //             "components",
    //             "simplify",
    //           ]}
    //           trigger="hover"
    //           backgroundColor="transparent"
    //           wireframes={false}
    //           gravity={0.56}
    //           fontSize="1rem"
    //           mouseConstraintStiffness={0.9}
    //         />
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Decrypted Text</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <DecryptedText
    //           text="This text animates when in view"
    //           animateOn="view"
    //           revealDirection="start"
    //           speed={60}
    //           sequential={true}
    //         />
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle
    //           onClick={() => setShowAscii((prev) => !prev)}
    //           className="cursor-pointer select-none"
    //         >
    //           Ascii Text
    //         </CardTitle>
    //       </CardHeader>
    //       {showAscii && (
    //         <ASCIIText
    //           text="apocalypse"
    //           enableWaves={false}
    //           asciiFontSize={5}
    //           textFontSize={20}
    //           planeBaseHeight={10}
    //         />
    //       )}
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Variable Proximity</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <div
    //           ref={containerRef}
    //           style={{ position: "relative", height: "150px" }}
    //         >
    //           <VariableProximity
    //             label={
    //               "Hover me! And then star React Bits on GitHub, or else..."
    //             }
    //             className={"variable-proximity-demo"}
    //             fromFontVariationSettings="'wght' 400, 'opsz' 9"
    //             toFontVariationSettings="'wght' 1000, 'opsz' 40"
    //             containerRef={containerRef}
    //             radius={50}
    //             falloff="gaussian"
    //           />
    //         </div>
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Count Up</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <CountUp
    //           from={0}
    //           to={100}
    //           separator=","
    //           direction="up"
    //           duration={1}
    //           className="count-up-text text-xl font-bold"
    //         />
    //       </CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Card Title</CardTitle>
    //       </CardHeader>
    //       <CardContent></CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Card Title</CardTitle>
    //       </CardHeader>
    //       <CardContent></CardContent>
    //     </Card>
    //     <Card className="w-64 h-80">
    //       <CardHeader>
    //         <CardTitle>Card Title</CardTitle>
    //       </CardHeader>
    //       <CardContent></CardContent>
    //     </Card>
    //   </div>
    // </div>
  );
}
