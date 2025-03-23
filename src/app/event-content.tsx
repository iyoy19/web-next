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
      label: "Menu 1",
      value: "menu 1",
      desc: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: "/image/event2.jpeg",
    },
    {
      label: "Menu 2",
      value: "Menu 2",
      desc: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.`,
      image: "/image/event2.jpeg",
    },
    {
      label: "Menu 3",
      value: "Menu 3",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: "/image/event2.jpeg",
    },
    {
      label: "Menu 4",
      value: "Menu 4",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
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
