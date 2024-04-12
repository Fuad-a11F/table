export const variants = {
  show: {
    x: 0,
    opacity: 1,
    backgroundColor: "#1a1a1a",
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
  initial: {
    opacity: 0,
    x: -220,
  },
  hide: {
    opacity: 0,
    x: -220,
    transition: {
      ease: "easeIn",
      duration: 0.6,
    },
  },
};

export const variantsButton = {
  show: {
    x: 365,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
  initial: { x: 15 },
  hide: {
    x: 15,
    transition: {
      ease: "easeIn",
      duration: 0.6,
    },
  },
};
