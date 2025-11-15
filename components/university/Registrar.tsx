// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { join } from "path";
import { FC, useState } from "react";
import useSWR from "swr";

import { Button } from "../button";
import { Container } from "../container";
import { Dialog } from "../dialog";
import { Hidden } from "../hidden";
import { Icon } from "../icon";
import { Spinner } from "../spinner";
import { Text } from "../text";
import { View } from "../view";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Program = {
  id: string;
  code: string;
  name: string;
  start: string;
  end: string;
  description: string;
  instructor: string;
  location: string;
  capacity: string;
  deadline: string;
  price: number;
  price_id: string;
  currency: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

/**
 * Create a new registrar component.
 * @returns A registrar component.
 */
export const Registrar: FC = () => {
  const { data: programs, error, isLoading } = useSWR<Program[]>(join(baseUrl, "/api/university/programs/list"), fetcher);
  const [enrolling, setEnrolling] = useState(false);

  const toPeriod = (start, end) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "2-digit" };

    const startDate = new Date(start);
    const endDate = new Date(end);

    let dateRange: string;

    if (startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth()) {
      dateRange = `${startDate.getDate()} - ${endDate.getDate()} ${startDate.toLocaleDateString(undefined, options)}`;
    } else {
      dateRange = `${startDate.toLocaleDateString(undefined, options)} - ${endDate.toLocaleDateString(undefined, options)}`;
    }

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));

    return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} • ${dateRange}`;
  };

  const enroll = async (program: Program) => {
    setEnrolling(true);

    const origin = window.location.origin;

    const res = await fetch(join(baseUrl, "/api/university/programs/enroll"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: program.price_id,
        success_url: `${origin}${baseUrl}/university/welcome`,
        cancel_url: `${origin}${baseUrl}/university`
      })
    });

    setEnrolling(false);

    const data = await res.json();

    if (data.url) {
      window.open(data.url, "_blank", "noopener,noreferrer");
    }
  };

  const render = () => {
    if (isLoading) {
      return <Spinner className="size-5" />;
    }

    if (!programs?.length) {
      return <Text>There are currently no programs available.</Text>;
    }

    return programs.map((program, i) => (
      <Container key={i} className="w-full py-12" gap={32} align="center">
        <Container className="flex-col! md:flex-row! md:gap-4! whitespace-nowrap" grow>
          <Text className="font-bold">{program.code}</Text>
          <Text className="text-sm md:text-base text-foreground-tertiary">{program.name}</Text>
          <Text className="text-sm md:text-base md:ml-auto text-foreground-tertiary">{program.location}</Text>
        </Container>
        <Dialog.Root
          onOpenChange={(open) => {
            if (!open && enrolling) {
              setEnrolling(false);
            }
          }}
        >
          <Dialog.Trigger asChild>
            <Button className="px-0! gap-2 whitespace-nowrap">
              <Text>Enroll now</Text>
              <Icon vector="north_east" size={24} />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black z-51 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed top-[50%] left-[50%] z-52 py-32 grid h-full w-full translate-x-[-50%] translate-y-[-50%] duration-200">
              <Hidden>
                <Dialog.Title>Navigation</Dialog.Title>
                <Dialog.Description>A site navigation menu.</Dialog.Description>
              </Hidden>
              <View className="fixed top-0 py-4" align="center">
                <Dialog.Close asChild>
                  <Button className="p-2! rounded-2xl! bg-background-base hover:bg-button-ghost-hover data-[state=open]:bg-button-ghost-active">
                    <Icon vector="arrow_left_alt" size={32} />
                  </Button>
                </Dialog.Close>
              </View>
              <View justify="center">
                <Container className="w-full md:max-w-1/2 flex-col! md:flex-row!" justify="center" gap={64}>
                  <Container direction="column" gap={32} grow>
                    <Container direction="column" gap={8}>
                      <Text className="text-3xl md:text-4xl">{program.name}</Text>
                      <Text className="text-sm">{toPeriod(program.start, program.end)}</Text>
                    </Container>
                    <Text>{program.description}</Text>
                    <Text className="text-foreground-secondary">
                      Beyond the technical curriculum, instructors provide personal guidance and mentorship. You won&apos;t just learn the skills of
                      the course — you&apos;ll also develop your problem-solving abilities, critical thinking, and the habits that lead to mastery and
                      personal growth.
                    </Text>

                    <Text className="text-foreground-secondary">
                      This approach aligns with the broader vision of education: it is not merely a set of classes, but a system for cultivating
                      thoughtful, capable individuals who can apply their knowledge in the real world. Students are encouraged to explore, experiment,
                      and take ownership of their learning under personalized guidance.
                    </Text>

                    <Text className="text-foreground-secondary">
                      Each program is designed to balance structured projects with mentorship and discussion, so students leave with both practical
                      skills and the confidence to continue growing independently. The goal is to cultivate curiosity, dedication, pride in craft, and
                      a mindset for lifelong learning.
                    </Text>
                    <Text className="font-extrabold text-xl">Structure & Guidance</Text>

                    <Text className="text-foreground-secondary">
                      Optional live sessions are held weekly to discuss the material, answer questions, and provide collective guidance. These
                      sessions encourage collaboration and allow students to interact directly with instructors and peers.
                    </Text>

                    <Text className="text-foreground-secondary">
                      Assignments and projects are designed to mimic real-world scenarios. Students receive feedback on their work and can iterate to
                      improve both their technical skills and problem-solving approach. Mentorship is embedded throughout, helping students develop
                      critical thinking and independent learning habits.
                    </Text>

                    <Text className="text-foreground-secondary">
                      Self-paced learning is supported through curated resources, reading materials, and optional challenges. This flexible structure
                      ensures that students can progress at their own pace while still benefiting from structured guidance and mentorship.
                    </Text>
                  </Container>
                  <Container className="whitespace-nowrap" direction="column" gap={32}>
                    <Container direction="column">
                      <Text className="font-extrabold">Instructor</Text>
                      <Text className="text-xl whitespace-nowrap">{program.instructor}</Text>
                    </Container>
                    <Container direction="column">
                      <Text className="font-extrabold">Location</Text>
                      <Text className="text-xl whitespace-nowrap">{program.location}</Text>
                    </Container>
                    <Container direction="column">
                      <Text className="font-extrabold">Capacity</Text>
                      <Text className="text-xl whitespace-nowrap">{program.capacity}</Text>
                    </Container>
                    <Container direction="column">
                      <Text className="font-extrabold">One-Time Fee</Text>
                      <Text className="text-xl uppercase whitespace-nowrap">
                        {program.price} {program.currency}
                      </Text>
                    </Container>
                    <Container direction="column">
                      <Text className="font-extrabold">Deadline</Text>
                      <Text className="text-xl whitespace-nowrap">{program.deadline}</Text>
                    </Container>
                    <Button
                      onClick={(_) => enroll(program)}
                      className="bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-active justify-center"
                    >
                      {enrolling ? <Spinner className="size-4" /> : <Text>Enroll</Text>}
                    </Button>
                  </Container>
                </Container>
              </View>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    ));
  };

  return (
    <Container className="w-full divide-y divide-border-base" align="center" direction="column">
      {render()}
    </Container>
  );
};
