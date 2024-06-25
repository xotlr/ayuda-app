// src/components/SettingsRightNav.tsx
import Link from "next/link";
import React from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useTheme } from "next-themes";

type SettingsTitle = ReturnType<typeof useSettingsPages>[number]["title"];

const useSettingsPages = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  return loggedIn
    ? ([
        { title: "Account", href: "/settings/account" },
        { title: "Sound", href: "/settings/sound" },
        { title: "Edit Daily Goal", href: "/settings/coach" },
      ] as const)
    : ([
        { title: "Account", href: "/settings/account" },
        { title: "Sound", href: "/settings/sound" },
        { title: "Edit Daily Goal", href: "/settings/coach" },
      ] as const);
};

export const SettingsRightNav = ({
  selectedTab,
}: {
  selectedTab: SettingsTitle;
}) => {
  const settingsPages = useSettingsPages();
  const { theme, setTheme } = useTheme();

  return (
    <div className="hidden h-fit w-80 flex-col gap-1 rounded-xl border-2 border-gray-200/10 bg-muted p-5 lg:flex">
      {settingsPages.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className={[
            "rounded-xl p-3 font-bold hover:bg-gray-700/10",
            title === selectedTab ? "bg-gray-300/10" : "",
          ].join(" ")}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};
