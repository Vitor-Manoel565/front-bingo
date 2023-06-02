import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import { colors } from "@/theme/colors";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex
      color={"white"}
      bg={colors.primary}
      h={"100vh"}
      w={"100vw"}
      align={"center"}
      justify={"center"}
    >
      <main className={`${styles.main} ${inter.className}`}></main>
    </Flex>
  );
}
