// app/teklif-tesekkur/page.tsx
import Link from 'next/link';

export default function TesekkurPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 px-4">
      <div className="text-center max-w-md bg-white p-10 rounded-xl shadow-xl border border-amber-200">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Teşekkür ederim!
        </h1>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        <strong>Teklifiniz başarıyla alındı. İnceleyip 24 saat içinde size geri dönüş yapacağız.</strong>.
        </p>

        <div className="space-y-3">
          <Link 
            href="/"
            className="inline-block w-full bg-[#8B4513] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#A0522D] transition"
          >
            Ana Sayfaya Dön
          </Link>
          
          <Link 
            href="/teklif-form"
            className="inline-block w-full border-2 border-[#8B4513] text-[#8B4513] py-3 px-6 rounded-lg font-semibold hover:bg-[#8B4513] hover:text-white transition"
          >
            Başka bir teklif gönder
          </Link>
        </div>
      </div>
    </div>
  );
}