// Copyright © Spatial Corporation. All rights reserved.

import { FC } from "react";

import { Icon } from "../icon";
import { Link } from "../link";
import { Text } from "../text";
import { View } from "../view";

/**
 * Create a new footer component.
 * @returns A footer component.
 */
export const Footer: FC = () => {
  return (
    <footer>
      <View className="py-8" align="center" gap={8}>
        <Link href="https://sptlco.com" target="_blank">
          <Text className="font-extrabold">SPTLCO ©</Text>
        </Link>

        <Link href="https://github.com/cundiffd/brand" target="_blank" className="ml-auto">
          <Icon vector="code" size={32} />
        </Link>
      </View>
    </footer>
  );
};
