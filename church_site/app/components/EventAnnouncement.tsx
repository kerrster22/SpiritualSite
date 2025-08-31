"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { X, CalendarDays } from "lucide-react";

type Props = {
  enablePopup?: boolean;
  popupDelayMs?: number;
};

const EVENT_ISO = "2025-09-19T19:30:00+01:00";
const STORAGE_BANNER = "eventBannerDismissed-2025-09-19";
const STORAGE_POPUP = "eventPopupShown-2025-09-19";

export default function EventAnnouncement({ enablePopup = true, popupDelayMs = 1000 }: Props) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const now = new Date();
    const eventDate = new Date(EVENT_ISO);
    if (now > eventDate) return;

    const bannerDismissed =
      typeof window !== "undefined" && localStorage.getItem(STORAGE_BANNER) === "1";
    if (!bannerDismissed) setShowBanner(true);

    const popupShown =
      typeof window !== "undefined" && localStorage.getItem(STORAGE_POPUP) === "1";
    if (enablePopup && !popupShown) {
      const t = setTimeout(() => {
        setShowPopup(true);
        try {
          localStorage.setItem(STORAGE_POPUP, "1");
        } catch {}
      }, popupDelayMs);
      return () => clearTimeout(t);
    }
  }, [enablePopup, popupDelayMs]);

  const dismissBanner = () => {
    setShowBanner(false);
    try {
      localStorage.setItem(STORAGE_BANNER, "1");
    } catch {}
  };

  /** Close popup *and* remove banner */
  const closePopup = () => {
    setShowPopup(false);
    dismissBanner();
  };

  return (
    <>
      {/* JSON-LD SEO data stays unchanged */}
      <Script id="event-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Special Evening with Stewart Alexander (Physical Medium)",
          startDate: EVENT_ISO,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: { "@type": "Place", name: "Later Life Care Hub" },
          description:
            "A special evening with guest speaker Stewart Alexander, the well known Physical Medium.",
          organizer: { "@type": "Organization", name: "Later Life Care Hub" },
        })}
      </Script>

      {/* Banner */}
      {showBanner && (
        <div
          role="region"
          aria-label="Special event announcement"
          className="sticky top-0 z-[100] shadow-lg"
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-xs font-semibold tracking-wide">
                Special Evening
              </span>
              <CalendarDays className="w-4 h-4 opacity-90" />
              <p className="text-sm sm:text-base">
                <span className="font-semibold">19 September · 7:30pm</span> — Guest Speaker{" "}
                <strong>Stewart Alexander</strong> (Physical Medium) at the{" "}
                <span className="underline-offset-2">Later Life Care Hub</span>.
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="ml-auto inline-flex items-center rounded-full bg-white text-amber-700 px-3 py-1 text-sm font-bold hover:bg-white/90 transition"
                aria-haspopup="dialog"
              >
                More details
              </button>
              <button
                onClick={dismissBanner}
                aria-label="Dismiss announcement"
                className="ml-2 rounded p-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Special Evening details"
          className="fixed inset-0 z-[110] grid place-items-center"
        >
          <div className="absolute inset-0 bg-black/60" onClick={closePopup} />
          <div className="relative mx-4 max-w-lg w-full rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={closePopup}
              aria-label="Close"
              className="absolute right-3 top-3 rounded p-1 text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Special Evening: Stewart Alexander
            </h2>
            <p className="mt-2 text-gray-700">
              Join us for an inspiring evening with the renowned Physical Medium,{" "}
              <strong>Stewart Alexander</strong>.
            </p>
            <ul className="mt-4 space-y-1 text-gray-800">
              <li>
                <strong>Date:</strong> Friday, 19 September 2025
              </li>
              <li>
                <strong>Time:</strong> 7:30pm (doors 7:00pm)
              </li>
              <li>
                <strong>Venue:</strong> Later Life Care Hub
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
