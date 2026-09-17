function About() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-128px)] max-w-4xl items-center px-6 py-16">
      <div className="w-full rounded-2xl border border-slate-700 bg-[#0d1a2a] p-8">
        <h1 className="text-3xl font-black">About MovieExplorer</h1>
        <p className="mt-4 leading-7 text-slate-400">
          MovieExplorer is a responsive movie discovery website built with
          React, JavaScript, React Router and Tailwind CSS without a UI
          component framework.
        </p>
      </div>
    </section>
  );
}
export default About;
