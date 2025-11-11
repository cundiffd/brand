// Copyright © Spatial Corporation. All rights reserved.

"use client";

import { clsx } from "clsx";
import { FC, useEffect, useState } from "react";

import { Container } from "../container";
import { Dialog } from "../dialog";
import { Hidden } from "../hidden";
import { Icon } from "../icon";
import { Link } from "../link";
import { LanguageSwitch } from "./LanguageSwitch";
import { Spatial, Symbol } from "../symbol";
import { View } from "../view";
import { Text } from "../text";
import { Button } from "../button";

const links: { label: string; href: string; target?: string }[] = [
  { label: "Home", href: "/" },
  { label: "Thoughts", href: "/blog" },
  { label: "Work", href: "https://github.com/cundiff", target: "_blank" },
  { label: "Support", href: "https://buymeacoffee.com/mrcundiff", target: "_blank" }
];

/**
 * Create a new navigation component.
 * @param props Configurable options for the component.
 * @returns A navigation component.
 */
export const Navigation: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [alt, setAlt] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const alternation = setInterval(() => {
      setAlt((value) => !value);
    }, 2500);

    return () => clearInterval(alternation);
  }, []);

  return (
    <nav className={clsx("w-full sticky top-0 z-50 py-4", "transition-all duration-300", { "py-8 md:py-24": !scrolled })}>
      <View justify="space-between" align="center">
        <Container basis={0} align="center" grow>
          <Dialog.Root>
            <Dialog.Trigger className="bg-background-base hover:bg-button-ghost-hover data-[state=open]:bg-button-ghost-active">
              <Icon vector="menu" size={32} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black z-51 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed top-[50%] left-[50%] z-52 grid h-full w-full translate-x-[-50%] translate-y-[-50%] duration-200">
                <Hidden>
                  <Dialog.Title>Navigation</Dialog.Title>
                  <Dialog.Description>A site navigation menu.</Dialog.Description>
                </Hidden>
                <View className={clsx("fixed top-0 py-4", { "py-8 md:py-24": !scrolled })} align="center">
                  <Dialog.Close asChild>
                    <Button className="p-2! rounded-2xl! bg-background-base hover:bg-button-ghost-hover data-[state=open]:bg-button-ghost-active">
                      <Icon vector="arrow_left_alt" size={32} />
                    </Button>
                  </Dialog.Close>
                </View>
                <View direction="column" gap={48} justify="center" className="h-full pointer-none" innerClassName="h-full">
                  {links.map((link, i) => (
                    <Link href={link.href} target={link.target} key={i} className="flex items-center space-x-8">
                      <Text className="text-5xl md:text-9xl font-normal">{link.label}</Text>
                      {link.target && <Icon vector="north_east" size={72} />}
                    </Link>
                  ))}
                </View>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Container>
        <Link href="/" className={clsx("flex items-center justify-center", "transition-all duration-300", { "opacity-0 pointer-none": scrolled })}>
          <div className="h-8 relative flex items-center justify-center">
            <Symbol key="dakarai" className={clsx("transition-all absolute duration-300 h-full", { "opacity-0! blur-xl!": alt })} />
            <Spatial
              key="spatial"
              className={clsx("transition-all absolute duration-300 h-full blur-xl opacity-0", { "opacity-100! blur-none!": alt })}
            />
          </div>
        </Link>
        <Container basis={0} align="center" justify="end" grow>
          <LanguageSwitch />
        </Container>
      </View>
    </nav>
  );
};
