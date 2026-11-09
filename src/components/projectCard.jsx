function ProjectCard({ title, description, technologies }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <h3 className="text-xl font-bold text-[#293B2B]">{title}</h3>

      <p className="text-gray-600 mt-3 leading-6">{description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {technologies.map((technology, index) => (
          <span
            key={index}
            className="bg-[#E8EEE7] text-[#293B2B] px-3 py-1 rounded-full text-sm font-medium"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
