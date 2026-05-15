"use client";

import Script from "next/script";
import { useLocale } from "next-intl";

type Props = {
  calLink?: string; // e.g. "davidhav/intro" — falls back to NEXT_PUBLIC_CAL_LINK
};

export function CalEmbed({ calLink }: Props) {
  const locale = useLocale();
  const link = calLink ?? process.env.NEXT_PUBLIC_CAL_LINK ?? "";

  if (!link) {
    return (
      <div className="w-full min-h-[500px] bg-birch/10 border border-dashed border-birch flex items-center justify-center p-8">
        <div className="text-center max-w-xs">
          <p className="eyebrow mb-4">Kalender</p>
          <p className="text-stone text-sm leading-relaxed">
            Tilføj{" "}
            <code className="text-ink text-xs bg-birch px-1 py-0.5">
              NEXT_PUBLIC_CAL_LINK
            </code>{" "}
            som miljøvariabel for at aktivere inline-kalender.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Cal.com embed script — loads once per page */}
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-expect-error window.Cal is injected by the embed script
          window.Cal?.("inline", {
            elementOrSelector: "#cal-embed-container",
            calLink: link,
            layout: "month_view",
            config: { locale },
          });
        }}
      />
      <div
        id="cal-embed-container"
        className="w-full min-h-[600px] [&_iframe]:!border-0 [&_iframe]:!rounded-none"
        style={{ colorScheme: "light" }}
      />
    </>
  );
}
