// app/teklif-form/page.tsx
import Link from 'next/link';

export default function TeklifFormPage() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Teklif Formu
          </h1>
          <p className="text-lg text-gray-600">
            Yukarıdaki teklifler <strong className="text-[#8B4513]">$750</strong> Sadece kabul edildi
          </p>
        </div>

        {/* الفورم يرسل مباشرة إلى formsubmit.co */}
        <form 
          action="https://formsubmit.co/0xdseller@gmail.com" 
          method="POST"
          className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-amber-100"
        >
          {/* حماية من السبام */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://sipup.com.tr/teklif-tesekkur" />
          <input type="hidden" name="_subject" value="عرض جديد على sipup.com.tr!" />
          <input type="hidden" name="_template" value="table" />

          {/* الاسم */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ad ve Soyad  *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ad ... "
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition"
            />
          </div>

          {/* الإيميل */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2"> E-posta *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="ahmed@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition"
            />
          </div>

          {/* السعر */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Fiyat teklifi (ABD doları cinsinden) *</label>
            <input
              type="number"
              name="price"
              min="750"
              required
              placeholder="örnek: 1200"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                if (val < 750 && val > 0) {
                  e.target.setCustomValidity('asgari $750');
                } else {
                  e.target.setCustomValidity('');
                }
              }}
            />
          </div>

          {/* الرسالة */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ek mesaj (isteğe bağlı)</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Atom.com üzerinden mi ödeme yapmak istiyorsunuz? Yoksa özel bir teklifiniz mi var?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent transition"
            />
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-[#A0522D] transition transform hover:scale-105 shadow-md"
          >
            Teklifinizi şimdi gönderin
          </button>

          <p className="text-xs text-gray-500 text-center mt-6">
            Mesajlar hemen gönderilir <strong>0xdseller@gmail.com</strong>
          </p>
        </form>

        <div className="text-center mt-8">
          <Link href="/" className="text-[#8B4513] hover:underline font-medium">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </section>
  );
}