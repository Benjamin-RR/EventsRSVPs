import { MdCheckCircleOutline } from "react-icons/md";

const data = {
  hero: {
    title: "Upcoming Events at Uplift Church",
    subtitle: "Dive deeper in faith, purpose & community.",
    img: {
      src: "/events/edward-cisneros-QSa-uv4WJ0k-unsplash.jpg",
      alt: "Worship event at Uplift Church",
      credit: "Photo by Edward Cisneros on Unsplash",
    },
  },
  rsvps: {
    title: "RSVPs",
    text: "Total RSVPs",
  },
  events: [
    {
      upliftEventId: 1,
      eventName: "", // Optional: defaults to "Event Details" when no eventName is provided
      img: {}, // Optional: when no image details are provided, defaults to placeholder image
      venue: "Elevation Church Ballantyne",
      address: "11701 Elevation Pt Dr", // Optional: can be an empty string
      city: "Charlotte",
      state: "NC",
      zip: "28277",
      dateAndTime: "", // Optional: defaults to current date and time displayed in ET when this field is empty. If you want to add your own don't forget to use "at" or "@" between date and time.
      childMaxAge: 17 // Optional: if no childMaxAge, defaults to 17
    },
    {
      upliftEventId: 2,
      eventName: "Artist for God",
      img: {
        src: "/events/laura-adai-xSMIuUDMMSY-unsplash.jpg",
        alt: "Artist for God",
        credit: "Photo by laura adai on Unsplash",
      },
      venue: "Millennium Park",
      address: "",
      city: "Chicago",
      state: "IL",
      zip: "60602",
      dateAndTime: "March 7, 2026 at 2:00PM ET",
      childMaxAge: 15
    },
    {
      upliftEventId: 3,
      eventName: "Church of the Holy Sepulchre",
      img: {
      },
      venue: "Church of the Holy Sepulchre",
      address: "",
      city: "Jerusalem",
      state: "Israel",
      zip: "90000",
      dateAndTime: "March 17, 2029 at 4:00PM ET",
      childMaxAge: 16
    }
    // You can add as many event here. I was about to add api integration to mongodb and collection, but thought maybe that'd be too much actually.
  ]
}
export default data;