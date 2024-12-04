function WelcomePage() {
  return (
    <main className="w-full h-full p-10">
      <div className="w-full py-5 px-5 rounded-lg border">
        <h1 className="text-3xl my-2">Welcome back,</h1>
        <h1 className="text-2xl my-2 font-bold">User Name!</h1>
        <button type="button" className="p-2 my-2 border rounded-lg">
          Continue Studying
        </button>
      </div>
      <div className="grid space-y-5 my-10">
        <h3 className="font-bold text-lg">Enrolled Courses</h3>
        <div className="flex space-x-5">
          <span className="p-5 rounded-lg border font-bold">Pre-Calc</span>
          <span className="p-5 rounded-lg border font-bold">AP English</span>
          <span className="p-5 rounded-lg border font-bold">Explore Courses</span>
        </div>
      </div>
      <div className="flex space-x-5 my-10">
        <aside>
          <div className="font-bold text-lg my-2">Course Statistics</div>
          <div className="rounded-lg p-5 border">
            <p>Continue Learning</p>
          </div>
        </aside>
        <aside>
          <div className="font-bold text-lg my-2">Productivity</div>
          <div className="rounded-lg p-5 border">
            <p>Continue Learning</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default WelcomePage;
