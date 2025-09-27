import { motion } from "framer-motion";

const videoIds = [
  "kNwCT5PN93k",
  "1HWVUkCTiM8",
  "GKyKNub4Loo",
  "Rbr6KhpiGRo",
  "H35FwN51tWQ",
  "xBO7RohEhOY",
];

const YoutubeSection = () => {
  return (
    <div className="container mx-auto py-10 min-h-screen flex flex-col justify-center">
      <h2 className="text-xl md:text-2xl mt-4 mb-4 font-bold flex items-center gap-3">
        Guess what? I'm also a{" "}
        <span className="text-indigo-700">YouTuber!</span>
      </h2>
      <p className="text-gray-600 mb-10 text-sm md:text-base">
        I like creating tech and programming related videos. Here are some of my
        most popular videos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoIds.map((id) => (
          <motion.div
            key={id}
            className="aspect-video"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSection;
