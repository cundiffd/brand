// Copyright © Spatial Corporation. All rights reserved.

import { Container, Link, Page, Text, View } from "@dakarai/components";

/**
 * Create a new welcome page component.
 * @returns A welcome page component.
 */
export default function Welcome() {
  return (
    <Page>
      <View className="py-16 md:py-64" direction="column" align="center" justify="center" gap={32} grow>
        <Container direction="column" gap={16}>
          <Text className="text-3xl md:text-5xl font-extrabold">You&apos;re locked in 🔒</Text>
          <Text className="text-xl md:max-w-lg">You enrolled in University, and should have received a receipt in your email.</Text>
          <Text className="text-xl md:max-w-lg">
            If you have any questions leading up to Day One, don&apos;t hesitate to{" "}
            <Link href="mailto:karai@sptlco.com" target="_blank">
              <b>reach out</b>
            </Link>
            . Otherwise, I&apos;ll see you soon, Friend.
          </Text>
        </Container>
      </View>
    </Page>
  );
}
