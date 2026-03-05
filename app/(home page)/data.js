import { PiCrossThin } from "react-icons/pi";
import { GiTorch } from "react-icons/gi";
import { PiChurchLight } from "react-icons/pi";


const data = {
  title: "Uplift Church",
  hero: {
    title: "Uplift Church",
    subtitle: "Dive deeper in faith, purpose & community.",
    img: {
      src: "/homepage/priscilla-du-preez-nF8xhLMmg0c-unsplash.jpg",
      alt: "Group of people at an event",
      credit: `Photo by Priscilla Du Preez 🇨🇦 on Unsplash.`
    },
  },
  whatIsUpliftChurch: {
    title: "What is Uplift Church?",
    subtitle: "Uplift Church is a church that is dedicated to helping people dive deeper in faith, purpose & community.",
    list: [
      {
        title: "Faith",
        description: "Faith is the foundation of our church. It is the belief that Jesus died for our sins and rose again for each and every one of us.",
        icon: <PiCrossThin />
      },
      {
        title: "Purpose",
        description: "Purpose is knowing God, God in you, and walking in the unique calling He has placed in you specifically.",
        icon: <GiTorch />
      },
      {
        title: "Community",
        description: "Community is fellowship with brothers and sisters in Christ sharing a common chord in Christ, where we are strengthened, encouraged, edified, and support one another in our walk with Christ.",
        icon: <PiChurchLight />
      },
    ]
  }
}
export default data;