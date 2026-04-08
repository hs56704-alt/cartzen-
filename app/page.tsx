import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";


export default function Home() {
  return (
    <div>
      <Container className = "py-10">
        <HomeBanner />
      </Container>
    </div>
  );
}
