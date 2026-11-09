function ProfileHeader({ name, role, city, bio }) {
  return (
    <section id="home" className="text-center py-20 px-6">
      <p className="text-[#66816A] font-semibold uppercase tracking-widest text-sm">
        {role}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#293B2B] mt-4">
        Hello, I'm {name}.
      </h2>

      <p className="text-[#D99A42] font-semibold mt-4">{city}</p>

      <p className="max-w-2xl mx-auto text-gray-600 mt-6 leading-7">{bio}</p>
    </section>
  );
}

export default ProfileHeader;
