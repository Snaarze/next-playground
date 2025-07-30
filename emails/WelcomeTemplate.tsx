import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Tailwind,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        {/* we can use tailwind classes instead of style object */}
        <Body style={body} className="bg-white">
          <Container>
            <Text className="font-bold text-6xl">Hello World! </Text>
            <Link href="/">Home</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// css object properties
const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
