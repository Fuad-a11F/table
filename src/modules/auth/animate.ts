export const variants = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
  initial: {
    opacity: 0,
    x: 220,
  },
  hide: {
    opacity: 0,
    x: -240,
    transition: {
      ease: "easeIn",
      duration: 0.6,
    },
  },
};
