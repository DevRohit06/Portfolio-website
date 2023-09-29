import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
export default {
    remarkPlugins: [
      remarkReadingTime,
        remarkToc,
        [
          remarkCollapse,
          {
            test: "Table of contents",
            
          },
        ],
      ],
      shikiConfig: {
        theme: "one-dark-pro",
        wrap: true,
      },
      extendDefaultPlugins: true,
};
