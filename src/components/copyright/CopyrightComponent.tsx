import CopyrightIcon from '@mui/icons-material/Copyright';

export default function CopyrightComponent() {
    return (
        <div className="w-[100%] text-white fixed bottom-0 left-0 w-full flex flex-col justify-center items-center bg-gray-900 py-2 z-50">
            <div>
                <CopyrightIcon className="mr-[10px]" />
                AMEA Fizika İnstitutu 1959 - 2025
            </div>
            <p>Firdovsi Rzaev {`(Full-Stack Developer)`} tərəfindən Fizika İnstitutu üçün hazırlanıb.</p>
        </div>
    )
}
