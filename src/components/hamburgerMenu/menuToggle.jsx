import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

function MenuToggle({ toggle, isOpen }) {
  return (
    <div
      style={{ cursor: "pointer", zIndex: 99 }}
      className={cls.btn}
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 100%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 100%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" },
          }}
          animate={isOpen ? "open" : "closed"}
          transition={transition}
        />
      </svg>
    </div>
  );
}
export default MenuToggle;
