'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Clock, CheckCircle, Shield, Smartphone, Coffee, MapPin, Star, MessageCircle, Mail, X, ChevronRight, Timer } from 'lucide-react'

export default function SipUpDomainSales() {
  const [countdown, setCountdown] = useState(7 * 24 * 60 * 60) // 7 days in seconds
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    price: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 0) return 0
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatCountdown = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60))
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60))
    const minutes = Math.floor((seconds % (60 * 60)) / 60)
    const secs = seconds % 60

    return `${days}g ${hours}s ${minutes}d ${secs}s`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('Teklifiniz başarıyla alındı! En kısa sürede size dönüş yapacağız.')
        setFormData({ name: '', email: '', price: '', message: '' })
      } else {
        setSubmitMessage('Bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      setSubmitMessage('Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-[#F9F6F2]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <img
            src="/coffee-hero.jpg"
            alt="Turkish Coffee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] to-[#654321] opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <img
              src="/sipup-logo.png"
              alt="SipUp Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <Badge className="bg-[#FFD700] text-[#8B4513] text-lg px-6 py-2 mb-4">
              <Timer className="w-4 h-4 mr-2" />
              Teklif Süresi: {formatCountdown(countdown)}
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            sipup.com.tr
          </h1>

          <h2 className="text-2xl md:text-3xl mb-8 font-light">
            Türkiye'deki Kahve Teslimat İçin Yeni Markanız
          </h2>

          <p className="text-xl mb-8 opacity-90">
            Premium .com.tr domaini - Kahve ve teslimat sektörü için mükemmel
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#FFD700] text-[#8B4513] hover:bg-[#FFC700] text-lg px-8 py-4"
              onClick={() => document.getElementById('offer-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Domaini Şimdi Rezerv Et - $988
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>

            <a
              href="https://wa.me/+212775602409?text=Merhaba,%20sipup.com.tr%20domaini%20hakkında%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile İletişim
            </a>
          </div>
        </div>
      </section>

      {/* Why sipup.com.tr? Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#8B4513]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Neden sipup.com.tr?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-[#8B4513] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🇹🇷</div>
                <CardTitle className="text-[#8B4513]">Güçlü Türk Kimliği</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  .com.tr = Yerel müşteriler için en yüksek güven seviyesi
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#8B4513] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">☕</div>
                <CardTitle className="text-[#8B4513]">Kafe ve Teslimat İçin Mükemmel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  "SipUp" = Yudumla ve devam et - mobil uygulamalar için ideal
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#8B4513] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <CardTitle className="text-[#8B4513]">Mobil Uygulamaya Hazır</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Kısa, akılda kalıcı, App Store için mükemmel
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#8B4513] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <CardTitle className="text-[#8B4513]">Yasal Güvenli</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  VoIP ile çakışmaz - içecekler için mükemmel
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Vision Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#8B4513]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Proje Vizyonu
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-[#8B4513] to-[#654321] rounded-lg p-8 text-white">
                <Smartphone className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-4">SipUp Mobil Uygulaması</h3>
                <p className="mb-4">
                  Kullanıcıların en yakın kafeden Türk kahvesi sipariş etmelerini sağlayan uygulama
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                    Anlı kahve teslimatı
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                    Haftalık abonelik sistemi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                    Sadakat puanları
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                    İstanbul haritası entegrasyonu
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src="/sipup-app-mockup.jpg"
                alt="SipUp Mobile App"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Offers Section */}
      <section id="offer-form" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 text-[#8B4513]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Fiyat ve Teklifler
          </h2>

          {/* Grid مع تمركز البطاقة في المنتصف */}
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <Card className="border-2 border-[#8B4513] md:col-span-2 w-full max-w-md">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-[#8B4513]">$988</CardTitle>
                <CardDescription>Başlangıç Fiyatı</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    .com.tr domain transferi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Atom.com üzerinden güvenli ödeme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    24 saat içinde transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Fatura + mülkiyet sertifikası
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Offer Form */}
          <Card className="mt-12 border-2 border-[#8B4513]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#8B4513] text-center">Teklif Formu</CardTitle>
              <CardDescription className="text-center">
                $750 üzerindeki teklifler değerlendirilecektir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Adınız Soyadınız</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-[#8B4513]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-posta Adresiniz</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#8B4513]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="price">Teklif Fiyatı ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="790"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="border-[#8B4513]"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mesajınız (İsteğe Bağlı)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-[#8B4513]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8B4513] hover:bg-[#654321] text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Teklifi Gönder'}
                </Button>

                {submitMessage && (
                  <div className={`text-center p-3 rounded-lg ${submitMessage.includes('başarıyla') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Secure Purchase Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#8B4513]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Güvenli Satın Alma Süreci
          </h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Teklif Verin', desc: 'Formu doldurun ve teklifinizi gönderin' },
              { step: 2, title: 'Escrow ile Ödeme', desc: 'Atom.com üzerinden güvenli ödeme yapın' },
              { step: 3, title: '24 Saatte Transfer', desc: 'Domain 24 saat içinde transfer edilir' },
              { step: 4, title: 'Fatura ve Sertifika', desc: 'Fatura ve mülkiyet sertifikası alın' }
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-[#8B4513]">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                <Shield className="w-8 h-8 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#8B4513]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sıkça Sorulan Sorular
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-[#8B4513] rounded-lg px-4">
              <AccordionTrigger className="text-left text-[#8B4513]">
                Domain gerçekten mevcut mu?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Evet, domain Atom.com üzerinden satın alınabilir durumda ve anında transfer için hazırdır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-[#8B4513] rounded-lg px-4">
              <AccordionTrigger className="text-left text-[#8B4513]">
                İçecekler dışında kullanılabilir mi?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Evet, ancak içecek sektörü için en uygun ve değerli kullanım alanıdır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-[#8B4513] rounded-lg px-4">
              <AccordionTrigger className="text-left text-[#8B4513]">
                Daha yüksek teklif alırsam ne olur?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                En yüksek teklif kazanır. Sizin teklifinizden daha yüksek bir teklif gelmezse domain sizin olur.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-[#8B4513] rounded-lg px-4">
              <AccordionTrigger className="text-left text-[#8B4513]">
                Transfer süreci ne kadar sürer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Ödeme onaylandıktan sonra transfer 24 saat içinde tamamlanır.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">sipup.com.tr</h3>
              <p className="text-sm opacity-90">
                Türkiye'nin premium kahve teslimat domaini
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Hızlı Linkler</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#offer-form" className="hover:text-[#FFD700] transition-colors">İletişim</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  0xdseller@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: +212 775 602 409
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Sosyal Medya</h4>
              <div className="flex gap-3">
                <a href="https://x.com/0xdseller" className="bg-white text-[#8B4513] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors">
                  <X className="w-5 h-5" />
                </a>
                <a href="mailto:0xdseller@gmail.com
" className="bg-white text-[#8B4513] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 sipup.com.tr. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}