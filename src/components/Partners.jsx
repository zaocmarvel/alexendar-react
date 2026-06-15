import { motion } from 'framer-motion';

export default function Partners() {
  const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDBcfpK1fHeNMzbv6wzvNIpoDlE8YSEJLwxTOz-ZFifoeaQ44x3i9hHOM8QIVomI5ryoLcRKGDOTGpZ0UBWOIiA8ETC9XyBuH9_VeKG8XQorY_dV9Qg9z8Rjz6ili5wuvya8ffBQRfTsRrMQphX6ZN6VTeq6tOzs3DoqVft8ivT1UaOENpReHEOBB3mBWYhwPLjIWt31y2-WfBU3KRhF9e5L0gSLEfrEvdi25-yZ3TIrFiilbOi8wfXwAcqIkfWJ96MjNn-h6V6fGap",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDsg9XKhzyzilGrrEN20ETAUAJUVHh027ciSkshuQZ9-H9BoYMEcgwiBsQsOZQOe0THYlmYhcxe1mb7LF8GugMAI8VJdGNhH6Uzg9G7mH8WMeA9WPWvOQBowg_ajwcOPxV_U_VwPZjbclbFor_9bOMwMU3m6Z9QtwZuRQD2iPYe2C5Q0btelGdgszmV3lS0CL8r2X77eK1H6oJ2lSmQgKVM2UcUgXn7CWsXdYmXj7FPnEXHr5hfRB0ECZuWhFS1WIOdsasReoWGjmFY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1lIXootoQDdNT1kNMZ32pQ42L7ZqSKWrYvWVAiwZhhqxnNglawLq4YUwHTdMxDKGRwInDJeVNApLYq2jXD3Z2TibLHiDe--Zu6Rm4pj-XHbG3bo732YugAoocx50sH20Udb9sKzyqosiCcxX0PP3oUyrfovy5j_OybcFYb9LiUdRKDsWoo8PwvQNCeALm7lNcH-1NloR2huCLwDzBZEIa1GxiVj0ie7L6D-Pjid2eAknZ0MIPYGSDvgDhA3L2GBKslKxxSdySBLMa",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0YSRqIaCXDbjmd-SPxNIVxhMB2ndgQHDyGpma1Mf1D2fOVxq63Q7zN2g9kXdgKFpGhgG-RABQlT3hhO3fGyEQ8kk7JaBM43swq5l74w0cWDT_2SMC1c_0nHpLn_jHB7Ze2pHE4yAtjPOoUsBvO7krFW_f0A6H2VU7n_d_ghjWFMQe_B514E4Kjzn__XnDyadNfUNR7Ir7DV4gp2czSCPVG0utUQzsVUeTuShFZmxKrykftftqiIVDIBVndX6e0TJLFd85Ui5Omt3E",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8uXBwxaRYUZOK5zhJKDJHC_teyPTdZSuvcLG2gCrndbiocYyZEwmV0HSjfox6G_iZROJE_t-8FNnYBYEgoZxXVNe6hgds0MxIEwzrzsqBSQkQy-1NQdnSCSepY-XNrxQEo9V0jwJH0pl6smisxYuKHDRw-puh3vYpx-NE3cyHCrc6ajVI2ZhopPyA96_G3Qe9_wmWsnt4KXRH_8kjlkoQ0eusH0dLQEwWPPtl1yetdvGLFmWcfXf_NyNTjzqtkSLLr5iqn9sWXh_T"
  ];

  // Duplicate for smooth seamless loop scrolling
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-t border-b border-slate-100 bg-white overflow-hidden select-none">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
          Trusted Partners
        </h3>
        <div className="relative w-full overflow-hidden flex">
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-16 md:gap-24 w-max pr-16"
          >
            {marqueeLogos.map((logo, index) => (
              <img 
                key={index}
                alt="Partner Logo" 
                className="h-8 object-contain opacity-55 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transition-transform duration-200 grayscale hover:grayscale-0 cursor-pointer" 
                src={logo}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
