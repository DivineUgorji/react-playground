import { motion } from "motion/react";
import Star from "../../icons/Star";
function Testimonial({ test }) {
  return (
    <motion.li
      className="bg-primary-1300 rounded-2xl px-8 py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "100%" }}
      transition={{
        opacity: { duration: 0.75, ease: "easeInOut" },
      }}
    >
      <div className="flex gap-x-1 pb-8">
        {Array.from({ length: test.rating }).map((_, i) => (
          <Star key={i} className="fill-primary-100" alt="filled stars" />
        ))}

        {Array.from({ length: 5 - test.rating }).map((_, i) => (
          <Star key={i} alt="none filled stars" />
        ))}
      </div>
      <p className="text-primary-50 pb-16 text-lg/loose font-light">
        {test.description}
      </p>
      <div className="flex items-center gap-x-6">
        <img
          className="h-18 rounded-full"
          src={test.src}
          alt="portrait headshot"
        />
        <div>
          <p className="text-primary-500 text-xl/7 font-bold tracking-tight">
            {test.name}
          </p>
          <p className="text-primary-75 text-base/loose tracking-tight">
            {test.title}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default Testimonial;
