export default function PageNav({ currentPage, totalPages, nextBtn, prevBtn }) {
  return (
    <div className="flex justify-center gap-4 py-4 bg-NavBar-bg">
      <button
        onClick={prevBtn}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white rounded disabled:opacity-50 outline-none cursor-pointer"
      >
        Previous
      </button>
      <span className="text-white">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={nextBtn}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white  rounded disabled:opacity-50 outline-none cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
