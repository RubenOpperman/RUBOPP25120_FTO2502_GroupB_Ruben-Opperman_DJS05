import Navbar from "./header";
import Filter from "./filter";
import PageNav from "./PageNav";
import { useLocation } from "react-router-dom";

export default function Layout({
  children,
  currentPage,
  totalPages,
  prevBtn,
  nextBtn,
  onSearchChange,
  onGenreFilter,
  onSortChange,
  search,
  genre,
  sort,
}) {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/podcast/");

  return (
    <>
      {!isDetailPage && <Navbar search={search} onChange={onSearchChange} />}
      {!isDetailPage && (
        <Filter
          genre={genre}
          sort={sort}
          onSortChange={onSortChange}
          genreFilter={onGenreFilter}
        />
      )}
      {children}
      {!isDetailPage && (
        <PageNav
          currentPage={currentPage}
          totalPages={totalPages}
          prevBtn={prevBtn}
          nextBtn={nextBtn}
        />
      )}
    </>
  );
}
