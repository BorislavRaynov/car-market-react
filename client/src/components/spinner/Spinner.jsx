export default function Spinner() {
    return (
        <div className="absolute right-1/2 transform">
           <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
    );
};