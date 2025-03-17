"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";

export function TransparentTabs() {
  const data = [
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      image: "/image/event2.jpeg",
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      image: "/image/event2.jpeg",
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      image: "/image/event2.jpeg",
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      image: "/image/event2.jpeg",
    },
  ];

  return (
    <section
      className="py-12 px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/image/event1.jpg')" }}
    >
      {/* Overlay untuk efek blur & transparan */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Konten Tabs */}
      <div className="relative max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6">
        <Tabs value="react">
          {/* Header Tab Transparan */}
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-black/20 rounded-full shadow-md",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-white">
                {label}
              </Tab>
            ))}
          </TabsHeader>

          {/* Body Tab */}
          <TabsBody>
            {data.map(({ value, desc, image }) => (
              <TabPanel key={value} value={value} className="text-center">
                <div className="flex flex-col items-center gap-4">
                  {/* Gambar Bulat */}
                  <Image
                    src={image}
                    alt={value}
                    width={250}
                    height={250}
                    className="rounded-full shadow-md"
                    priority
                  />
                  {/* Deskripsi */}
                  <p className="text-white text-lg">{desc}</p>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}

export default TransparentTabs;
