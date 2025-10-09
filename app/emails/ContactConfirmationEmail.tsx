"use client";

import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface EmailProps {
  name: string;
}

export const ContactConfirmationEmail: React.FC<Readonly<EmailProps>> = ({
  name,
}) => (
  <Html>
    <Head />
    <Preview>Potwierdzenie otrzymania zapytania - JG Marine</Preview>
    <Body style={{ backgroundColor: "#f6f9fc" }}>
      <Container
        style={{
          padding: "20px",
          backgroundColor: "#ffffff",
          border: "1px solid #f0f0f0",
        }}
      >
        <Heading>Dziękujemy za kontakt, {name}!</Heading>
        <Text>
          Otrzymaliśmy Twoje zapytanie i skontaktujemy się z Tobą najszybciej
          jak to możliwe. Nasz standardowy czas odpowiedzi na zapytania w
          godzinach pracy to mniej niż 2 godziny.
        </Text>
        <Text>
          Jeśli Twoja sprawa jest pilna i wymaga natychmiastowej interwencji,
          prosimy o kontakt telefoniczny pod numerem alarmowym 24/7: +48 123 456
          789.
        </Text>
        <Hr />
        <Text>
          Z pozdrowieniami,
          <br />
          Zespół JG Marine
        </Text>
      </Container>
    </Body>
  </Html>
);
