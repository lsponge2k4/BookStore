// src/components/Pagination.jsx
export default function Pagination({ page, total, limit, onPageChange }) {
    const totalPages = Math.ceil(total / limit);
    // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex flex-col items-center gap-4 mt-12">
            {/* Dòng 1: Previous / Next */}
            <div className="flex gap-4">
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page <= 1}
                    className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                >
                    Trang trước
                </button>
                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page >= totalPages}
                    className="px-6 py-3 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                >
                    Trang sau
                </button>
            </div>

            {/* Dòng 2: Page X / Y */}
            <div className="text-sm text-gray-600">
                Trang <span className="font-bold text-indigo-600">{page}</span> của {' '}
                <span className="font-bold">{totalPages}</span>
            </div>
        </div>
    );
}