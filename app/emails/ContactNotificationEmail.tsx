"use client";

import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
}

export const ContactNotificationEmail: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  company,
  phone,
  service,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Nowe zapytanie ze strony JG Marine od {name}</Preview>
    <Body style={{ backgroundColor: "#f6f9fc" }}>
      <Container
        style={{
          padding: "20px",
          backgroundColor: "#ffffff",
          border: "1px solid #f0f0f0",
        }}
      >
        <Heading>Otrzymano nowe zapytanie kontaktowe</Heading>
        <Text>Szczegóły zgłoszenia poniżej:</Text>
        <Hr />
        <Section>
          <Text>
            <strong>Imię i Nazwisko:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          {company && (
            <Text>
              <strong>Firma:</strong> {company}
            </Text>
          )}
          {phone && (
            <Text>
              <strong>Telefon:</strong> {phone}
            </Text>
          )}
          <Text>
            <strong>Rodzaj usługi:</strong> {service}
          </Text>
          <Text>
            <strong>Wiadomość:</strong>
          </Text>
          <Text>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
