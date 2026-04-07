import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";


export default function Home() {
  return (
    <div>
      <Container>
      <h1>Cartzen</h1>
      <Button variant="outline" className="m-4">
        Click Me
      </Button>
      </Container>
    </div>
  );
}
