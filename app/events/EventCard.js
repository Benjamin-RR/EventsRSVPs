"use client";

import { useRef } from "react";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import { parseDateAndTime } from "../utils/dateAndTime";

const EventCard = ({ eventData, setEventFocused }) => {
  const cardRef = useRef(null);

  const placeholderImage = {
    src: "/events/the-climate-reality-project-Hb6uWq0i4MI-unsplash.jpg",
    alt: "Gathering of people at Uplift Church Event",
    credit: "Photo by The Climate Reality Project on Unsplash", 
    width: 260,
    height: 160,
  };

  const parsed = parseDateAndTime(eventData.dateAndTime);
  const displayDate = parsed
    ? parsed.date
    : new Date().toLocaleDateString("en-US", {
        timeZone: "America/New_York",
        dateStyle: "long",
      });
  const displayTime = parsed
    ? parsed.time
    : new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        timeStyle: "short",
      }) + " ET";

  const handleSelect = () => setEventFocused(eventData.upliftEventId);

  const iconSize = 20;
  const eventName = eventData.eventName || "Event Details";
  const cardAriaLabel = `Select event: ${eventName}, ${eventData.city}, ${eventData.state}. Date: ${displayDate}. Time: ${displayTime}. Press Enter to view RSVP.`;

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={cardAriaLabel}
      className="w-[292px] rounded-2xl flex flex-col overflow-hidden cursor-pointer transition-colors hover:bg-[#303030] border-solid border-[1px] border-[transparent] hover:border-[grey] focus:bg-[#303030] focus:border-[grey] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white p-5"
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSelect();
        }
      }}
    >
      <div className="relative w-full h-40 shrink-0">
        <Image
          src={eventData.img?.src || placeholderImage.src}
          alt={`${eventName} event image`}
          fill
          sizes="292px"
          className="object-cover rounded-2xl"
        />
        <p className="absolute bottom-[10px] left-[20px] text-white text-sm text-[grey]">
            {eventData.img?.credit || placeholderImage.credit}
          </p>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{eventName}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {eventData.city}, {eventData.state}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <CiCalendar size={iconSize} className="shrink-0" aria-hidden="true" />
          <span>{displayDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <AiOutlineClockCircle size={iconSize} className="shrink-0" aria-hidden="true" />
          <span>{displayTime}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
