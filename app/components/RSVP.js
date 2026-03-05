"use client";

import { useState } from "react";
import Link from "next/link";
import { CiMap } from "react-icons/ci";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { MdContentCopy } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LiaMinusSolid } from "react-icons/lia";
import { LiaPlusSolid } from "react-icons/lia";

import usePersistedState from "../hooks/usePersistedState";
import { parseDateAndTime } from "../utils/dateAndTime";

const ICON_SIZE = 20;

const RSVP = ({ eventData, onRsvpSubmit }) => {
  const childMaxAge = eventData.childMaxAge ?? 17;
  const storageKey = `rsvp-event-${eventData.upliftEventId}`;

  const [formData, setFormData] = usePersistedState(
    { children: 0, agreed: false },
    storageKey,
    "localStorage"
  );

  const [copyState, setCopyState] = useState(false);

  const fullAddress = [
    eventData.venue,
    eventData.address,
    `${eventData.city}, ${eventData.state} ${eventData.zip}`,
  ].join(", ");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullAddress);
    setCopyState(true);
    setTimeout(() => setCopyState(false), 3000);
  };

  const setChildren = (n) => {
    const clamped = Math.max(0, Math.min(6, n));
    setFormData((prev) => ({ ...prev, children: clamped }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) return;
    onRsvpSubmit?.({
      eventName: eventData.eventName || "Event Details",
      upliftEventId: eventData.upliftEventId,
      children: formData.children,
    });
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

  const eventName = eventData.eventName || "Event Details";

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 sm:relative flex flex-col gap-4 bg-[#F4F4F4] text-[black] p-3 w-[393px] sm:w-[444px] rounded-tl-[16px] rounded-tr-[16px] sm:rounded-none z-[100]"
      aria-labelledby="rsvp-event-name"
      aria-describedby="rsvp-event-details"
    >
      <h3 id="rsvp-event-name" className="text-[18px] sm:text-[20px] font-bold opacity-[87%]">
        {eventName}
      </h3>

      <section id="rsvp-event-details" className="flex flex-row justify-between gap-2" aria-label="Event location and details">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <CiMap size={ICON_SIZE} className="shrink-0 text-[#2E2E2E]" aria-hidden="true" />
            <span className="text-[16px]">{eventData.venue}</span>
          </div>
          <p className="pl-[28px] text-[14px] opacity-[60%]">{eventData.address}</p>
          <p className="pl-[28px] text-[14px] opacity-[60%]">
            {eventData.city}, {eventData.state} {eventData.zip}
          </p>
        </div>
        <div className="flex justify-between items-center text-[12px] w-[117px]">
          <div className="flex flex-col items-center gap-2 w-[61px] h-[60px]">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity rounded-full p-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E2E2E]"
              aria-label={`Get directions to ${eventData.venue} in Google Maps`}
            >
              <LiaMapMarkerSolid size="24px" className="shrink-0 text-[#2E2E2E] active:text-[black]" />
            </a>
            <span className="opacity-[87%]">Directions</span>
          </div>
          <div className="flex flex-col items-center gap-2 w-[40px] h-[60px]">
            <button
              type="button"
              onClick={handleCopy}
              className="transition-opacity rounded-full p-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E2E2E]"
              aria-label={copyState ? "Address copied to clipboard" : "Copy event address to clipboard"}
            >
              {copyState ? (
                <MdCheckCircleOutline size="24px" className="shrink-0 text-[#2E2E2E] active:text-[black]" />
              ) : (
                <MdContentCopy size="24px" className="shrink-0 text-[#2E2E2E] active:text-[black]" />
              )}
            </button>
            <span aria-live="polite" aria-atomic="true" className="opacity-[87%]">
              {copyState ? "Copied!" : "Copy"}
            </span>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-2" role="group" aria-label="Event date and time">
        <CiCalendar size={ICON_SIZE} className="shrink-0 text-[#2E2E2E]" aria-hidden="true" />
        <span className="text-[16px]">{displayDate}</span>
      </div>

      <div className="flex items-center gap-2" role="group" aria-label="Event time">
        <AiOutlineClockCircle size={ICON_SIZE} className="shrink-0 text-[#2E2E2E]" aria-hidden="true" />
        <span className="text-[16px]">{displayTime}</span>
      </div>

      <div
        className="flex justify-between items-center h-[36px]"
        role="group"
        aria-label={`Additional children, ages 0 to ${childMaxAge} years. Current count: ${formData.children}`}
      >
        <span id="children-label" className="text-[16px] opacity-[87%] h-[24px]">
          Additional Children (0 - {childMaxAge}yrs)
        </span>
        <div className="flex items-center h-[36px] gap-2 border-[1px] border-solid border-[black] border-opacity-50 rounded-[16px] ">
          <button
            type="button"
            onClick={() => setChildren(formData.children - 1)}
            disabled={formData.children <= 0}
            className="disabled:opacity-40 disabled:cursor-not-allowed border-r-[1px] border-solid border-[black] border-r-opacity-50 h-full p-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#2E2E2E] rounded-l-[15px]"
            aria-label="Decrease number of additional children"
            aria-describedby="children-label"
          >
            <LiaMinusSolid size={ICON_SIZE} aria-hidden="true" className="text-[black] active:opacity-[56%]" />
          </button>
          <span
            id="children-value"
            className="w-[10px] text-center text-[13px]"
            aria-live="polite"
            aria-atomic="true"
          >
            {formData.children}
          </span>
          <button
            type="button"
            onClick={() => setChildren(formData.children + 1)}
            disabled={formData.children >= 6}
            className="disabled:opacity-40 disabled:cursor-not-allowed border-l-[1px] border-solid border-[black] border-l-opacity-50 h-full p-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#2E2E2E] rounded-r-[15px]"
            aria-label="Increase number of additional children"
            aria-describedby="children-label"
          >
            <LiaPlusSolid size={ICON_SIZE} aria-hidden="true" className="text-[black] active:opacity-[56%]" />
          </button>
        </div>
      </div>

      <label className="flex items-start gap-[10px]">
        <div className="min-w-[38px] h-[38px] flex items-center justify-center cursor-pointer">
          <input
            type="checkbox"
            id="rsvp-agreement"
            checked={formData.agreed}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, agreed: e.target.checked }));
            }}
            className="my-auto w-[15px] h-[15px] opacity-60 text-[black] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E2E2E] rounded-sm"
            aria-required="true"
            aria-describedby="rsvp-agreement-text"
          />
        </div>
        <span id="rsvp-agreement-text" className="text-[12px] opacity-[60%]">
          <span className="text-[red]" aria-hidden="true">*</span> By checking this box, you
          agree to the terms outlined in this{" "}
          <Link
            href="https://www.elevationchurch.org/acknowledgements-and-release"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#2E2E2E] rounded"
          >
            Acknowledgement & Release
          </Link>{" "}
          form.
        </span>
      </label>

      <button
        type="submit"
        disabled={!formData.agreed}
        className="flex items-center justify-center gap-[8px] py-[8px] px-[22px] rounded-[16px] bg-[black] text-[#F5F5F5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
        aria-label={formData.agreed ? `Submit RSVP for ${eventName}` : "You must agree to the Acknowledgement and Release form before submitting"}
      >
        <span className="text-[16px] font-bold">RSVP</span>
        <MdCheckCircleOutline size={ICON_SIZE} aria-hidden="true" />
      </button>
    </form>
  );
};

export default RSVP;
