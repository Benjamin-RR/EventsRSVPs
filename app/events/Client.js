"use client";

import data from "./data";
import RSVP from "../components/RSVP";
import EventCard from "./EventCard";
import Image from "next/image";
import { useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

const SAVED_RSVPS_KEY = "rsvp-saved-submissions";

export default function EventsClient() {
  const firstEventId = data.events[0]?.upliftEventId ?? null;
  const [eventFocused, setEventFocused] = useState(firstEventId);
  const [savedRsvps, setSavedRsvps] = usePersistedState(
    [],
    SAVED_RSVPS_KEY,
    "localStorage"
  );
  const focusedEvent = data.events.find((e) => e.upliftEventId === eventFocused);

  const handleRsvpSubmit = (rsvpData) => {
    setSavedRsvps((prev) => [
      ...prev,
      { ...rsvpData, id: Date.now() },
    ]);
  };

  return (
    <main id="events-main" aria-label="Upcoming events and RSVP">
      <section aria-labelledby="events-hero-title" className="pb-[30px]">
        <h1 id="events-hero-title" className="text-2xl font-bold">{data.hero.title}</h1>
        <p className="text-gray-500">{data.hero.subtitle}</p>
        <figure className="relative w-full h-48 md:h-64">
          <Image
            src={data.hero.img.src}
            alt={data.hero.img.alt}
            fill
            priority
            sizes="(min-width: 1536px) 1700px, (min-width: 1024px) 1280px, (min-width: 768px) 1280px, (min-width: 468px) 768px, (min-width: 256px) 468px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-[10px] left-[20px] text-white text-sm text-[grey]">
            {data.hero.img.credit}
          </figcaption>
        </figure>
      </section>
      <section aria-labelledby="events-list-heading" className="flex flex-wrap gap-4 mb-8">
        <h2 id="events-list-heading" className="sr-only">Upcoming events</h2>
        {data.events.map((event) => (
          <EventCard
            key={event.upliftEventId}
            eventData={event}
            setEventFocused={setEventFocused}
          />
        ))}
      </section>

      <section aria-labelledby="rsvps-section-title" className="border-t pt-6">
        {focusedEvent && (
          <RSVP
            eventData={focusedEvent}
            onRsvpSubmit={handleRsvpSubmit}
          />
        )}
        {savedRsvps.length > 0 && (
          <div
            className="mt-6 flex flex-col gap-2"
            role="region"
            aria-labelledby="saved-rsvps-heading"
            aria-live="polite"
            aria-atomic="false"
          >
            <h3 id="saved-rsvps-heading" className="font-semibold text-lg">Saved RSVPs</h3>
            <ul className="flex flex-col gap-2 list-none" aria-label="List of submitted RSVPs">
              {savedRsvps.map((rsvp, index) => (
                <li
                  key={rsvp.id}
                  tabIndex={0}
                  className="rounded-2xl border-[1px] border-[grey] border-solid p-4 transition-colors bg-[#303030] hover:bg-[#404040] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                  aria-label={`Saved RSVP ${index + 1}: ${rsvp.eventName || "Event"} - ${rsvp.upliftEventId}, Children: ${rsvp.children}`}
                >
                  <p className="font-medium text-sm">
                    <span className="font-bold">
                    {rsvp.eventName || "Event"}
                    </span>
                    <span className="ml-[10px] opacity-[60%]">
                    Event ID: {rsvp.upliftEventId}
                    </span>
                  </p>
                  <p className="text-sm mt-1">
                    RSVP {index + 1} - Children {rsvp.children}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
