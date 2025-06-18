"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

export function Footer() {
  const calOptions = useCalEmbed({
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    styles: {
      branding: {
        brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: CONSTANTS.CALCOM_LAYOUT,
  });
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Pricing",
      href: "/#pricing",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];

  const products = [
    {
      title: "Publish",
      href: "/publish",
    },
    {
      title: "Automate",
      href: "/automate",
    },
    {
      title: "Curate",
      href: "/curate",
    },
    {
      title: "Analyze",
      href: "/analyze",
    },
    {
      title: "Generate",
      href: "/generate",
    },
    {
      title: "Collaborate",
      href: "/collaborate",
    },
    {
      title: "Respond",
      href: "/respond",
    },
    {
      title: "Assistant",
      href: "/assistant",
    },
  ];

  const platforms = [
    {
      title: "Facebook",
      href: "/facebook",
    },
    {
      title: "YouTube",
      href: "/youtube",
    },
    {
      title: "X (Twitter)",
      href: "/twitter",
    },
    {
      title: "Reddit",
      href: "/reddit",
    },
    {
      title: "Instagram",
      href: "/instagram",
    },
    {
      title: "Mastodon",
      href: "/mastodon",
    },
    {
      title: "Threads",
      href: "/threads",
    },
    {
      title: "Pinterest",
      href: "/pinterest",
    },
    {
      title: "LinkedIn",
      href: "/linkedin",
    },
    {
      title: "Bluesky",
      href: "/bluesky",
    },
    {
      title: "TikTok",
      href: "/tiktok",
    },
    {
      title: "Google Business Profile",
      href: "/google-business-profile",
    },
  ];

  const socials = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/Aethermetrics",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      title: "X (Twitter)",
      href: "https://twitter.com/Aethermetrics_app",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/Aethermetrics.app",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.199 5.036.374a6.5 6.5 0 0 0-2.346 1.528A6.5 6.5 0 0 0 1.162 5.248c-.175.484-.29 1.058-.326 2.005C.801 8.201.788 8.608.788 12.017s.013 3.816.048 4.764c.036.947.151 1.521.326 2.005a6.5 6.5 0 0 0 1.528 2.346 6.5 6.5 0 0 0 2.346 1.528c.484.175 1.058.29 2.005.326.948.035 1.355.048 4.764.048s3.816-.013 4.764-.048c.947-.036 1.521-.151 2.005-.326a6.5 6.5 0 0 0 2.346-1.528 6.5 6.5 0 0 0 1.528-2.346c.175-.484.29-1.058.326-2.005.035-.948.048-1.355.048-4.764s-.013-3.816-.048-4.764c-.036-.947-.151-1.521-.326-2.005a6.5 6.5 0 0 0-1.528-2.346A6.5 6.5 0 0 0 19.027.374c-.484-.175-1.058-.29-2.005-.326C16.074.013 15.667 0 12.017 0zm0 2.158c3.333 0 3.727.014 5.043.048.821.037 1.265.171 1.562.284.392.152.672.335.966.629.294.294.477.574.629.966.113.297.247.741.284 1.562.034 1.316.048 1.71.048 5.043s-.014 3.727-.048 5.043c-.037.821-.171 1.265-.284 1.562-.152.392-.335.672-.629.966-.294.294-.574.477-.966.629-.297.113-.741.247-1.562.284-1.316.034-1.71.048-5.043.048s-3.727-.014-5.043-.048c-.821-.037-1.265-.171-1.562-.284a2.596 2.596 0 0 1-.966-.629 2.596 2.596 0 0 1-.629-.966c-.113-.297-.247-.741-.284-1.562-.034-1.316-.048-1.71-.048-5.043s.014-3.727.048-5.043c.037-.821.171-1.265.284-1.562.152-.392.335-.672.629-.966.294-.294.574-.477.966-.629.297-.113.741-.247 1.562-.284 1.316-.034 1.71-.048 5.043-.048zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12.017 15.854a3.695 3.695 0 1 1 0-7.39 3.695 3.695 0 0 1 0 7.39zm7.25-9.519a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
        </svg>
      ),
    },
    {
      title: "TikTok",
      href: "https://www.tiktok.com/@Aethermetrics.app",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/Aethermetrics.app",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/@Aethermetrics",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];
  const legals = [
    {
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      title: "Terms of Service",
      href: "/terms",
    },
    {
      title: "Cookie Policy",
      href: "/cookies",
    },
  ];


  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
        <div>
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>
          
          <div className="ml-2 mb-6">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 max-w-sm">
              Aethermetrics helps you manage and automate your social media.
            </p>
            
            <h3 className="text-neutral-600 dark:text-neutral-300 font-medium mb-4">Find Us On:</h3>
            <div className="flex gap-4 mb-6">
              {socials.map((social, idx) => (
                <Link
                  key={"social" + idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  aria-label={social.title}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-2 ml-2">
            &copy; copyright Aethermetrics LLC 2024. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Pages
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Products
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {products.map((product, idx) => (
                <li key={"product" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={product.href}
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Platforms
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {platforms.map((platform, idx) => (
                <li key={"platform" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={platform.href}
                  >
                    {platform.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Legal
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={legal.href}
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
