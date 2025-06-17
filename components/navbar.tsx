"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

interface NavItem {
  name: string;
  link?: string;
  subItems?: {
    name: string;
    link: string;
    description: string;
    icon: string;
  }[];
}

interface NavbarProps {
  navItems: NavItem[];
  visible: boolean;
}

export const Navbar = () => {
  const navItems: NavItem[] = [
    {
      name: "Product",
      subItems: [
        {
          name: "Publish",
          link: "/publish",
          description: "Schedule, preview & recycle posts, social calendar, bulk schedule",
          icon: "📤"
        },
        {
          name: "Automate",
          link: "/automate", 
          description: "True automation, auto post from RSS, auto replies, handle reviews",
          icon: "🔄"
        },
        {
          name: "Curate",
          link: "/curate",
          description: "Discover & share content, advanced filtering, write with AI",
          icon: "📋"
        },
        {
          name: "Analyze",
          link: "/analyze",
          description: "Top posts, post insights, follower insights",
          icon: "📊"
        },
        {
          name: "Generate",
          link: "/generate",
          description: "X posts, LinkedIn posts, Instagram captions, Short posts",
          icon: "✨"
        },
        {
          name: "Collaborate",
          link: "/collaborate",
          description: "Manage teams & multiple brands, post approvals & conversations",
          icon: "👥"
        },
        {
          name: "Respond",
          link: "/respond",
          description: "One inbox for all social media conversations & reviews",
          icon: "💬"
        },
        {
          name: "Assistant",
          link: "/assistant",
          description: "AI-powered content creation, autocomplete & personal assistant",
          icon: "🤖"
        }
      ]
    },
    {
      name: "Platforms",
      subItems: [
        {
          name: "Facebook",
          link: "/facebook",
          description: "Schedule and manage Facebook posts, pages and groups",
          icon: "📘"
        },
        {
          name: "YouTube",
          link: "/youtube",
          description: "Upload and schedule YouTube videos and shorts",
          icon: "📺"
        },
        {
          name: "X (Twitter)",
          link: "/twitter",
          description: "Tweet scheduling, threads and engagement management",
          icon: "🐦"
        },
        {
          name: "Reddit",
          link: "/reddit",
          description: "Post to multiple subreddits and manage communities",
          icon: "🔴"
        },
        {
          name: "Instagram",
          link: "/instagram",
          description: "Share photos, stories, reels and IGTV content",
          icon: "📷"
        },
        {
          name: "Mastodon",
          link: "/mastodon",
          description: "Decentralized social network posting and management",
          icon: "🐘"
        },
        {
          name: "Threads",
          link: "/threads",
          description: "Meta's text-based conversation platform",
          icon: "🧵"
        },
        {
          name: "Pinterest",
          link: "/pinterest",
          description: "Pin management and board organization",
          icon: "📌"
        },
        {
          name: "LinkedIn",
          link: "/linkedin",
          description: "Professional networking and content sharing",
          icon: "💼"
        },
        {
          name: "Bluesky",
          link: "/bluesky",
          description: "Decentralized social networking protocol",
          icon: "🦋"
        },
        {
          name: "TikTok",
          link: "/tiktok",
          description: "Short-form video content creation and scheduling",
          icon: "🎵"
        },
        {
          name: "Google Business Profile",
          link: "/google-business-profile",
          description: "Manage your business presence on Google",
          icon: "🏢"
        }
      ]
    },
    {
      name: "Pricing",
      link: "/#pricing",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className="w-full fixed top-0 inset-x-0 z-50">
      <DesktopNav visible={visible} navItems={navItems} />
      <MobileNav visible={visible} navItems={navItems} />
    </motion.div>
  );
};

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

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

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        setDropdownOpen(null);
      }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "hidden lg:flex flex-row  self-start bg-transparent dark:bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        visible && "bg-white/80 dark:bg-neutral-950/80"
      )}
    >
      <Logo />
      <motion.div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        {navItems.map((navItem: NavItem, idx: number) => (
          <div
            key={`link=${idx}`}
            className="relative"
            onMouseEnter={() => {
              setHovered(idx);
              if (navItem.subItems) {
                setDropdownOpen(idx);
              }
            }}
          >
            {navItem.subItems ? (
              <div className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2 flex items-center gap-1 cursor-pointer">
                {hovered === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
                  />
                )}
                <span className="relative z-20">{navItem.name}</span>
                <IconChevronDown className="w-4 h-4 relative z-20" />
              </div>
            ) : (
              <Link
                className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
                href={navItem.link!}
              >
                {hovered === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
                  />
                )}
                <span className="relative z-20">{navItem.name}</span>
              </Link>
            )}
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen === idx && navItem.subItems && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "absolute top-full left-0 mt-2 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50",
                    navItem.name === "Platforms" ? "w-[720px]" : "w-[640px]"
                  )}
                >
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-1">
                      {navItem.subItems.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.link}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group"
                          onClick={() => setDropdownOpen(null)}
                        >
                          <div className="text-2xl">{subItem.icon}</div>
                          <div className="flex-1">
                            <div className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {subItem.name}
                            </div>
                            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
      <div className="flex items-center gap-4">
        <ModeToggle />

        <AnimatePresence mode="popLayout" initial={false}>
          {!visible && (
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: [0, 0, 1],
              }}
              exit={{
                x: 100,
                opacity: [0, 0, 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Button
                as={Link}
                href={CONSTANTS.LOGIN_LINK}
                variant="secondary"
                className="hidden md:block "
              >
                Login
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          data-cal-namespace={calOptions.namespace}
          data-cal-link={CONSTANTS.CALCOM_LINK}
          data-cal-config={`{"layout":"${calOptions.layout}"}`}
          as="button"
          variant="primary"
          className="hidden md:block "
        >
          Book a call
        </Button>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems, visible }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const calOptions = useCalEmbed({
    namespace: "chat-with-manu-demo",
    styles: {
      branding: {
        brandColor: "#000000",
      },
    },
    hideEventTypeDetails: false,
    layout: "month_view",
  });

  const toggleExpanded = (idx: number) => {
    setExpandedItems(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <>
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          y: visible ? 20 : 0,
          borderRadius: open ? "4px" : "2rem",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent   max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50",
          visible && "bg-white/80 dark:bg-neutral-950/80"
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          {open ? (
            <IconX
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-2 w-full px-4 py-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              {navItems.map((navItem: NavItem, idx: number) => (
                <div key={`mobile-link=${idx}`} className="w-full">
                  {navItem.subItems ? (
                    <div className="w-full">
                      <button
                        onClick={() => toggleExpanded(idx)}
                        className="flex items-center justify-between w-full p-2 text-left text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
                      >
                        <span>{navItem.name}</span>
                        <IconChevronDown 
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            expandedItems.includes(idx) && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedItems.includes(idx) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-2">
                              {navItem.subItems.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={subItem.link}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-3 p-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                                >
                                  <span className="text-base">{subItem.icon}</span>
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={navItem.link!}
                      onClick={() => setOpen(false)}
                      className="block p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                      {navItem.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="w-full pt-4 space-y-2">
                <Button
                  as={Link}
                  onClick={() => setOpen(false)}
                  href={CONSTANTS.LOGIN_LINK}
                  variant="secondary"
                  className="w-full"
                >
                  Login
                </Button>
                <Button
                  data-cal-namespace={calOptions.namespace}
                  data-cal-link={`manu-arora-vesr9s/chat-with-manu-demo`}
                  data-cal-config={`{"layout":"${calOptions.layout}"}`}
                  as="button"
                  onClick={() => setOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
