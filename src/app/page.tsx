import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Services } from "@/app/_components/services";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <Services />
      </Container>
    </main>
  );
}
