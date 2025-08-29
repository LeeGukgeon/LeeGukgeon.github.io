// components/DiceCube.tsx
"use client";

import Image from "next/image";
import React from "react";
import styles from "./DiceCube.module.css"; // 나중에 CSS 따로 분리
import { tan } from "mathjs";
import { translate } from "maath/dist/declarations/src/buffer";

interface DiceCubeProps {
  size?: number; // 주사위 이미지 크기, 기본 50
}

const DiceCube: React.FC<DiceCubeProps> = ({ size = 20 }) => {
  return (
    <div className={styles.cubeContainer}>
      <div className={styles.cube} style={{ width: size, height: size }}>
        <Image
          className={styles["cube-face"] + " " + styles["cube-front"]}
          src="/dice1.png"
          alt="주사위 눈금 1"
          width={size}
          height={size}
          style={{ transform: `translateZ(${size / 2}px)` }}
        />
        <Image
          className={styles["cube-face"] + " " + styles["cube-back"]}
          src="/dice2.png"
          alt="주사위 눈금 2"
          width={size}
          height={size}
          style={{ transform: `rotateY(180deg) translateZ(${size / 2}px)` }}
        />
        <Image
          className={styles["cube-face"] + " " + styles["cube-right"]}
          src="/dice3.png"
          alt="주사위 눈금 3"
          width={size}
          height={size}
          style={{ transform: `rotateY(90deg) translateZ(${size / 2}px)` }}
        />
        <Image
          className={styles["cube-face"] + " " + styles["cube-left"]}
          src="/dice4.png"
          alt="주사위 눈금 4"
          width={size}
          height={size}
          style={{ transform: `rotateY(-90deg) translateZ(${size / 2}px)` }}
        />
        <Image
          className={styles["cube-face"] + " " + styles["cube-top"]}
          src="/dice5.png"
          alt="주사위 눈금 5"
          width={size}
          height={size}
          style={{ transform: `rotateX(90deg) translateZ(${size / 2}px)` }}
        />
        <Image
          className={styles["cube-face"] + " " + styles["cube-bottom"]}
          src="/dice6.png"
          alt="주사위 눈금 6"
          width={size}
          height={size}
          style={{ transform: `rotateX(-90deg) translateZ(${size / 2}px)` }}
        />
      </div>
    </div>
  );
};

export default DiceCube;
