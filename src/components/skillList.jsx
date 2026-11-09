function SkillList({ skills }) {
  return (
    <section id="skills" className="py-12 px-6">
      <h2 className="text-3xl font-bold text-[#293B2B] text-center mb-8">
        My Technical Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#E8EEE7] text-[#293B2B] px-6 py-3 rounded-full font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillList;
