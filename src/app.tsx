import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import HomePage from '@/pages/home';
import ProductsPage from '@/pages/products';
import ProductDetailPage from '@/pages/product-detail';
import PricingPage from '@/pages/pricing';
import AboutPage from '@/pages/about';
import ContactPage from '@/pages/contact';
import BlogPage from '@/pages/blog';
import ChangelogPage from '@/pages/changelog';

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
