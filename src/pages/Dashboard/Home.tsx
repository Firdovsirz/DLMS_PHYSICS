import PageMeta from "../../components/common/PageMeta";
import CopyrightIcon from '@mui/icons-material/Copyright';
import BookMetrics from "../../components/metrics/BookMetrics";
import UserMetrics from "../../components/metrics/UserMetrics";
import LibrarianMetrics from "../../components/metrics/LibrarianMetrics";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="w-[100%] flex flex-col items-center justify-center">
        <h1 className="mb-20 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-m">
          Fizika İnstitutu Kitabxana sistemi
        </h1>
        <div className="w-[100%] flex justify-between">
          <BookMetrics />
          <UserMetrics />
          <LibrarianMetrics />
        </div>
        <div className="text-white fixed bottom-0 left-0 w-full flex flex-col justify-center items-center bg-gray-900 py-2 z-50">
          <div>
          <CopyrightIcon className="mr-[10px]"/>
          AMEA Fizika İnstitutu 1959 - 2025
          </div>
          Firdovsi Rzaev {`(Full-Stack Developer)`} tərəfindən Fizika İnstitutu üçün hazırlanıb.
        </div>
      </div>
    </>
  );
}
