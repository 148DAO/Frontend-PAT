function Navbar() {
  return (
    <main className="absolute top-0 bottom-0 left-0 border-r-2 shadow-lg h-full p-5 px-20">
      <div className="p-5 border rounded-lg mt-10">User Name</div>
      <div className="my-20 grid space-y-6">
        <span>Dashboard</span>
        <span>My Courses</span>
        <span>Classroom</span>
        <span>AI Tutor</span>
        <span>Practice Modules</span>
        <span>Settings</span>
      </div>
      <div className="grid space-y-8">
        <hr />
        <span>Study Rank</span>
        <hr />
        <span>Your Achievements</span>
        <hr />
      </div>
    </main>
  );
}

export default Navbar;
