// Copyright © Spatial Corporation. All rights reserved.

import { Container, Page, Registrar, Tag, Text, View } from "@dakarai/components";

/**
 * Create a new university page component.
 * @returns A university page component.
 */
export default function University() {
  return (
    <Page>
      <View direction="column" innerClassName="py-32 md:py-64 h-full relative !gap-8 md:!gap-0" justify="center">
        <Tag className="text-xs md:text-sm self-center md:self-auto">
          Spring 2026<span className="mx-2">·</span>Enrollment now open
        </Tag>
        <Text>
          <span className="-ml-1 md:-ml-3 text-5xl md:text-display font-graduate font-bold uppercase whitespace-nowrap">
            <span className="tracking-wider">
              <b>University</b>
            </span>
          </span>
          <br />
          <span className="text-2xl md:text-4xl uppercase">By Dakarai</span>
        </Text>
      </View>
      <View className="items-center! md:items-start!" direction="column" justify="center" gap={64}>
        <Tag className="self-center! md:self-start!">Vision</Tag>
        <Text className="text-2xl md:text-6xl">
          A system of education is not one thing, nor does it have a single definite object, nor is it a mere matter of schools. Education is that
          whole system of human training within and without the school house walls, which molds and develops men.
        </Text>
        <Text>Excerpt from “The Talented Tenth” by W.E.B. DuBois</Text>
      </View>
      <View className="py-32" direction="column" gap={32}>
        <Container className="w-full text-center" direction="column" align="center" gap={32}>
          <Text className="text-3xl font-extrabold">Open Programs</Text>
          <Text className="text-foreground-secondary">All programs include hands-on, real-world projects.</Text>
        </Container>
        <Registrar />
      </View>
    </Page>
  );
}
